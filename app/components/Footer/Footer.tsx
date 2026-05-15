import { ToGisIcon, AvitoIcon, TelegramIcon, WhatsappIcon } from "../Icons/index"

const contactInfo = {
  address: 'г. Краснодар, ул. Героя Аверкиева д.6, 2 подъезд, цокольный этаж, офис 67',
  company: 'Сигма-Сервис',
  phone: '+7 (999) 070-22-62',
  name: 'Самозанятый Ступников Иван Андреевич',
  inn: 'ИНН 251009715838',
  email: 'Sigmas23@bk.ru',
};

const links = [
  { icon: ToGisIcon, label: '2ГИС', href: 'https://2gis.ru/krasnodar/firm/70000001061399143' },
  { icon: AvitoIcon, label: 'Авито', href: 'https://www.avito.ru/krasnodar/predlozheniya_uslug/sistemnyy_administrator_remont_kompyuterov_3331233472?utm_campaign=native&utm_medium=item_page_android&utm_source=soc_sharing_seller' },
  { icon: TelegramIcon, label: 'Telegram', href: 'https://t.me/Sigmas23' },
  { icon: WhatsappIcon, label: 'WhatsApp', href: 'https://api.whatsapp.com/send/?phone=79990702262&type=phone_number&app_absent=0' },
];

export default function Footer() {
  return (
    <footer id="contacts" className="py-16 sm:py-20 lg:py-32 border-b border-[#1E2D45]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-10">

        <h2 className="font-display font-extrabold text-[#E2E8F0] leading-[0.92] tracking-[-1.5px] text-left
          text-[40px] 
          sm:text-[56px] 
          lg:text-[96px] 
          xl:text-[112px] mb-12 sm:mb-16 lg:mb-28">
          Контакты
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">

          <div className="space-y-6 sm:space-y-10">

            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-3">
                <span className="font-mono text-[10px] sm:text-xs text-[#3B82F6] tracking-[4px] uppercase shrink-0">01</span>
                <span className="h-[1px] w-4 sm:w-8 bg-[#1E2D45]"></span>
                <span className="font-mono text-[10px] sm:text-xs text-[#64748B] tracking-[3px] uppercase">Адрес</span>
              </div>
              <p className="font-body text-sm text-[#94A3B8] leading-[1.5] ml-8 sm:ml-14">
                {contactInfo.address}
              </p>
              <p className="font-body text-xs text-[#64748B] mt-0.5 ml-8 sm:ml-14">
                {contactInfo.company}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-3">
                <span className="font-mono text-[10px] sm:text-xs text-[#3B82F6] tracking-[4px] uppercase shrink-0">02</span>
                <span className="h-[1px] w-4 sm:w-8 bg-[#1E2D45]"></span>
                <span className="font-mono text-[10px] sm:text-xs text-[#64748B] tracking-[3px] uppercase">Телефон</span>
              </div>
              <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                className="block font-mono text-base sm:text-lg lg:text-xl text-[#E2E8F0] hover:text-[#3B82F6] transition-colors duration-200 ml-8 sm:ml-14 no-underline">
                {contactInfo.phone}
              </a>
              <p className="font-body text-xs text-[#64748B] mt-0.5 ml-8 sm:ml-14">
                {contactInfo.name}
              </p>
              <p className="font-mono text-[10px] text-[#64748B] mt-0.5 ml-8 sm:ml-14">
                {contactInfo.inn}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-3">
                <span className="font-mono text-[10px] sm:text-xs text-[#3B82F6] tracking-[4px] uppercase shrink-0">03</span>
                <span className="h-[1px] w-4 sm:w-8 bg-[#1E2D45]"></span>
                <span className="font-mono text-[10px] sm:text-xs text-[#64748B] tracking-[3px] uppercase">Email</span>
              </div>
              <a href={`mailto:${contactInfo.email}`}
                className="block font-mono text-sm sm:text-base lg:text-lg text-[#94A3B8] hover:text-[#3B82F6] transition-colors duration-200 ml-8 sm:ml-14 no-underline break-all">
                {contactInfo.email}
              </a>
            </div>

          </div>

          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-10">
              <span className="font-mono text-[10px] sm:text-xs text-[#3B82F6] tracking-[4px] uppercase shrink-0">04</span>
              <span className="h-[1px] w-4 sm:w-8 bg-[#1E2D45]"></span>
              <span className="font-mono text-[10px] sm:text-xs text-[#64748B] tracking-[3px] uppercase">Где нас найти</span>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-4 ml-8 sm:ml-14">
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 sm:gap-4 p-3 sm:p-5 bg-[#111827]/30 backdrop-blur-xl border border-white/[0.04] rounded-2xl
                    hover:bg-[#111827]/50 hover:border-white/[0.06]
                    transition-all duration-500 ease-out no-underline
                    shadow-[0_2px_16px_-6px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-[#E2E8F0] 
                    group-hover:bg-white transition-colors duration-500 shrink-0">
                    <link.icon />
                  </div>
                  <span className="font-body text-xs sm:text-base text-[#94A3B8] group-hover:text-[#E2E8F0] transition-colors duration-500">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-14 sm:mt-20 lg:mt-32 pt-5 sm:pt-8 border-t border-[#1E2D45] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4">
          <p className="font-mono text-[10px] sm:text-xs text-[#64748B] tracking-wider">
            © {new Date().getFullYear()} Сигма-Сервис
          </p>
          <p className="font-mono text-[10px] sm:text-xs text-[#64748B] tracking-wider">
            ИНН 251009715838
          </p>
          <div className="font-mono text-[10px] sm:text-xs text-[#64748B] tracking-wider">
            Разработано в{' '}
            <a
              href="https://miconext.github.io/MicoNext/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3B82F6] hover:text-[#E2E8F0] transition-colors duration-200 underline underline-offset-2 decoration-[#1E2D45] hover:decoration-[#3B82F6]"
            >
              MicoNext
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};