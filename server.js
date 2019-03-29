const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
require("dotenv").config();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "pat.gerspach@gmail.com",
    pass: process.env.GMAIL_PASSWORD
  }
});

app.use(favicon(__dirname + "/build/favicon.ico"));


// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/submit/contact", (req, res) => {
  console.log(req);
  let mailOptions = {
    from: "pat.gerspach@gmail.com",
    to: "pat.gerspach@gmail.com",
    subject: `New Contact from ${req.body.name}`,
    text: `Email sent by ${req.body.email}:\n\n${req.body.message}`
  };
  transporter.sendMail(mailOptions, function(error, info) {
    console.log(error);
    if (error) {
      res.sendStatus(401);
    } else {
      res.sendStatus(200);
    }
  });
  res.sendStatus(200)
});
app.get("/ping", function(req, res) {
  return res.send("pong");
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port);
