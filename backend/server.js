import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const TELEGRAM_BOT_TOKEN = "8260660890:AAE2lYCbJ7w8hsf3-Z4S7_BuiaSsP0MJ5fA";
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
${message}
`;

  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: CHAT_ID,
        text,
      }
    );
    res.status(200).json({ status: "success", data: response.data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: "Xabar yuborilmadi" });
  }
});

app.listen(PORT, () => {
  console.log(`Server ${PORT} portda ishlayapti`);
});
