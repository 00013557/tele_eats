const axios = require("axios");

const TELEGRAM_GATEWAY_URL = "https://tgateway.telegram.org";
const API_KEY = process.env.TELEGRAM_API_KEY; // Secure API key

// 📌 Function to send OTP
exports.sendOTP = async (req, res) => {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
        return res.status(400).json({ error: "Phone number is required!" });
    }

    try {
        const response = await axios.post(`${TELEGRAM_GATEWAY_URL}/send_code`, {
            api_key: API_KEY,
            phone: phoneNumber
        });

        return res.json({ requestId: response.data.request_id });
    } catch (error) {
        return res.status(500).json({ error: "Failed to send OTP", details: error.message });
    }
};

// 📌 Function to verify OTP
exports.verifyOTP = async (req, res) => {
    const { requestId, code } = req.body;

    if (!requestId || !code) {
        return res.status(400).json({ error: "Request ID and OTP code are required!" });
    }

    try {
        const response = await axios.post(`${TELEGRAM_GATEWAY_URL}/check_code`, {
            api_key: API_KEY,
            request_id: requestId,
            code: code
        });

        return res.json({ verified: response.data.success });
    } catch (error) {
        return res.status(500).json({ error: "Failed to verify OTP", details: error.message });
    }
};
