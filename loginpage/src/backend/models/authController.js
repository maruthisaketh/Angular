const jwt = require("jsonwebtoken");
const { getUsersFromExcel } = require("../utils/excelReader");

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

const users = getUsersFromExcel("users.xlsx");

exports.login = (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        res.json({ success: false, error: "Incorrect email or password" });
    }

    else {
        const token = jwt.sign({ email: user.email, name: user.username }, SECRET_KEY, { expiresIn: "1h" });
        const username = user.username;

        res.json({ success: true, message: "Login successful", token, username });
    }
};
