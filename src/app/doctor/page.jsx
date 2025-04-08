import Image from "next/image"
import HeroBanner from '@components/Global/HeroBanner'
import { DoctorContent } from '@data/pages'
import ContentWithBg from '@components/Global/ContentWithBg'

export const metadata = {
    title: "Dr. Konstantinos",
}

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
            <ContentWithBg text={DoctorContent.text} imgSrc={DoctorContent.bgContnentImg}>
                <div className="flex flex-col md:flex-row mt-12">
                    <Image src={DoctorContent.contentImg} width="992" height="1560" alt={DoctorContent.contentImgSubscription} className="md:w-[60%] rounded-2xl mr-10 brightness-75 sepia-40" />
                    <div className="italic text-[20px] mt-12" dangerouslySetInnerHTML={{__html: DoctorContent.contentImgSubscription}} />
                </div>
                
            </ContentWithBg>
        </>
    )
}

export default Doctor
