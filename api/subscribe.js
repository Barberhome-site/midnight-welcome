import * as Brevo from '@getbrevo/brevo';

export default async function handler(req, res) {
  // 1. Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, surname, email, phone, city, userType } = req.body;

  // 2. Email Validation (RFC 5322 standard regex)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ 
      error: 'Invalid Email', 
      message: 'Indirizzo email non valido.' 
    });
  }

  // 3. Basic Presence Validation
  if (!name || !phone || !userType) {
    return res.status(400).json({ 
      error: 'Missing fields', 
      message: 'Tutti i campi obbligatori devono essere compilati.' 
    });
  }

  // 4. Phone Cleaning (Same logic as before)
  let cleanPhone = phone.replace(/\D/g, '');
  if (cleanPhone.startsWith('0')) cleanPhone = cleanPhone.substring(1);
  if (!cleanPhone.startsWith('39')) cleanPhone = '39' + cleanPhone;

  // 5. Setup Brevo
  const apiInstance = new Brevo.ContactsApi();
  apiInstance.setApiKey(Brevo.ContactsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

  try {
    const contact = new Brevo.CreateContact();
    contact.email = email;
    contact.attributes = {
      FIRSTNAME: name,
      LASTNAME: surname,
      SMS: cleanPhone,
      CITY: city,
      USER_TYPE: userType
    };
    contact.listIds = [2]; 
    contact.updateEnabled = true;

    await apiInstance.createContact(contact);
    return res.status(200).json({ success: true });
    
  } catch (error) {
    // If Brevo returns an error (like a bad phone number), send it to the frontend
    const brevoError = error.response?.body?.message || 'Errore durante l\'iscrizione';
    console.error("Brevo API Error:", brevoError);
    
    return res.status(400).json({ 
      error: 'Brevo Error', 
      message: brevoError 
    });
  }
}