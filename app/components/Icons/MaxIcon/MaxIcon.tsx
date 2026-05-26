import Image from "next/image"

export default function MaxIcon({ className }: { className?: string }) {
    return <Image width={25} height={25} className={className} src="/max.svg" alt="max" />
}