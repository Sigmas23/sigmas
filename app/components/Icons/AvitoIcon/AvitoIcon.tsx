import Image from "next/image"

export default function AvitoIcon({ className }: { className?: string }) {
    return <Image width={25} height={25} className={className} src="/avito.svg" alt="avito" />
}