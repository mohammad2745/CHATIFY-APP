import { resendClient, sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "./emailTemplates.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
  const { data, error } = await resendClient.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: email,
    subject: "Welcome to Chaify",
    html: createWelcomeEmailTemplate({ name, userEmail: email, clientURL }),
  });

  if (error) {
    console.log(error);
    throw new Error("Failed to send email");
  }

  console.log("Welcome email sent successfully", data);
};
