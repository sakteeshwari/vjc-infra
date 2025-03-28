import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const formData = await req.formData();
        const file = formData.get("file");
        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        const email = formData.get("email");
        const contactNo = formData.get("contactNo");
        const companyName = formData.get("companyName");
        const projectDetails = formData.get("projectDetails");

        let attachments = [];

        if (file) {
            const fileBuffer = Buffer.from(await file.arrayBuffer());
            attachments.push({
                filename: file.name,
                content: fileBuffer,
            });
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.hostinger.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "New Contact Form Submission",
            html: `
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone No:</strong> ${contactNo}</p>
                <p><strong>Company Name:</strong> ${companyName}</p>
                <p><strong>Message:</strong> ${projectDetails}</p>
            `,
            attachments, // Attach file if uploaded
        };

        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ message: "Email sent successfully!" }), { status: 200 });

    } catch (error) {
        console.error("Email error:", error);
        return new Response(JSON.stringify({ message: "Error sending email", error: error.toString() }), { status: 500 });
    }
}
