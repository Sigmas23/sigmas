'use client'
import Logo from "../Logo/Logo";
import { ShoppingCart, CircleUserRound } from 'lucide-react';

export default function Nav() {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav 
            className="sticky top-0 z-50 w-full bg-[#0B1121] backdrop-blur-md border-b border-[#1E2D45]"
            style={{ paddingTop: 'env(safe-area-inset-top)' }}
        >
            <div className="w-full">
                <div className="flex items-center justify-between h-[90px] max-w-[1200px] ">
                    
                    <button 
                        onClick={() => scrollTo('head')}
                        className="bg-transparent border-0 cursor-pointer p-0"
                    >
                        <Logo />
                    </button>
                    
                    <nav className="flex items-center gap-5">
                        <button 
                            onClick={() => scrollTo('services')}
                            className="flex cursor-pointer items-center gap-2 text-[#94A3B8] hover:text-[#3B82F6] transition-colors duration-200 bg-transparent border-0 cursor-pointer"
                        >
                            <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" strokeWidth={1.5} />
                            <span className="hidden sm:inline font-body text-sm">Услуги</span>
                        </button>
                        
                        <button 
                            onClick={() => scrollTo('contacts')}
                            className="flex cursor-pointer items-center gap-2 text-[#94A3B8] hover:text-[#3B82F6] transition-colors duration-200 bg-transparent border-0 cursor-pointer"
                        >
                            <CircleUserRound className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" strokeWidth={1.5} />
                            <span className="hidden sm:inline font-body text-sm">Контакты</span>
                        </button>
                    </nav>
                    
                </div>
            </div>
        </nav>
    );
};