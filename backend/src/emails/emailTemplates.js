export const createWelcomeEmailTemplate = ({ name, userEmail, clientURL }) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Welcome</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f4f4; font-family: Arial, sans-serif;">
    
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4; padding:20px 0;">
      <tr>
        <td align="center">
          
          <!-- Main Container -->
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td style="background:#4CAF50; color:#ffffff; text-align:center; padding:20px;">
                <h1 style="margin:0; font-size:24px;">Welcome to CHAIFY 🎉</h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:30px; color:#333333;">
                
                <p style="font-size:16px;">Hi <strong>${name}</strong>,</p>
                
                <p style="font-size:15px; line-height:1.6;">
                  Your account has been successfully created. We're excited to have you on board!
                </p>

                <p style="font-size:15px; line-height:1.6;">
                  You can now start messaging and exploring your workspace.
                </p>

                <!-- Account Info -->
                <table width="100%" cellpadding="0" cellspacing="0" style="margin:20px 0;">
                  <tr>
                    <td style="padding:8px 0; font-size:14px;"><strong>Email:</strong></td>
                    <td style="padding:8px 0; font-size:14px;">${userEmail}</td>
                  </tr>
                </table>

                <!-- CTA Button -->
                <div style="text-align:center; margin:30px 0;">
                  <a href="${clientURL}"
                     style="background:#4CAF50; color:#ffffff; padding:12px 24px; text-decoration:none; border-radius:5px; font-size:14px; display:inline-block;">
                     Start Messaging
                  </a>
                </div>

                <p style="font-size:14px; line-height:1.6;">
                  If you have any questions, feel free to contact our support team.
                </p>

                <p style="font-size:14px;">
                  Best regards,<br/>
                  <strong>CHAIFY Team</strong>
                </p>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f4f4f4; text-align:center; padding:15px; font-size:12px; color:#777;">
                If you did not create this account, please contact support immediately.
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>
  `;
};
