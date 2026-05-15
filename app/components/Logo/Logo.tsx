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
    <div className="mt-5">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="flex flex-col">
            <div className="relative overflow-hidden">
              <span className={`
                text-[#F1F5F9] font-black tracking-tighter
                text-2xl
                sm:text-3xl
                lg:text-4xl
                ${glitch ? 'translate-x-0.5' : ''}
                inline-block transition-transform duration-75
              `}>
                Sigma
              </span>
              <span className="text-[#3B82F6] font-black tracking-tighter ml-0.5
                text-2xl
                sm:text-3xl
                lg:text-4xl">
                Service
              </span>
              {glitch && (
                <>
                  <span className="absolute top-0 left-0 text-[#F1F5F9] font-black tracking-tighter opacity-40 blur-[1px] -translate-x-0.5
                    text-2xl
                    sm:text-3xl
                    lg:text-4xl">
                    Sigma
                  </span>
                  <span className="absolute top-0 left-0 text-[#22C55E] font-black tracking-tighter opacity-40 blur-[1px] translate-x-0.5
                    text-2xl
                    sm:text-3xl
                    lg:text-4xl">
                    Sigma
                  </span>
                </>
              )}
            </div>
            <div className="flex items-center gap-1 mt-0.5 font-mono tracking-tighter
              text-[10px]
              sm:text-[12px]
              lg:text-[14px]">
              <span className="text-[#22C55E]">{"$"}</span>
              <span className="text-[#64748B]">service sigma started</span>
              <span className={`
                bg-[#3B82F6] inline-block
                w-1 h-2.5
                sm:w-1.5 sm:h-3
                lg:w-1.5 lg:h-3.5
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