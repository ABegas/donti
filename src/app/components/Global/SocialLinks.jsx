import Link from "next/link"
import { SocialsLinksContent } from "@/app/content/common"
import PhoneIcon from "@public/icons/phone.svg"

const SocialLinks = ({styles, type}) => {
    return (
        <ul className={`
            o-socials
            flex
            z-10
            ${styles ? styles: ''}
            ${type && type === 'dark' ? 'o-socials__dark' : 'o-socials__light'}
        `}>
            {SocialsLinksContent.map(social => (
                <li key={social.id}>
                    <Link href={social.linkSrc} target="_blank" className="inline-block lg:hover:border-brand p-1 mb-1 scale-100 lg:hover:scale-110 transition">{social.iconComponent}</Link>
                </li>
            ))}
            <li>
                <Link href="tel:02035769700" className="inline-block lg:hover:border-brand p-1 mb-1 scale-100 lg:hover:scale-110 transition">
                    <PhoneIcon />
                </Link>
            </li>
        </ul>
    )
}

export default SocialLinks