import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll-triggered animations
    gsap.fromTo(
      profileRef.current,
      { x: -100, opacity: 0, rotation: -10 },
      {
        x: 0,
        opacity: 1,
        rotation: 0,
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
      contentRef.current,
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

    // Floating animation for profile image
    gsap.to(profileRef.current, {
      y: -15,
      duration: 4,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div ref={profileRef} className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full 
                            flex items-center justify-center border-2 border-blue-400/30 profile-glow">
                <User className="w-32 h-32 text-blue-400" />
              </div>
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/20 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border border-blue-400/10 animate-pulse"></div>
            </div>
          </div>
          
          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span>16 years old</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Pokhara, Kaski</span>
              </div>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate 16-year-old student and aspiring web developer from Pokhara, Kaski. 
              With 3 years of hands-on experience in web development, I've built a solid foundation 
              in HTML, CSS, and JavaScript.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in web development started when I was 13, and since then, I've been 
              constantly learning and creating projects that challenge my skills. I believe in 
              clean code, beautiful design, and user-friendly experiences.
            </p>
            
            <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20 mt-8">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">Experience Highlights</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• 3 years of web development experience</li>
                <li>• Proficient in HTML5, CSS3, and JavaScript ES6+</li>
                <li>• Passionate about creating responsive and accessible web applications</li>
                <li>• Currently pursuing BLE with excellent academic performance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;