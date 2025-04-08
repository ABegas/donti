import HeroBanner from '@components/Global/HeroBanner'
import { TreatmentsPageContent, TreatmentsListContent } from '@data/treatments'
import TreatmentsList from '@components/Treatments/TreatmentsList'
import ContentWithBg from '../components/Global/ContentWithBg'

export const metadata = {
    title: "Treatments",
}

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
            <ContentWithBg imgSrc={TreatmentsPageContent.bgContnentImg}>
                <ul>
                    {TreatmentsListContent.map((treatment) => (
                        <li id={treatment.slug} key={treatment.slug} className="text-left my-12">
                            <h2 className="o-decor o-decor--black">{treatment.title}</h2>
                            <div dangerouslySetInnerHTML={{__html: treatment.text}} />
                        </li>
                    ))}
                </ul>
            </ContentWithBg>
        </>
    )
}

export default Treatments
