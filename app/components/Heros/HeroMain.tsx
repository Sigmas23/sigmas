'use client'
import { Blocks } from 'lucide-react'

export default function HeroMain() {
  return (
    <section className="h-screen min-h-[600px] max-h-[1000px] flex items-center py-20 sm:py-24 lg:py-32">
      <div className="w-full">
        
        <div className="flex flex-col items-center lg:flex-row lg:items-end gap-10 lg:gap-1">
          
          <div className="flex-1 max-w-[800px]">
            
            <div className="flex justify-center mb-8 lg:hidden">
              <Blocks size={250} className="text-[#3B82F6]" strokeWidth={1.5} />
            </div>
            
            <h1 className="font-display font-extrabold text-[#E2E8F0] leading-[0.92] tracking-[-1.5px] text-center lg:text-left
              text-[30px] 
              sm:text-[48px] 
              lg:text-[72px] 
              xl:text-[85px]">
              IT под ключ.
              <br />
              <span className="text-[#3B82F6]">Без отвлечений.</span>
            </h1>
            
            <p className="text-[#94A3B8] leading-[1.7] mt-10 sm:mt-14 lg:mt-16 text-center lg:text-left max-w-[640px]
              text-base
              sm:text-lg
              lg:text-xl">
              Глубокая профессиональная настройка всей IT‑инфраструктуры 
              вашей организации — включая оборудование, программное 
              обеспечение, сети, доступы, резервное копирование и защиту 
              от угроз, — чтобы вы наконец перестали решать технические 
              проблемы и могли целиком сосредоточиться на своей работе 
              и развитии бизнеса.
            </p>
            
          </div>
          
          <div className="hidden lg:flex items-end pb-1 shrink-0">
            <Blocks 
              size={360} 
              className="text-[#3B82F6]"
              strokeWidth={1} 
            />
          </div>
          
        </div>
        
      </div>
    </section>
  );
};