import { BrevoClient } from "@getbrevo/brevo";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, surname, email, phone, city, userType } = req.body;

  // 1. Server-side Email Validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ message: 'Indirizzo email non valido.' });
  }

  // 2. Phone Cleaning for Italian Numbers
  let cleanPhone = phone.replace(/\D/g, ''); 
  if (cleanPhone.startsWith('0')) cleanPhone = cleanPhone.substring(1);
  if (!cleanPhone.startsWith('39')) cleanPhone = '39' + cleanPhone;

  // 3. Initialize the New BrevoClient
  const client = new BrevoClient({
    apiKey: process.env.BREVO_API_KEY,
  });

  try {
    // Using the structure from your documentation screenshot
    await client.contacts.createContact({
      email: email,
      attributes: {
        NOME: name,
        COGNOME: surname,
        SMS: cleanPhone,
        CITY: city,
        USER_TYPE: userType
      },
      listIds: [4], // Ensure this is your correct List ID
      updateEnabled: true
    });

    return res.status(200).json({ success: true });
    
  } catch (error) {
    // Detailed error logging for Vercel
    const errorMessage = error.response?.body?.message || "Errore durante l'iscrizione";
    console.error("Brevo API Error:", errorMessage);
    console.error("Full Error Object:", error);
    
    return res.status(400).json({ message: errorMessage });
  }
}