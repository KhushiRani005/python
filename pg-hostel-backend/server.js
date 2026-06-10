const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// User Schema
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const User = mongoose.model("User", UserSchema);

// PG Schema
const PgSchema = new mongoose.Schema({
    name: String,
    location: String,
    price: String,
    owner: String,
    contact: String,
    image: String
});
const Pg = mongoose.model("Pg", PgSchema);

// User Signup
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        res.json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// User Login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid password" });

        const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "1h" });
        res.json({ token, user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get All PGs
app.get("/pgs", async (req, res) => {
    try {
        const pgs = await Pg.find();
        res.json(pgs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a PG (Protected Route)
app.post("/pgs", async (req, res) => {
    const { name, location, price, owner, contact, image } = req.body;
    try {
        const newPg = new Pg({ name, location, price, owner, contact, image });
        await newPg.save();
        res.json(newPg);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
