import HeroBanner from '@components/Global/HeroBanner'
import ContentWithBg from '@components/Global/ContentWithBg'
import { DontiContent } from '@data/pages'
import { LinkPrimary } from '../components/UI/Cta'

export const metadata = {
    title: "Why Choose Donti Dental Clinic",
    description: "Discover the reasons why patients trust Donti Dental Clinic for their dental needs, including our state-of-the-art technology and personalized approach."
}

const AboutUs = () => {
    return (
        <>
            <HeroBanner
                imgSrc={DontiContent.bannerImgSrc}
                title={DontiContent.title}
                subtitle={DontiContent.subtitle}
                imgWidth={1200}
                imgHeight={557}
                overlay={true}
                height={'h-[25vh]'}
            />
            <ContentWithBg text={DontiContent.text} imgSrc={DontiContent.bgContnentImg}>
                <LinkPrimary text="Schedule Your Consultation" link="/contact" theme="dark" style="mt-4" />
            </ContentWithBg>
        </>
    )
}

export default AboutUs
