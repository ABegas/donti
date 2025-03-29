import HeroBanner from '@components/Global/HeroBanner'
import { DoctorContent } from '../content/pages'

const Doctor = () => {
    return (
        <HeroBanner
            imgSrc={DoctorContent.imgSrc}
            title={DoctorContent.title}
            subtitle={DoctorContent.subtitle}
            width={1170}
            height={1600}
            customSize="md:h-[900px]"
        />
    )
}

export default Doctor
