import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const BOT_TOKEN = "8260660890:AAE2lYCbJ7w8hsf3-Z4S7_BuiaSsP0MJ5fA";
const CHAT_ID = "-1003584258291";

app.post("/send-message", async (req, res) => {
  const { name, phone, email, topic, message } = req.body;

  const text = `
📩 Yangi so'rov

👤 Ism: ${name}
📞 Telefon: ${phone}
📧 Email: ${email}
🏷 Mavzu: ${topic}

📝 Xabar:
${message}`;

  try {
    const response = await axios.get(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        params: {
          chat_id: CHAT_ID,
          text,
        },
      }
    );
    res.status(200).json({ success: true, result: response.data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(5000, () => console.log("Server 5000 portda ishlayapti"));
