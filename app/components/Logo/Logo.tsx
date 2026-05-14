'use client'
import React, { useState, useEffect } from 'react';
import "./style.css"

const Logo: React.FC = () => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 150);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="flex flex-col">
            <div className="relative overflow-hidden">
              <span className={`
                text-[#F1F5F9] font-black text-2xl tracking-tighter
                ${glitch ? 'translate-x-0.5' : ''}
                inline-block transition-transform duration-75
              `}>
                Sigma
              </span>
              <span className="text-[#3B82F6] font-black text-2xl tracking-tighter ml-0.5">
                Service
              </span>
              {glitch && (
                <>
                  <span className="absolute top-0 left-0 text-[#F1F5F9] font-black text-2xl tracking-tighter opacity-40 blur-[1px] -translate-x-0.5">
                    Sigma
                  </span>
                  <span className="absolute top-0 left-0 text-[#22C55E] font-black text-2xl tracking-tighter opacity-40 blur-[1px] translate-x-0.5">
                    Sigma
                  </span>
                </>
              )}
            </div>
            <div className="flex items-center gap-1 mt-0.5 font-mono text-[9px] tracking-tighter">
              <span className="text-[#22C55E]">{"$"}</span>
              <span className="text-[#64748B]">service sigma started</span>
              <span className={`
                w-1.5 h-3 bg-[#3B82F6] inline-block
                ${glitch ? 'animate-pulse' : 'animate-blink'}
              `}></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Logo;
