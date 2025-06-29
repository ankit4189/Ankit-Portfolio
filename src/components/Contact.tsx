import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    // Initialize EmailJS with public key
    emailjs.init('YOUR_PUBLIC_KEY');
    
    // Animations
    gsap.fromTo(
      contactInfoRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    );

    gsap.fromTo(
      formRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    );
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      const serviceID = 'service_portfolio'; // You'll need to create this in EmailJS
      const templateID = 'template_contact'; // You'll need to create this in EmailJS
      const publicKey = 'YOUR_PUBLIC_KEY'; // You'll need to get this from EmailJS

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'ankitacharya848@gmail.com',
        reply_to: formData.email,
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Success animation
      gsap.fromTo(
        formRef.current,
        { scale: 1 },
        { scale: 1.02, duration: 0.2, yoyo: true, repeat: 1 }
      );
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      
      // Error shake animation
      gsap.fromTo(
        formRef.current,
        { x: 0 },
        { x: 10, duration: 0.1, yoyo: true, repeat: 5 }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ankitacharya848@gmail.com',
      href: 'mailto:ankitacharya848@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '9856029764',
      href: 'tel:9856029764'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pokhara, Kaski',
      href: null
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6 bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, collaborating on projects, 
                or just having a chat about web development. Feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center 
                                   group-hover:bg-blue-600/30 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white hover:text-blue-400 transition-colors duration-300 text-lg"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white text-lg">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-lg 
                           focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400
                           text-white transition-all duration-300 placeholder-gray-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-lg 
                           focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400
                           text-white transition-all duration-300 placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-lg 
                         focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400
                         text-white transition-all duration-300 placeholder-gray-500"
                placeholder="What's this about?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-lg 
                         focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400
                         text-white transition-all duration-300 resize-none placeholder-gray-500"
                placeholder="Tell me about your project or just say hello..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold 
                       transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25
                       flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed
                       disabled:hover:scale-100 glow-button"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-4 rounded-lg border border-green-400/20 animate-fadeIn">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-4 rounded-lg border border-red-400/20 animate-fadeIn">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>Failed to send message. Please try again or contact me directly at ankitacharya848@gmail.com</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;