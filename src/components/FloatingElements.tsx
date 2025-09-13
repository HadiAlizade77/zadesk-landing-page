import React, { useEffect, useState } from 'react';
import { MessageCircle, Star, Zap, Shield, Users, Clock } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const elements = [
    { icon: MessageCircle, color: 'text-blue-500', size: 'w-8 h-8', delay: 0 },
    { icon: Star, color: 'text-yellow-500', size: 'w-6 h-6', delay: 0.5 },
    { icon: Zap, color: 'text-purple-500', size: 'w-7 h-7', delay: 1 },
    { icon: Shield, color: 'text-green-500', size: 'w-6 h-6', delay: 1.5 },
    { icon: Users, color: 'text-indigo-500', size: 'w-8 h-8', delay: 2 },
    { icon: Clock, color: 'text-orange-500', size: 'w-6 h-6', delay: 2.5 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((element, index) => {
        const Element = element.icon;
        const parallaxX = (mousePosition.x - window.innerWidth / 2) * 0.01 * (index + 1);
        const parallaxY = (mousePosition.y - window.innerHeight / 2) * 0.01 * (index + 1);
        
        return (
          <div
            key={index}
            className="absolute animate-float opacity-20"
            style={{
              left: `${10 + (index * 15)}%`,
              top: `${20 + (index * 10)}%`,
              transform: `translate(${parallaxX}px, ${parallaxY}px)`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${8 + index}s`
            }}
          >
            <Element className={`${element.size} ${element.color}`} />
          </div>
        );
      })}
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-10 animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-1/3 left-1/5 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 transform rotate-45 opacity-10 animate-floatReverse" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg opacity-10 animate-float" style={{ animationDelay: '5s' }} />
    </div>
  );
};

export default FloatingElements;