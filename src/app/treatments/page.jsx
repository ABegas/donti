import HeroBanner from '@components/Global/HeroBanner'
import { TreatmentsPageContent } from '@data/treatments'
import TreatmentsList from '@components/Treatments/TreatmentsList'
import ContentWithBg from '../components/Global/ContentWithBg'

const Treatments = () => {
    return (
        <>
            <HeroBanner
                imgSrc={TreatmentsPageContent.bannerImgSrc}
                title={TreatmentsPageContent.title}
                subtitle={TreatmentsPageContent.subtitle}
                imgWidth={1170}
                imgHeight={1600}
                overlay={true}
                height={'h-[25vh]'}
            />
            <ContentWithBg imgSrc={TreatmentsPageContent.bgContnentImg} maxWidth="max-w-[1400px]">
                <TreatmentsList maxTileWidthDesktop="max-w-[48%]" />
            </ContentWithBg>
        </>
    )
}

export default Treatments
