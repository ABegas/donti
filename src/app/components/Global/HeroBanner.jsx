import Image from "next/image"
import { LinkPrimary } from "../UI/Cta"

const HeroBanner = ({imgSrc, customSize, width, height, title, subtitle, overlay}) => {
    return (
        <section className="relative overflow-hidden text-white bg-[#040202] max-h-[70vh] shadow-[0_0_20px_20px_rgba(0,0,0,0.5)]">
            {overlay && <div className="sepia-50 bg-[rgba(0,0,0,0.5)] backdrop-blur-[2px] absolute left-0 top-0 w-full h-full"></div>}
            <Image
                className={`${customSize ? customSize + ' object-cover md:object-contain' : 'h-full object-cover'} w-full`}
                src={imgSrc}
                width={width}
                height={height}
                alt={title}
            />
            <div className="absolute px-8 flex flex-col md:flex-row items-end justify-between bottom-6 left-[50%] translate-x-[-50%] wrapper">
                <div className="md:w-1/3 mb-6 md:mb-0">
                    <h1 className="o-decor mb-4">{title}</h1>
                    <h4>{subtitle}</h4>
                </div>
                <div className="w-full md:w-auto">
                    <LinkPrimary text="Schedule Your Appointment" link="/book" style="w-full" />
                </div>
            </div>
        </section>
    )
}

export default HeroBanner
