'use client'

import { AboutDoctor } from '@content/common'
import Image from "next/image"
import { LinkPrimaryArrow } from "../UI/Cta";

const BannerDoctor = ({ isMobile }) => {
    return (
        <section className="text-white bg-black shadow-[0_29px_34px_10px_rgba(0,0,0,0.3)] flex z-1 flex-col md:flex-row items-center relative w-100%  mx-auto lg:gap-[40px]">
            <div data-aos={`${isMobile ? '' : 'fade-left'}`} className="md:w-[50%] md:min-w-[400px] lg:min-w-[480px] xl:min-w-[600px]">
                <Image src={AboutDoctor.imgSrc} width={1170} height={1600} alt={AboutDoctor.imgAlt} />
            </div>
            <div data-aos="fade-right" data-aos-offset="0" data-aos-delay="300" className="px-[32px] py-[70px] lg:pt-[120px] md:px-[40px]">
                <h3 className="o-decor mb-8">{AboutDoctor.title}</h3>
                <div className="text-[18px] lg:text-[20px] xl:text-[22px] mb-8" dangerouslySetInnerHTML={{ __html: AboutDoctor.text }} />
                <LinkPrimaryArrow text={AboutDoctor.btnText} link={AboutDoctor.btnSrc} />
            </div>
        </section>
    )
}

export default BannerDoctor
