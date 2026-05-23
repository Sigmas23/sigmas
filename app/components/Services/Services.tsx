'use client'
import { 
  Monitor, Laptop, Smartphone, Printer, Shield, ShieldCheck, 
  HardDrive, FolderSearch, Cloud, Network, Server, PhoneCall, 
  Database, Lock, ShieldAlert, Binary, Bot,
  Waypoints,
  Brain
} from 'lucide-react'

const services = [
  {
    category: 'Ремонт и покупка',
    items: [
      { icon: Monitor, title: 'Системные блоки' },
      { icon: Laptop, title: 'Ноутбуки' },
      { icon: Smartphone, title: 'Телефоны' },
      { icon: Printer, title: 'Оргтехника' },
    ]
  },
  {
    category: 'Удаление вирусов',
    items: [
      { icon: Shield, title: 'Чистка от вирусов' },
      { icon: ShieldCheck, title: 'Антивирусная защита' },
    ]
  },
  {
    category: 'Восстановление данных',
    items: [
      { icon: HardDrive, title: 'Диски и флешки' },
      { icon: FolderSearch, title: 'Удалённые файлы' },
      { icon: Cloud, title: 'Резервное копирование' },
    ]
  },
  {
    category: 'Облачные сервисы',
    items: [
      { icon: Cloud, title: 'Яндекс.Диск' },
      { icon: Cloud, title: 'Google Диск' },
    ]
  },
  {
    category: 'Сети и серверы',
    items: [
      { icon: Network, title: 'Локальные сети' },
      { icon: Server, title: 'Серверы' },
      { icon: PhoneCall, title: 'IP-телефония' },
      { icon: Database, title: 'Сетевые хранилища' },
    ]
  },
  {
    category: 'Кибербезопасность',
    items: [
      { icon: Lock, title: 'Защита сетей' },
      { icon: ShieldAlert, title: 'Антивирусы' },
    ]
  },
{
    category: 'Разработка',
    items: [
      { icon: Binary, title: 'Сайты под ключ' },
      { icon: Bot, title: 'Боты Telegram' },
      { icon: Waypoints, title: 'Интеграции и автоматизация' },
      { icon: Brain, title: 'AI-решения' },
    ]
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 lg:py-32 border-b border-[#1E2D45]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
        
        <h2 className="font-display font-extrabold text-[#E2E8F0] leading-[0.92] tracking-[-1.5px] text-center lg:text-left
          text-[48px] 
          sm:text-[72px] 
          lg:text-[96px] 
          xl:text-[112px] mb-20 lg:mb-28">
          Услуги
        </h2>
        
        <div className="flex flex-col gap-28 lg:gap-36">
          {services.map((category, catIdx) => (
            <div key={catIdx}>
              <div className="flex items-center gap-4 mb-10 lg:mb-14">
                <span className="font-mono text-xs text-[#3B82F6] tracking-[4px] uppercase">
                  {String(catIdx + 1).padStart(2, '0')}
                </span>
                <span className="h-[1px] flex-1 bg-[#1E2D45]"></span>
                <h3 className="font-mono text-sm text-[#64748B] tracking-[3px] uppercase">
                  {category.category}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx}
                    className="group relative p-8 lg:p-10 bg-[#111827]/30 backdrop-blur-xl border border-white/[0.04] rounded-2xl
                      hover:bg-[#111827]/50 hover:border-white/[0.06] hover:backdrop-blur-2xl
                      transition-all duration-700 ease-out
                      shadow-[0_2px_16px_-6px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)]
                      flex flex-col items-center text-center"
                  >
                    {/* Сияние при наведении */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700
                      bg-gradient-to-t from-[#3B82F6]/5 to-transparent pointer-events-none"></div>
                    
                    {/* Иконка */}
                    <div className="relative mb-6 lg:mb-8">
                      <div className="absolute inset-0 bg-[#3B82F6]/10 rounded-full blur-xl scale-150 
                        group-hover:bg-[#3B82F6]/20 group-hover:scale-[1.8] transition-all duration-700"></div>
                      <item.icon size={48} className="relative text-[#3B82F6] group-hover:scale-110 transition-transform duration-700" strokeWidth={1} />
                    </div>
                    
                    {/* Название */}
                    <h4 className="font-body font-medium text-[#E2E8F0] text-base lg:text-lg leading-[1.3]">
                      {item.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};