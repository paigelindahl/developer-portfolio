const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();
const path = require('path');


const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);


const port = process.env.PORT || 8080;

const contactEmail = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: `${process.env.EMAIL}`,
    pass: `${process.env.PASS}`,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});



router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: "Employment Opp",
    to: `${process.env.EMAIL}`,
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
      console.log('this is error', error);
    } else {
      res.json({ status: "Message Sent. We'll get back to you soon. Thank you!" });
    }
  });
});

app.use(express.static(path.join(__dirname, '/front-end/build')));
// Handle React routing, return all requests to React app
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/front-end/build', 'index.html'));
});

app.listen(port, () => console.log(`Server Running on port ${port}`));