'use client';

import { useEffect, useState } from 'react';
import { Phone, Home } from 'lucide-react';

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isContactsVisible, setIsContactsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
      const contactsSection = document.getElementById('contacts');
      if (contactsSection) {
        const rect = contactsSection.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight - 100 && rect.bottom >= 100;
        
        if (isInViewport !== isContactsVisible) {
          setIsTransitioning(true);
          setTimeout(() => setIsTransitioning(false), 300);
        }
        
        setIsContactsVisible(isInViewport);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isContactsVisible]);

  const handleClick = () => {
    if (isContactsVisible) {
      const headSection = document.getElementById('head');
      if (headSection) {
        headSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const contactsSection = document.getElementById('contacts');
      if (contactsSection) {
        contactsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const Icon = isContactsVisible ? Home : Phone;
  const tooltipText = isContactsVisible ? 'Наверх' : 'Контакты';

  return (
    <button
      onClick={handleClick}
      className={`
        fixed bottom-8 right-6 z-50 cursor-pointer
        flex items-center justify-center
        bg-[#3B82F6] hover:bg-[#2563EB]
        text-white rounded-full
        transition-all duration-500 ease-out
        shadow-lg hover:shadow-xl
        group
        ${isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-20 pointer-events-none'
        }
      `}
      style={{
        width: '56px',
        height: '56px',
      }}
    >
      <div className="relative cursor-pointer flex items-center justify-center w-full h-full">
        <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
        <Icon 
          className={`
            w-6 h-6 transition-all duration-300 ease-in-out
            ${isTransitioning ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}
          `} 
          strokeWidth={1.5} 
        />
      </div>
      
      <span className="
        absolute right-full mr-3
        whitespace-nowrap
        bg-[#1E293B]/90 backdrop-blur-sm
        text-white
        px-3 py-1.5 rounded-lg
        text-sm font-body
        opacity-0 group-hover:opacity-100
        translate-x-2 group-hover:translate-x-0
        transition-all duration-300 ease-out
        pointer-events-none
        shadow-md
      ">
        {tooltipText}
      </span>

      {isVisible && !isContactsVisible && (
        <span className="absolute inset-0 rounded-full animate-ping bg-[#3B82F6] opacity-20" style={{ animationDuration: '2s' }} />
      )}
    </button>
  );
}