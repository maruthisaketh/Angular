const express = require("express");
const cors = require("cors");
const authController = require("./models/authController");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hello World!!");
});

app.post('/get-users', (req, res) => {
    authResponse = authController.login(req, res);
    res.send(authResponse);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
