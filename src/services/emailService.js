import emailjs from "@emailjs/browser";

const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

export const sendEmail = (formData) => {
  return emailjs.send(
    serviceID,
    templateID,
    formData,
    publicKey
  );
};