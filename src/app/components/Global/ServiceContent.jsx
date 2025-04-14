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
                                <Link href={link.url} className={`${pathname === link.url && 'underline'} text-[18px] transition hover:underline`}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                {data.filter(link => link.url === pathname).map(item => (
                    <div key={item.id} className="o-privacies text-[18px] text-left px-8">
                        <h2>{item.title}</h2>
                        <p>Effective Date: <strong>{item.dateStart}</strong></p>
                        <p>Last updated: <strong>{item.dateUpdate}</strong></p>
                        <div dangerouslySetInnerHTML={{__html: item.text}} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServiceContent