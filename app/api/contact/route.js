require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(cors());

// Configure Multer for file upload
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = [".doc", ".docx", ".pdf"];
    if (allowedTypes.includes(path.extname(file.originalname).toLowerCase())) {
      cb(null, true);
    } else {
      cb(new Error("Only .doc, .docx, and .pdf files are allowed!"));
    }
  },
});

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API route to send email
app.post("/send-email", upload.single("file"), async (req, res) => {
  try {
    const { name, company, email, phone, address, message } = req.body;
    const file = req.file;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "recipient@example.com", // Change this to your email
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Company: ${company}
        Email: ${email}
        Phone: ${phone}
        Address: ${address}
        Message: ${message}
      `,
      attachments: file
        ? [{ filename: file.originalname, path: file.path }]
        : [],
    };

    await transporter.sendMail(mailOptions);

    if (file) fs.unlinkSync(file.path); // Delete file after sending

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
