const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const path = require("path");

const port = process.env.PORT || 3000; // ✅ Dynamic port for Render

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // ✅ Enable JSON parsing (you had it commented out)

app.use(express.static(path.join(__dirname, "public"))); // ✅ Serve frontend

// ✅ MongoDB connection
mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

// ✅ Mongoose schema
const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});
const Form = mongoose.model("Form", formSchema);

// ✅ Handle form submission
app.post("/submit", async (req, res) => {
  try {
    console.log("BODY RECEIVED:", req.body);
    let newForm = await Form.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    });

    res.status(200).json({ newForm });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
});

// ✅ Fallback route (for unknown paths like "/", "/index.html", etc.)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
