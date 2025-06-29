import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Code2, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const headerRef = useRef<HTMLHeaderElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Header entrance animation
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    // Mobile menu animation
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        );
        gsap.fromTo(
          mobileMenuRef.current.children,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.3, stagger: 0.1, delay: 0.1, ease: "power2.out" }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.2,
          ease: "power2.in"
        });
      }
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-blue-500/20"
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Ankit Acharya
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 capitalize hover:glow-text"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden w-10 h-10 flex items-center justify-center text-gray-300 hover:text-blue-400 
                       transition-colors duration-300 rounded-lg hover:bg-blue-500/10"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Menu - Full Screen Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Full Screen Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Menu Content - Positioned absolutely to avoid container constraints */}
          <div
            ref={mobileMenuRef}
            className="absolute top-20 left-4 right-4 bg-slate-800/95 backdrop-blur-sm rounded-xl 
                     border border-blue-500/20 shadow-2xl overflow-hidden"
            style={{ 
              width: 'calc(100vw - 2rem)', 
              maxWidth: 'calc(100vw - 2rem)',
              left: '1rem',
              right: '1rem'
            }}
          >
            <div className="py-6">
              {navigationItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full px-6 py-4 text-left text-gray-300 hover:text-blue-400 
                           hover:bg-blue-500/10 transition-all duration-300 capitalize
                           border-b border-slate-700/50 last:border-b-0 text-lg font-medium
                           flex items-center space-x-3 group"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300"></div>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Footer */}
            <div className="px-6 py-4 bg-slate-900/50 border-t border-slate-700/50">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Code2 className="w-4 h-4 text-blue-400" />
                <span>Ankit Acharya - Web Developer</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;