import transporter from '../config/email.js';
import AppError from '../errors/AppError.js';

export const sendContactEmail = async ({ name, email, message }) => {
  const mailOptions = {
    from: email,
    to: process.env.MAIL_TO,
    subject: `Nouveau message Portfolio de ${name}`,
    text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <h3>Nouveau message de contact</h3>
      <p><strong>Nom:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Erreur Nodemailer:', error);
    throw new AppError("Échec de l'envoi de l'email", 500);
  }
};
