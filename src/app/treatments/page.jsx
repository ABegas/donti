import Image from "next/image"
import HeroBanner from '@components/Global/HeroBanner'
import { TreatmentsPageContent, TreatmentsListContent } from '@data/treatments'
import ContentWithBg from '../components/Global/ContentWithBg'

export const metadata = {
    title: "Our Dental Treatments",
    description: "Explore the range of dental treatments we offer, from routine hygiene appointments to advanced cosmetic and restorative procedures."
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
                    {TreatmentsListContent.map((treatment, i) => (
                        <li id={treatment.slug} key={treatment.slug} className="text-left mb-10 md:mb-16 clearfix">
                            <h2 className="o-decor o-decor--black">{treatment.title}</h2>
                            <div className="clearfix">
                                {treatment.itemImgSrc && (
                                    <div className={`mb-10 float-none ${i % 2 === 1 ? 'md:float-right md:ml-12' : 'md:float-left md:mr-12'}`}>
                                        <Image src={treatment.itemImgSrc} width={600} height={600} alt={treatment.title} className="shadow-2xl rounded-2xl" />
                                    </div>
                                )}
                                <div dangerouslySetInnerHTML={{__html: treatment.text}} />
                            </div>
                        </li>
                    ))}
                </ul>
            </ContentWithBg>
        </>
    )
}

export default Treatments
