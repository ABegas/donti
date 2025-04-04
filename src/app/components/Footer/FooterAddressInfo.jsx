import { AddressInfoContent } from "@data/footer"

const FooterAddressInfo = () => {
    return (
        <div className="text-brand" data-aos="fade-up" data-aos-delay="300" data-aos-offset="-100">
            <h3 className="o-decor mb-4">Find Us</h3>
            <div className="text-[22px] font-oswald mb-8">Visit Denti Dental Clinic at the heart of the city — where comfort meets care.</div>
            <ul className="text-[16px] [&_a]:underline [&_a]:hover:no-underline ">
                {AddressInfoContent.map((item, i) => (
                    <li key={i} className="mb-6">
                        <strong>{item.title}</strong>
                        <div dangerouslySetInnerHTML={{__html: item.text}}></div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterAddressInfo
