const axios = require("axios");

const sendEmailController = async (req, res) => {
  const your_email = "p3m150402@gmail.com";
  try {
    const { name, email, msg } = req.body;

    if (!name || !email || !msg) {
      return res.status(400).send({
        isSuccess: false,
        message: "Please provide all the details!",
      });
    }

    await axios.post(
      "https://api.sendinblue.com/v3/smtp/email",
      {
        sender: {
          name,
          email,
        },
        to: [
          {
            email: your_email,
          },
        ],
        subject: "Portfolio Hire",
        textContent: msg,
      },
      {
        headers: {
          "api-key": process.env.AXIOS_SENDINBLUE_API_KEY,
        },
      }
    );
    res.status(200).send({
      isSuccess: true,
      message: "Email Sent!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      isSuccess: false,
      message: "Sending Email failed",
      error,
    });
  }
};

module.exports = { sendEmailController };
