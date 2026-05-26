import { ToGisIcon, AvitoIcon, TelegramIcon, WhatsappIcon, MaxIcon } from "../Icons/index"

const contactInfo = {
  address: 'г. Краснодар, ул. Героя Аверкиева д.6, 2 подъезд, цокольный этаж, офис 67',
  company: 'Сигма-Сервис',
  phone: '+7 (999) 070-22-62',
  name: 'Самозанятый Ступников Иван Андреевич',
  inn: 'ИНН 251009715838',
  email: 'Sigmas23@bk.ru',
}

const links = [
  { icon: ToGisIcon, label: '2ГИС', href: 'https://2gis.ru/krasnodar/firm/70000001061399143' },
  { icon: AvitoIcon, label: 'Авито', href: 'https://www.avito.ru/krasnodar/predlozheniya_uslug/sistemnyy_administrator_remont_kompyuterov_3331233472?utm_campaign=native&utm_medium=item_page_android&utm_source=soc_sharing_seller' },
  { icon: TelegramIcon, label: 'Telegram', href: 'https://t.me/Sigmas23' },
  { icon: WhatsappIcon, label: 'WhatsApp', href: 'https://api.whatsapp.com/send/?phone=79990702262&type=phone_number&app_absent=0' },
]

const maxLink = {
  icon: MaxIcon,
  label: 'MAX',
  href: 'https://max.ru/u/f9LHodD0cOLYv8Y6SssfJ5atVjrBzC-8P_GaLNpO701Jd1gUqeghGq4bYiM'
}

export default function Footer() {
  return (
    <footer id="contacts" className="py-12 sm:py-16 lg:py-24 border-b border-[#1E2D45]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-extrabold text-[#E2E8F0] leading-[0.92] tracking-[-1.5px] text-left
          text-[32px] 
          sm:text-[48px] 
          md:text-[64px]
          lg:text-[80px] 
          xl:text-[96px] mb-8 sm:mb-12 lg:mb-20">
          Контакты
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20">
          {/* Левая колонка */}
          <div className="space-y-6 sm:space-y-8">
            {/* Адрес */}
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                <span className="font-mono text-[10px] sm:text-xs text-[#3B82F6] tracking-[4px] uppercase shrink-0">01</span>
                <span className="h-[1px] w-4 sm:w-6 bg-[#1E2D45]"></span>
                <span className="font-mono text-[10px] sm:text-xs text-[#64748B] tracking-[3px] uppercase">Адрес</span>
              </div>
              <p className="font-body text-sm sm:text-base text-[#94A3B8] leading-[1.5] ml-6 sm:ml-12">
                {contactInfo.address}
              </p>
              <p className="font-body text-xs text-[#64748B] mt-0.5 ml-6 sm:ml-12">
                {contactInfo.company}
              </p>
            </div>

            {/* Телефон */}
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                <span className="font-mono text-[10px] sm:text-xs text-[#3B82F6] tracking-[4px] uppercase shrink-0">02</span>
                <span className="h-[1px] w-4 sm:w-6 bg-[#1E2D45]"></span>
                <span className="font-mono text-[10px] sm:text-xs text-[#64748B] tracking-[3px] uppercase">Телефон</span>
              </div>
              <a 
                href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                className="block font-mono text-base sm:text-lg lg:text-xl text-[#E2E8F0] hover:text-[#3B82F6] transition-colors duration-200 ml-6 sm:ml-12 no-underline"
              >
                {contactInfo.phone}
              </a>
              <p className="font-body text-xs text-[#64748B] mt-0.5 ml-6 sm:ml-12">
                {contactInfo.name}
              </p>
              <p className="font-mono text-[10px] text-[#64748B] mt-0.5 ml-6 sm:ml-12">
                {contactInfo.inn}
              </p>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                <span className="font-mono text-[10px] sm:text-xs text-[#3B82F6] tracking-[4px] uppercase shrink-0">03</span>
                <span className="h-[1px] w-4 sm:w-6 bg-[#1E2D45]"></span>
                <span className="font-mono text-[10px] sm:text-xs text-[#64748B] tracking-[3px] uppercase">Email</span>
              </div>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="block font-mono text-sm sm:text-base lg:text-lg text-[#94A3B8] hover:text-[#3B82F6] transition-colors duration-200 ml-6 sm:ml-12 no-underline break-all"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Правая колонка */}
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8">
              <span className="font-mono text-[10px] sm:text-xs text-[#3B82F6] tracking-[4px] uppercase shrink-0">04</span>
              <span className="h-[1px] w-4 sm:w-6 bg-[#1E2D45]"></span>
              <span className="font-mono text-[10px] sm:text-xs text-[#64748B] tracking-[3px] uppercase">Где нас найти</span>
            </div>

            <div className="space-y-2 sm:space-y-3 ml-6 sm:ml-12">
              {/* Первая пара */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {links.slice(0, 2).map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 sm:gap-3 p-2.5 sm:p-4 bg-[#111827]/30 backdrop-blur-xl border border-white/[0.04] rounded-xl sm:rounded-2xl
                      hover:bg-[#111827]/50 hover:border-white/[0.06]
                      transition-all duration-500 ease-out no-underline
                      shadow-[0_2px_16px_-6px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-xl bg-[#E2E8F0] 
                      group-hover:bg-white transition-colors duration-500 shrink-0">
                      <link.icon />
                    </div>
                    <span className="font-body text-xs sm:text-sm lg:text-base text-[#94A3B8] group-hover:text-[#E2E8F0] transition-colors duration-500">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>

              {/* Вторая пара */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {links.slice(2, 4).map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 sm:gap-3 p-2.5 sm:p-4 bg-[#111827]/30 backdrop-blur-xl border border-white/[0.04] rounded-xl sm:rounded-2xl
                      hover:bg-[#111827]/50 hover:border-white/[0.06]
                      transition-all duration-500 ease-out no-underline
                      shadow-[0_2px_16px_-6px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-xl bg-[#E2E8F0] 
                      group-hover:bg-white transition-colors duration-500 shrink-0">
                      <link.icon />
                    </div>
                    <span className="font-body text-xs sm:text-sm lg:text-base text-[#94A3B8] group-hover:text-[#E2E8F0] transition-colors duration-500">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>

              {/* Max на всю ширину */}
              <a
                href={maxLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 sm:gap-3 p-2.5 sm:p-4 bg-[#111827]/30 backdrop-blur-xl border border-white/[0.04] rounded-xl sm:rounded-2xl
                  hover:bg-[#111827]/50 hover:border-white/[0.06]
                  transition-all duration-500 ease-out no-underline w-full
                  shadow-[0_2px_16px_-6px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)]"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-xl bg-[#E2E8F0] 
                  group-hover:bg-white transition-colors duration-500 shrink-0">
                  <maxLink.icon />
                </div>
                <span className="font-body text-xs sm:text-sm lg:text-base text-[#94A3B8] group-hover:text-[#E2E8F0] transition-colors duration-500">
                  {maxLink.label}
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-24 pt-5 sm:pt-6 border-t border-[#1E2D45] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
          <p className="font-mono text-[10px] sm:text-xs text-[#64748B] tracking-wider order-2 sm:order-1">
            © {new Date().getFullYear()} Сигма-Сервис
          </p>
          <p className="font-mono text-[10px] sm:text-xs text-[#64748B] tracking-wider order-3 sm:order-2">
            ИНН 251009715838
          </p>
          <div className="font-mono text-[10px] sm:text-xs text-[#64748B] tracking-wider order-1 sm:order-3">
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
  )
}