const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));
app.use("/images", express.static(path.join(__dirname, "images")));

// Define a route for the home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
  res.send("Form submitted successfully!");
});

// Define a route for the about page
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/about.html"));
});
// Define a route for the contact page
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "/contact.html"));
});
// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
