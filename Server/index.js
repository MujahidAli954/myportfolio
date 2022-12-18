const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require('path');
const {google} = require('googleapis');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Running {PORT}`));

//Server Production assests
// if(process.env.NODE_ENV === "production"){
//   app.use(express.static(path.join("Client/build")));
//   app.get("*",(req, res) => {res.sendFile(path.resolve(__dirname,"Client","build","index.html"))});
// }

// Static folder
const OAUTH_REFRESH_TOKEN = process.env.OAUTH_REFRESH_TOKEN;
const OAUTH_CLIENTID = process.env.OAUTH_CLIENTID;
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const OAUTH_CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;
const OAUTH_ACCESS_TOKEN = process.env.OAUTH_ACCESS_TOKEN;

const oAuth2Client = new google.auth.OAuth2(
 OAUTH_CLIENTID,
OAUTH_CLIENT_SECRET,
REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token:OAUTH_REFRESH_TOKEN });
const accessToken = oAuth2Client.getAccessToken();

const contactEmail =  nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: "OAuth2",
   user: process.env.EMAIL,
   pass: process.env.WORD,
    clientId: OAUTH_CLIENTID,
    clientSecret: OAUTH_CLIENT_SECRET,
    refreshToken: OAUTH_REFRESH_TOKEN,
    accessToken: OAUTH_ACCESS_TOKEN,
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  } 
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error)
  } else { 
    console.log("Ready to Send");
  }
});


router.post("*", (req, res) => {
  const {name,email,message} = req.body;
  const mail = {
   from: `${req.body.mailerState.email}`,
   to:process.env.Email,
   subject: `Message from: ${req.body.mailerState.email}`,
   text: `${req.body.mailerState.message}`,
  }
  // console.log(mail);
  contactEmail.sendMail(mail, (error,info) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent"});
    }
  });
});
