const nodemailer = require('nodemailer');
const logger = require('../models/logger');
const { encode } = require('../models/jwt');

let sendEmail = (email, subject, html, attachments = []) => {
  let mailTransporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_LOGIN,
      pass: process.env.EMAIL_PSW
    }
  });

  let mailDetails = {
    from: 'no-reply@mycontest.dev',
    to: email,
    subject: subject,
    html: html,
    attachments: attachments
  };

  mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      logger.error("Email can't send, email=" + email + ", subject=" + subject, +", err=" + err.message, 'EmailSend')
    } else {
      logger.log("Email send, email=" + email);
    }
  });
}

let emailSendAuth = (email) => {

  let subject = "Verify Your Email Address";
  let html = `
       <!DOCTYPE html>
       <html>
       <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>Email Confirmation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <style type="text/css">
         
          * {   font-family: monospace !important;  }
    
          body,
          table,
          td,
          a { 
            -ms-text-size-adjust: 100%;  
            -webkit-text-size-adjust: 100%;  
            font-family: monospace !important;
          } 
          
          table,
          td {
            mso-table-rspace: 0pt;
            mso-table-lspace: 0pt;
          } 
          img {
            -ms-interpolation-mode: bicubic;
          } 
          a[x-apple-data-detectors] {
            font-family: inherit !important;
            font-size: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
            color: inherit !important;
            text-decoration: none !important;
          } 
          div[style*="margin: 16px 0;"] {
            margin: 0 !important;
          }
          body {
            width: 100% !important;
            height: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          } 
          table {
            border-collapse: collapse !important;
          }
          a {
            color: #1a82e2;
          }
          img {
            height: auto;
            line-height: 100%;
            text-decoration: none;
            border: 0;
            outline: none;
          }
         
        </style>
      </head>
      <body style="background-color: #e9ecef">
        
        <div
          class="preheader"
          style="
            display: none;
            max-width: 0;
            max-height: 0;
            overflow: hidden;
            font-size: 1px;
            line-height: 1px;
            color: #fff;
            opacity: 0;
          "
        >
          A preheader is the short summary text that follows the subject line when
          an email is viewed in the inbox.
        </div> 
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
            <td align="center" bgcolor="#e9ecef"> 
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="max-width: 600px;"
              >
                <tr>
                  <td align="center" valign="top" style="padding: 36px 24px"></td>
                </tr>
              </table> 
            </td>
          </tr> 
          <tr>
            <td align="center" bgcolor="#e9ecef"> 
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="max-width: 600px"
              >
                <tr>
                  <td
                    align="left"
                    bgcolor="#ffffff"
                    style="padding: 36px 24px 0; border-top: 3px solid #d4dadf"
                  >
                    <h1
                      style="
                        margin: 0;
                        font-size: 32px;
                        font-weight: 700;
                        letter-spacing: -1px;
                        line-height: 48px;
                      "
                    >
                      Verify Your Email Address
                    </h1>
                  </td>
                </tr>
              </table> 
            </td>
          </tr> 
          <tr>
            <td align="center" bgcolor="#e9ecef"> 
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="max-width: 600px"
              > 
                <tr>
                  <td
                    align="left"
                    bgcolor="#ffffff"
                    style="padding: 24px; font-size: 16px; line-height: 24px"
                  >
                    <p style="margin-bottom;: 10px">Dear ${email} </p>
                    <p style="margin: 0">
                      Welcome to SMART JOB! We're excited to have you on board. To
                      get started, please verify your email address by clicking the
                      button below:
                    </p>
                  </td>
                </tr> 
                <tr>
                  <td align="left" bgcolor="#ffffff">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td align="center" bgcolor="#ffffff" style="padding: 12px">
                          <table border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td
                                align="center"
                                bgcolor="#1a82e2"
                                style="border-radius: 6px"
                              >
                                <a
                                  href="${process.env.BACK_END}/auth/email/confirm/${encode({ email })}"
                                  target="_blank"
                                  style="
                                    display: inline-block;
                                    padding: 16px 36px;
                                    font-size: 16px;
                                    color: #ffffff;
                                    text-decoration: none;
                                    border-radius: 6px;
                                  "
                                  >Verifly Email</a
                                >
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr> 
                <tr>
                  <td
                    align="left"
                    bgcolor="#ffffff"
                    style="padding: 24px; font-size: 16px; line-height: 24px"
                  >
                    <p style="margin-bottom;: 10px">
                      By clicking the button above, you'll confirm that this is a
                      valid email address and that you have access to it. This step
                      is crucial to ensure the security of your account and to keep
                      you updated about important notifications.
                    </p>
                    <p style="margin: 0">
                      If you did not sign up for SMART JOB, you can simply ignore
                      this email.
                    </p>
                    <p style="margin-bottom;: 10px">Thank you for joining us!</p>
                    <p style="margin-bottom;: 10px">Best regards,</p>
                    <p style="margin: 0">The SMART JOB Team</p>
                  </td>
                </tr> 
              </table> 
            </td>
          </tr> 
          <tr>
            <td align="center" bgcolor="#e9ecef" style="padding: 24px">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="max-width: 600px"
              > 
                <tr>
                  <td
                    align="center"
                    bgcolor="#e9ecef"
                    style="
                      padding: 12px 24px;
                      font-size: 14px;
                      line-height: 20px;
                      color: #666;
                    "
                  >
                    <a
                      target="_blank"
                      style="color: #666; text-decoration: underline"
                      href="https://mycontest.dev/terms"
                      rel="noopener noreferrer"
                      >Terms of Service </a
                    >|<a
                      target="_blank"
                      style="color: #666; text-decoration: underline"
                      href="https://mycontest.dev/privacy"
                      rel="noopener noreferrer"
                      >Privacy Policy</a
                    >
                  </td>
                </tr> 
                <tr>
                  <td
                    align="center"
                    bgcolor="#e9ecef"
                    style="
                      padding: 12px 24px;
                      font-size: 14px;
                      line-height: 20px;
                      color: #666;
                    " >
                    <p style="margin: 0">All rights reserved.</p>
                  </td>
                </tr> 
              </table>  
            </td>
          </tr> 
        </table> 
      </body>
      </html>` ;

  let attachments = [];
  sendEmail(email, subject, html, attachments)
}

module.exports = {
  sendEmail, emailSendAuth
}


/*  
 <tr>
            <td align="center" bgcolor="#e9ecef"> 
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="max-width: 600px;"
              >
                <tr>
                  <td align="center" valign="top" style="padding: 36px 24px">
                    <a
                      href="https://mycontest.dev"
                      target="_blank"
                      style="display: inline-block"
                    >
                      <img
                        src="cid:logo"
                        alt="Logo" 
                        style="width: 60px;height:60px;"
                      />
                    </a>
                  </td>
                </tr>
              </table> 
            </td>
          </tr> 


          {
    filename: 'picture.png',
    path: path.join(__dirname, './../public/avatar/favicon.png'),
    cid: 'logo'
  }
          */