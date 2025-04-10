import Image from "next/image"
import HeroBanner from '@components/Global/HeroBanner'
import { TreatmentsPageContent, TreatmentsListContent } from '@data/treatments'
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
                        <li id={treatment.slug} key={treatment.slug} className="text-left mb-20">
                            <h2 className="o-decor o-decor--black">{treatment.title}</h2>
                            <div className="flex flex-col mt-12">
                                <div className="flex flex-col md:flex-row md:mr-10">
                                    {treatment.itemImgSrc && (
                                        <div className="mb-6">
                                            <Image src={treatment.itemImgSrc} width={600} height={600} alt={treatment.title} className="rounded-2xl brightness-75 sepia-40" />
                                        </div>
                                    )}
                                    <div className="md:w-1/2 md:ml-8" dangerouslySetInnerHTML={{__html: treatment.text}} />
                                </div>
                                {treatment.text2 && <div dangerouslySetInnerHTML={{__html: treatment.text2}} />}
                            </div>
                            
                        </li>
                    ))}
                </ul>
            </ContentWithBg>
        </>
    )
}

export default Treatments
