const nodemailer = require("nodemailer");

function sendMail(options) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: process.env.EMAIL,
      ...options
    };

    transporter.sendMail(mailOptions, (error, info) => {
      console.log(error, info);
      if(error) {
        console.error(error);
        return reject({
          message: "An error has ocurred"
        });
      }
    
      return resolve({
        message: "Email sent successfully"
      });
    });
  });
}

module.exports = sendMail;
