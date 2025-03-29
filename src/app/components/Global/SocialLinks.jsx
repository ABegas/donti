import Link from "next/link"
import { SocialsLinksContent } from "@/app/content/common"

const SocialLinks = ({styles, type}) => {
    return (
        <ul className={`
            o-socials
            flex
            z-10
            rounded-[3px_0_0_3px]
            ${styles ? styles: ''}
            ${type && type === 'dark' ? 'o-socials__dark' : 'o-socials__light'}
        `}>
            {SocialsLinksContent.map(social => (
                <li key={social.id}>
                    <Link href={social.linkSrc} target="_blank" rel="noopener noreferrer" className="rounded-[6px] inline-block lg:hover:border-brand p-1 mb-1 scale-100 lg:hover:scale-110 transition" title={social.text}>{social.iconComponent}</Link>
                </li>
            ))}
        </ul>
    )
}

export default SocialLinks