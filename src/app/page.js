'use client'

//libs
import dynamic from 'next/dynamic'
import { useMediaQuery } from 'react-responsive'

//Content
import { AboutDonti } from "@data/common";
import { TreatmentsPageContent } from "@data/treatments";

//Components
import BannerText from "@components/Home/BannerText";
import HeroVideo from "@components/Home/HeroVideo";

import TreatmentsList from '@components/Treatments/TreatmentsList'
import Feedbacks from '@components/Global/Feedbacks'
import PromoMsg from '@components/Global/PromoMsg'

export default function Home() {
    const BannerDoctor = dynamic(() => import('@components/Home/BannerDoctor'), { ssr: false });
    const ParalaxBanner = dynamic(() => import('@components/Global/ParalaxBanner'), { ssr: false });
    const isMobile = useMediaQuery({query: '(max-width: 768px)'})

    return (
        <>
            <HeroVideo />
            <div data-aos="fade-up" data-aos-offset="30" className="relative md:max-w-[86%] mx-auto z-10 md:translate-y-[-120px]">
                <BannerText 
                    style="dark"
                    title={AboutDonti.title} 
                    text={AboutDonti.text} 
                    imgSrc={AboutDonti.imgSrc} 
                    imgAlt={AboutDonti.imgAlt}
                    buttonText="Read More"
                    buttonLink={AboutDonti.btnSrc}
                    textPosition='left'
                /> 
            </div>
            <div className="md:translate-y-[-180px]">
                <BannerDoctor isMobile={isMobile} />
            </div>
            <div className="md:translate-y-[-180px]">
                <div className="wrapper text-brand-dark text-center mb-[60px]" data-aos="fade-down" data-aos-anchor-placement="top-bottom">
                    <h2 className="o-decor o-decor--black o-decor--center mb-[32px] title-h1 pt-[80px]">{TreatmentsPageContent.title}</h2>
                    <div className="text-[24px] font-[200]">{TreatmentsPageContent.subtitle}</div>
                </div>
                <TreatmentsList />
            </div>
            <div className="md:translate-y-[-180px]">
                <ParalaxBanner imgSrc="/images/free_initial_consultation.jpg">
                    <PromoMsg />
                </ParalaxBanner>
            </div>
            <div className="bg-brand-dark md:translate-y-[-180px]">
                <Feedbacks />
            </div>
        </>
    )
}
