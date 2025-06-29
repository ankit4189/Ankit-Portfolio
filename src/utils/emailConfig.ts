// EmailJS Configuration
// To set up EmailJS for the contact form:

export const EMAIL_CONFIG = {
  // 1. Go to https://emailjs.com and create an account
  // 2. Create an email service (Gmail is recommended)
  // 3. Create an email template with these variables:
  //    - {{from_name}} - sender's name
  //    - {{from_email}} - sender's email
  //    - {{subject}} - email subject
  //    - {{message}} - email message
  //    - {{to_email}} - recipient email (ankitacharya848@gmail.com)
  
  // Replace these with your actual EmailJS credentials:
  SERVICE_ID: 'service_portfolio', // Your EmailJS service ID
  TEMPLATE_ID: 'template_contact', // Your EmailJS template ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',   // Your EmailJS public key
  
  // Email template example for EmailJS:
  /*
  Subject: New Contact Form Message: {{subject}}
  
  Hello Ankit,
  
  You have received a new message from your portfolio website:
  
  Name: {{from_name}}
  Email: {{from_email}}
  Subject: {{subject}}
  
  Message:
  {{message}}
  
  ---
  This message was sent from your portfolio contact form.
  Reply directly to: {{from_email}}
  */
};

// Instructions for EmailJS setup:
export const SETUP_INSTRUCTIONS = {
  steps: [
    "1. Create account at https://emailjs.com",
    "2. Add email service (Gmail recommended)",
    "3. Create email template with required variables",
    "4. Get your Service ID, Template ID, and Public Key",
    "5. Replace the placeholder values in EMAIL_CONFIG",
    "6. Test the contact form"
  ],
  
  templateVariables: [
    "{{from_name}} - Sender's name",
    "{{from_email}} - Sender's email", 
    "{{subject}} - Email subject",
    "{{message}} - Email message",
    "{{to_email}} - Your email (ankitacharya848@gmail.com)"
  ]
};