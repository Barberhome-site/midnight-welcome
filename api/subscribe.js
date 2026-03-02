import { BrevoClient } from "@getbrevo/brevo";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, surname, email, phone, city, userType } = req.body;

  // 1. Validation & Cleaning
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ message: 'Indirizzo email non valido.' });
  }

  let cleanPhone = phone.replace(/\D/g, ''); 
  if (cleanPhone.startsWith('0')) cleanPhone = cleanPhone.substring(1);
  if (!cleanPhone.startsWith('39')) cleanPhone = '39' + cleanPhone;

  const client = new BrevoClient({
    apiKey: process.env.BREVO_API_KEY,
  });

  try {
    // 2. CHECK IF EMAIL EXISTS
    try {
      // Option 1: Pass the email directly as the identifier
      await client.contacts.getContactInfo(email);
      return res.status(400).json({ message: 'Questa email è già registrata.' });
    } catch (error) {
      // If error is 404, it means the contact doesn't exist, which is good!
      if (error.response?.status !== 404) throw error;
    }

    // 3. CHECK IF PHONE NUMBER EXISTS
    try {
      // Option 2: Use identifierType 'phone_id' for the SMS attribute
      await client.contacts.getContactInfo(cleanPhone, { identifierType: 'phone_id' });
      return res.status(400).json({ message: 'Questo numero di telefono è già registrata.' });
    } catch (error) {
      if (error.response?.status !== 404) throw error;
    }

    // 4. CREATE CONTACT IF NEITHER EXISTS
    await client.contacts.createContact({
      email: email,
      attributes: {
        NOME: name,
        COGNOME: surname,
        SMS: cleanPhone,
        CITY: city,
        USER_TYPE: userType
      },
      listIds: [4], // Replace with your actual list ID
      updateEnabled: false // Set to false to ensure we don't overwrite if checks somehow fail
    });

    return res.status(200).json({ success: true });
    
  } catch (error) {
    const errorMessage = error.response?.body?.message || "Errore durante l'iscrizione";
    console.error("Brevo API Error:", errorMessage);
    return res.status(400).json({ message: errorMessage });
  }
}