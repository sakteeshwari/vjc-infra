import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import formidable from "formidable";
import fs from "fs";

export const config = {
    api: {
        bodyParser: false, // Disable Next.js default body parser
    },
};

export async function POST(req) {
    try {
        const form = new formidable.IncomingForm();

        const { fields, files } = await new Promise((resolve, reject) => {
            form.parse(req, (err, fields, files) => {
                if (err) reject(err);
                else resolve({ fields, files });
            });
        });

        const { firstName, lastName, email, contactNo, companyName, projectDetails } = fields;

        if (!firstName || !lastName || !email || !contactNo || !companyName || !projectDetails) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_HOST) {
            console.error("❌ Missing Email Configuration in Environment Variables");
            return NextResponse.json({ message: "Email configuration is missing" }, { status: 500 });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        let attachments = [];
        if (files.attachment) {
            const file = files.attachment;
            const fileData = fs.readFileSync(file.filepath);
            attachments.push({ filename: file.originalFilename, content: fileData });
        }

        const mailOptions = {
            from: `VJC Infra Private Limited Contact Form <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: "New Contact Form Submission",
            text: `
                Name: ${firstName} ${lastName}
                Email: ${email}
                Contact No: ${contactNo}
                Company Name: ${companyName}
                Project Details: ${projectDetails}
            `,
            attachments,
        };

        await transporter.sendMail(mailOptions);
        console.log("✅ Email Sent Successfully");

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("❌ Error sending email:", error);
        return NextResponse.json({ message: "Error sending email", error: error.message }, { status: 500 });
    }
}