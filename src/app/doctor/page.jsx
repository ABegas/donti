import HeroBanner from '@components/Global/HeroBanner'
import { DoctorContent } from '@data/pages'
import ContentWithBg from '@components/Global/ContentWithBg'

const Doctor = () => {
    return (
        <>
            <HeroBanner
                imgSrc={DoctorContent.bannerImgSrc}
                title={DoctorContent.title}
                subtitle={DoctorContent.subtitle}
                imgWidth={1170}
                imgHeight={1600}
                imgContainCustomSize="md:h-[900px]"
            />
            <ContentWithBg text={DoctorContent.text} imgSrc={DoctorContent.bgContnentImg} />
        </>
    )
}

export default Doctor
