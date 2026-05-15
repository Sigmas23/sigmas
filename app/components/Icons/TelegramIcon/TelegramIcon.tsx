import Image from "next/image"

export default function TelegramIcon({ className }: { className?: string }) {
    return <Image  width={25} height={25} className={className} src="/telegram-icon.svg" alt="telegram" />
}