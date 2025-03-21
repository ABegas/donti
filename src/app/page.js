'use client'

import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import AOS from 'aos'
import { useMediaQuery } from 'react-responsive'
import 'aos/dist/aos.css'

import BannerText from "./components/Home/BannerText";
import HeroVideo from "./components/Home/HeroVideo";
import { AboutDonti } from "./content/common";

export default function Home() {
    const BannerDoctor = dynamic(() => import('./components/Home/BannerDoctor'), { ssr: false });
    const isMobile = useMediaQuery({query: '(max-width: 768px)'})

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <HeroVideo />
            <div data-aos="fade-up" data-aos-offset="30" className="relative md:max-w-[80%] mx-auto z-10 md:translate-y-[-120px]">
                <BannerText 
                    style="dark"
                    title={AboutDonti.title} 
                    text={AboutDonti.text} 
                    imgSrc={AboutDonti.imgSrc} 
                    imgAlt={AboutDonti.imgAlt}
                    buttonText="Learn More"
                    buttonLink={AboutDonti.btnSrc}
                /> 
            </div>
            <BannerDoctor isMobile={isMobile} />
        </>
    )
}
