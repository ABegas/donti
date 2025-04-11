'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const ServiceContent = ({data}) => {
    const pathname = usePathname()
    return (
        <>
            <ul className="flex flex-col bg-[rgba(0,0,0,0.1)] backdrop-sepia-20 p-10 rounded-[8px] shadow-xl w-full md:w-[300px]">
                {data.map(link => (
                    <li key={link.id} className="mb-6">
                        <Link href={link.url} className={`${pathname === link.url && 'underline'} text-[18px] transition hover:underline`}>{link.text}</Link>
                    </li>
                ))}
            </ul>
            {data.filter(link => link.url === pathname).map(link => (
                <div key={link.id} className="text-[18px] text-left">
                    <div dangerouslySetInnerHTML={{__html: link.content}} />
                </div>
            ))}
        </>
    )
}

export default ServiceContent