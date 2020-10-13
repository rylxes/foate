const nodemailer = require("nodemailer");

export default async (req, res) => {
  if (req.method === "POST") {
    const mailData = JSON.parse(req.body);
    console.log("Email: ", mailData)
    let transporter = await nodemailer.createTransport({
      host: "smtp.zoho.eu",
      port: 465,
      secure: true, //ssl
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    let mailOptions = await transporter.sendMail({
      from: `"${mailData.name}" <${process.env.EMAIL_USER}>`, // sender address (who sends)
      to: process.env.EMAIL_USER, // list of receivers (who receives)
      subject: `From First String Website Contact Form`, // Subject line
      html: `
        <h4>Message from ${mailData.name} | ${mailData.email} </h4>
        <p>${mailData.message}</p>
      `
    });

    transporter.sendMail(mailOptions)
      .then(result => res.status(200).send({success: result}))
      .catch(error => res.status(500).send({ msg: error }))

  }
};
