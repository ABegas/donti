import Link from "next/link"
import { Copyright, FooterUtitlityLinks } from "@/app/content/footer"

const FooterBottom = () => {
    return (
        <div className="relative text-white bg-brand-dark p-8 shadow-[0_0_30px_10px_rgba(0,0,0,0.3)] text-[14px]">
            <div className="wrapper flex flex-col-reverse md:flex-row items-center justify-between">
                <div className="text-center mt-4 md:mt-0">
                    {Copyright.text}
                </div>
                <ul className="flex text-center">
                    {FooterUtitlityLinks.map(link => (
                        <li key={link.id} className="border-l-1 px-4 first:border-0">
                            <Link href={link.url} className="hover:text-brand transition">{link.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FooterBottom
