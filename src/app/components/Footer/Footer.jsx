'use client'

import dynamic from 'next/dynamic'
import FooterGoogleMap from "./FooterGoogleMap"
import FooterAddressInfo from "./FooterAddressInfo"
import ParalaxBanner from '../Global/ParalaxBanner';
import FooterBottom from './FooterBottom';
import SocialLinks from '../Global/SocialLinks';

const ContactForm = dynamic(() => import('@components/Global/ContactForm'), { ssr: false });

const Footer = () => {
    return (
        <>
            <SocialLinks styles="hidden md:block bg-brand-dark md:fixed right-0 bottom-14 flex-col justify-center gap-4 p-3 pb-1" type="dark" />
            <footer className="relative md:translate-y-[-180px]">
                <FooterGoogleMap />
                <ParalaxBanner imgSrc="/images/about.jpg">
                    <div className="lg:py-12 flex flex-col-reverse lg:flex-row justify-center items-center">
                        <div className="w-full lg:p-8 lg:w-1/2 xl:w-1/3">
                            <ContactForm />
                        </div>
                        <div className="lg:w-1/2 xl:w-1/3 py-12 px-8">
                            <FooterAddressInfo />
                        </div>
                    </div>
                </ParalaxBanner>
                <SocialLinks styles="md:hidden pb-8 justify-center gap-4" type="dark" />
                <FooterBottom />
            </footer>
        </>
    )
}

export default Footer
