# Ankit Acharya - Portfolio Website

A modern, responsive portfolio website for Ankit Acharya, a 16-year-old aspiring web developer from Pokhara, Kaski.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Dark Theme**: Modern dark theme with blue accents
- **Smooth Animations**: GSAP-powered scroll animations and transitions
- **Contact Form**: Functional contact form using EmailJS
- **Modern UI**: Clean, professional design with hover effects

## Sections

1. **Hero Section**: Full-screen introduction with animated text
2. **About Section**: Personal information and experience highlights
3. **Skills Section**: HTML, CSS, and JavaScript skills showcase
4. **Education Section**: Academic achievements (BLE 4.0 GPA, SEE 3.87 GPA)
5. **Contact Section**: Contact information and working contact form

## Technologies Used

- React 18 with TypeScript
- Tailwind CSS for styling
- GSAP for animations
- EmailJS for contact form functionality
- Lucide React for icons
- Vite for development and building

## Contact Form Setup

To enable the contact form functionality:

### 1. Create EmailJS Account
- Go to [EmailJS.com](https://emailjs.com) and create a free account

### 2. Set Up Email Service
- Add an email service (Gmail is recommended)
- Connect your Gmail account or preferred email provider

### 3. Create Email Template
Create a template with these variables:
```
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
```

### 4. Update Configuration
Replace the placeholder values in `src/components/Contact.tsx`:
```typescript
const serviceID = 'your_service_id';
const templateID = 'your_template_id'; 
const publicKey = 'your_public_key';
```

### 5. Test the Form
- Fill out the contact form on your website
- Check that emails are received at ankitacharya848@gmail.com

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site is deployed on Netlify and can be accessed at the provided URL.

## Contact Information

- **Email**: ankitacharya848@gmail.com
- **Phone**: 9856029764
- **Location**: Pokhara, Kaski
- **School**: SCSS School

## License

This project is for personal portfolio use.