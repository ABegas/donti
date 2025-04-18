'use client'

import Image from "next/image"
import { LinkPrimary, LinkPrimaryArrow } from "../UI/Cta"

const HeroBanner = ({imgSrc, height, imgContainCustomSize, imgWidth, imgHeight, title, subtitle, overlay, button = true}) => {

    return (
        <section className={`${height ? height : 'h-[70vh]'} relative overflow-hidden text-brand bg-[#040202] min-h-[400px] md:min-h-[600px] shadow-[0_0_35px_20px_rgba(0,0,0,0.4)]`}>
            {overlay && <div className="z-[1] sepia-50 bg-[rgba(0,0,0,0.6)] backdrop-blur-[4px] absolute left-0 top-0 w-full h-full"></div>}
            <Image
                className={`${imgContainCustomSize ? imgContainCustomSize + ' object-cover md:object-contain' : 'h-full object-cover'} absolute left-o top-0 w-full`}
                src={imgSrc}
                width="1920"
                height="930"
                alt={title}
            />
            <div className="absolute z-[2] px-8 py-4 bottom-0 left-0 w-full bg-[rgba(255,255,255,0.1)] backdrop-blur-[5px]">
                <div className={`relative wrapper flex flex-col lg:flex-row lg:items-end justify-end`}>
                    <div className="mb-6 lg:mb-0 lg:mr-12 lg:pr-12 lg:border-r-1 text-right">
                        <h1 className="o-decor o-decor--right mb-4">{title}</h1>
                        <h4 dangerouslySetInnerHTML={{__html: subtitle}} />
                    </div>
                    {button && (
                        <div className="w-full lg:w-auto">
                            <LinkPrimary text="Schedule Your Appointment" link="/contact" style="w-full" />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default HeroBanner
