'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const ServiceContent = ({data}) => {
    const pathname = usePathname()
    return (
        <div className="pt-[76px] md:pt-[160px] xl:pt-[260px] pb-[60px] header-dark">
            <div className="mx-auto max-w-[1400px] flex flex-col md:flex-row gap-10 md:px-6">
                <div>
                    <ul className="bg-[rgba(0,0,0,0.1)] md:sticky top-[150px] backdrop-sepia-20 p-10 rounded-[8px] shadow-xl md:w-[300px] shrink-0">
                        {data.map(link => (
                            <li key={link.id} className="mb-6">
                                <Link href={link.url} className={`${pathname === link.url && 'underline'} text-[18px] transition hover:underline`}>{link.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {data.filter(link => link.url === pathname).map(link => (
                    <div key={link.id} className="text-[18px] text-left px-8">
                        <div dangerouslySetInnerHTML={{__html: link.content}} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServiceContent