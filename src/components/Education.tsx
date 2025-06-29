import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, School } from 'lucide-react';

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const educationData = [
    {
      level: 'BLE',
      gpa: '4.0',
      status: 'Current',
      icon: GraduationCap,
      color: 'from-green-400 to-green-600'
    },
    {
      level: 'SEE',
      gpa: '3.87',
      status: 'Completed',
      icon: Award,
      color: 'from-blue-400 to-blue-600'
    }
  ];

  useEffect(() => {
    // Timeline animation
    gsap.fromTo(
      timelineRef.current?.children || [],
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    );
  }, []);

  return (
    <section id="education" ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Education
        </h2>
        
        <div ref={timelineRef} className="space-y-8">
          {/* School Info */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-slate-800/50 px-6 py-3 rounded-lg border border-blue-500/20">
              <School className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-semibold text-blue-400">SCSS School</span>
            </div>
          </div>
          
          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div
                key={edu.level}
                className="relative bg-slate-800/50 p-8 rounded-xl border border-blue-500/20 
                         hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-[1.02]
                         education-card"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${edu.color} 
                                   flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{edu.level}</h3>
                      <p className="text-gray-400">{edu.status}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-400 mb-1">
                      {edu.gpa}
                    </div>
                    <div className="text-sm text-gray-400">GPA</div>
                  </div>
                </div>
                
                {/* Progress indicator */}
                <div className="mt-6">
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${edu.color}`}
                      style={{ width: `${(parseFloat(edu.gpa) / 4) * 100}%` }}
                    ></div>
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

export default Education;