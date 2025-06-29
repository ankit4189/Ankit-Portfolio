import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Palette, Zap } from 'lucide-react';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    {
      name: 'HTML',
      icon: Code,
      description: 'Semantic markup and modern HTML5 features',
      color: 'from-orange-400 to-orange-600'
    },
    {
      name: 'CSS',
      icon: Palette,
      description: 'Responsive design and advanced styling',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'JavaScript',
      icon: Zap,
      description: 'Dynamic functionality and ES6+ features',
      color: 'from-yellow-400 to-yellow-600'
    }
  ];

  useEffect(() => {
    // Staggered animation for skill cards
    gsap.fromTo(
      skillsRef.current?.children || [],
      { y: 50, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    );
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          My Skills
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          3 years of experience in web development
        </p>
        
        <div ref={skillsRef} className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative bg-slate-800/50 p-8 rounded-xl border border-blue-500/20 
                         hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105
                         skill-card"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 
                              transition-opacity duration-300 rounded-xl blur-xl"
                     style={{
                       background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))`
                     }}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-lg bg-gradient-to-r ${skill.color} 
                                 flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center mb-4 text-white group-hover:text-blue-400 
                               transition-colors duration-300">
                    {skill.name}
                  </h3>
                  
                  <p className="text-gray-400 text-center mb-6 leading-relaxed">
                    {skill.description}
                  </p>
                  
                  <div className="text-center">
                    <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full 
                                   text-sm font-medium border border-blue-500/20">
                      3 Years Experience
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;