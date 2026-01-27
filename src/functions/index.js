const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors");
const nodemailer = require("nodemailer");

admin.initializeApp();

// CORS middleware
const corsHandler = cors({
  origin: [
    "http://localhost:5173",     // DEV
    "https://hbtechlink.in"      // PROD (agar hai)
  ],
  methods: ["POST", "OPTIONS"],
});

// Mail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "hridesh027@gmail.com",
    pass: "mqpptdgxvrxhalhs", // Gmail App Password
  },
});

exports.sendContactEmail = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    try {
      if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
      }

      const { name, email, subject, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing fields" });
      }

      // 1️⃣ Save to Firestore
      await admin.firestore().collection("contacts").add({
        name,
        email,
        subject,
        message,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      // 2️⃣ Send Email
      await transporter.sendMail({
        from: `"Portfolio Contact" <YOUR_GMAIL@gmail.com>`,
        to: "YOUR_GMAIL@gmail.com",
        subject: `New Contact: ${subject || "No Subject"}`,
        html: `
          <h3>New Contact Message</h3>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b><br/>${message}</p>
        `,
      });

      return res.status(200).json({
        success: true,
        message: "Message sent successfully",
      });

    } catch (err) {
      console.error("FUNCTION ERROR:", err);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  });
});
