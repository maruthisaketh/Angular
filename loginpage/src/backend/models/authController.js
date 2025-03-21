const jwt = require("jsonwebtoken");
const { getUsersFromExcel } = require("../utils/excelReader");

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

const users = getUsersFromExcel("users.xlsx");

exports.login = (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.Email === email && u.Password === password);

    if (!user) {
        return res.json({ success: false, error: "Email or Password incorrect." });
    }

    const token = jwt.sign({ email: user.email, role: user.role }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ success: true, message: "Login successful", token });
};
