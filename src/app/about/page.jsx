import HeroBanner from '@components/Global/HeroBanner'
import ContentWithBg from '@components/Global/ContentWithBg'
import { DontiContent } from '@content/pages'

const AboutUs = () => {
    return (
        <>
            <HeroBanner
                imgSrc={DontiContent.bannerImgSrc}
                title={DontiContent.title}
                subtitle={DontiContent.subtitle}
                width={1200}
                height={557}
                overlay={true}
            />
            <ContentWithBg text={DontiContent.text} imgSrc={DontiContent.bgContnentImg} />
        </>
    )
}

export default AboutUs
