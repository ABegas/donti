import Image from "next/image"
import HeroBanner from '@components/Global/HeroBanner'
import { DoctorContent } from '@data/pages'
import ContentWithBg from '@components/Global/ContentWithBg'

export const metadata = {
    title: "Dr. Konstantinos",
    description: "Learn about Dr. Konstantinos, the lead dentist at Donti Dental Clinic, and his commitment to providing exceptional dental care."
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
                    <div className="md:w-[28%] md:mr-10">
                        <Image src={DoctorContent.contentImg} width="992" height="1560" alt={DoctorContent.contentImgSubscription} className="rounded-2xl brightness-75 sepia-40" />
                        <div className="italic text-[16px] mt-4" dangerouslySetInnerHTML={{__html: DoctorContent.contentImgSubscription}} />
                    </div>                    
                    <div className="md:md:w-[70%] mt-2">
                        <div dangerouslySetInnerHTML={{__html: DoctorContent.textForImg}} />
                        
                    </div>
                </div>
                
            </ContentWithBg>
        </>
    )
}

export default Doctor
