import Image from "next/image"
import { CtaPrimary } from "../UI/Cta";

const BannerText = ({title, text, imgSrc, imgAlt, style, textPosition, buttonText, buttonLink}) => {
    const bannerDark = style === 'dark' ? 'bg-brand-dark text-white' : ''
    const bannerTextRight = textPosition === 'right' ? 'flex-row-reverse' : ''

    return (
        <section className={`${bannerDark} shadow-[0_0_36px_7px_rgba(0,0,0,0.5)]`}>
            <div className={`wrapper flex flex-col lg:flex-row items-center py-[40px] md:py-[80px] px-[32px] lg:px-[62px] gap-[40px] lg:gap-[140px] justify-between ${bannerTextRight}`}>
                <div className="lg:w-[40%]">
                    <h3 className="o-decor">{title}</h3>
                    <div className="tracking-[0.5px]" dangerouslySetInnerHTML={{ __html: text }} />
                    {buttonText && <CtaPrimary text={buttonText} link={buttonLink} style='mt-[20px]' />}
                </div>
                <div className={`lg:w-[60%] ${textPosition === 'right' ? 'shadow-[-45px_45px_0_rgba(0,0,0,0.2)]' : 'shadow-[45px_45px_0_rgba(0,0,0,0.2)]'}`}>
                    <Image src={imgSrc} width="1200" height="840" alt={imgAlt} className="w-full h-full object-cover" />
                </div>              
            </div>
        </section>
    )
}

export default BannerText

