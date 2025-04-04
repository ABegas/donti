import HeroBanner from '@components/Global/HeroBanner'
import ContentWithBg from '@components/Global/ContentWithBg'
import { DontiContent } from '@data/pages'
import { LinkPrimary } from '../components/UI/Cta'

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
                <LinkPrimary text="Schedule Your Consultation" link="/book" theme="dark" style="mt-4" />
            </ContentWithBg>
        </>
    )
}

export default AboutUs
