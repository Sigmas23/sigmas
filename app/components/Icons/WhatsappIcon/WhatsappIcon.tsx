import Image from "next/image"

export default function WhatsappIcon({ className }: { className?: string }) {
    return <Image  width={25} height={25} className={className} src="/whatsapp.svg" alt="whatsapp" />
}