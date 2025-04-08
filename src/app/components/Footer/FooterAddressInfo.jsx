import { AddressInfoContent } from "@data/footer"
import { AddressInfoContentSocials } from "@data/footer"
import Link from "next/link"

const FooterAddressInfo = () => {
    return (
        <div className="text-brand" data-aos="fade-up" data-aos-delay="300" data-aos-offset="-100">
            <h3 className="o-decor mb-4">Find Us</h3>
            <div className="text-[22px] font-oswald mb-6">Visit Donti Dental Clinic at the heart of the city — where comfort meets care.</div>
            <ul className="text-[16px] [&_a]:underline [&_a]:hover:no-underline ">
                {AddressInfoContent.map((item, i) => (
                    <li key={i} className="mb-6">
                        <strong>{item.title}</strong>
                        <div dangerouslySetInnerHTML={{__html: item.text}}></div>
                    </li>
                ))}
                {AddressInfoContentSocials.map((social) => (
                    <li key={social.id} className="o-socials__contact">
                        <Link href={social.linkSrc} target="_blank" rel="noopener noreferrer" className="rounded-[6px] inline-block lg:hover:border-brand p-1 mb-1 scale-100 lg:hover:scale-110 transition" title={social.text}>
                            {social.iconComponent}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterAddressInfo
