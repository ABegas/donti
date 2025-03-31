import HeroBanner from '@components/Global/HeroBanner'
import { DoctorContent } from '@content/pages'
import ContentWithBg from '@components/Global/ContentWithBg'

const Doctor = () => {
    return (
        <>
            <HeroBanner
                imgSrc={DoctorContent.bannerImgSrc}
                title={DoctorContent.title}
                subtitle={DoctorContent.subtitle}
                width={1170}
                height={1600}
                customSize="md:h-[900px]"
            />
            <ContentWithBg text={DoctorContent.text} imgSrc={DoctorContent.bgContnentImg} />
        </>
    )
}

export default Doctor
