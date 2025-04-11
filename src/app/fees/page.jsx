import { PackagesListContent, FeesContent, PriceListContent } from "@data/fees"
import HeroBanner from "../components/Global/HeroBanner"
import ContentWithBg from "../components/Global/ContentWithBg"
import { Accordion, AccordionItem } from '@szhsin/react-accordion'

export const metadata = {
    title: "Transparent Pricing at Donti Dental Clinic",
    description: "View our clear and competitive pricing for various dental treatments and services."
}

export default function FeesSection() {
    return (
        <>
            <HeroBanner
                imgSrc={FeesContent.bannerImgSrc}
                title={FeesContent.title}
                subtitle={FeesContent.subtitle}
                imgWidth={1200}
                imgHeight={557}
                overlay={true}
                height={'h-[25vh]'}
            />
            <ContentWithBg text={FeesContent.topText} imgSrc={FeesContent.bgContnentImg}>
                <section className="py-16">
                    <Accordion transition transitionTimeout={200} className="mb-12">
                        {PriceListContent.map((item) => (
                            <AccordionItem key={item.id} header={item.title} initialEntered={(item.isOpen) ? true : false} className="border-b-1 border-dashed border-b-gray-400">
                                {item.items.map((service, i) => (
                                    <div key={i} className="flex justify-between border-b-1 items-end border-dashed border-b-gray-400 py-3 md:px-4 md:mx-4">
                                        <div className="mr-4">
                                            <div>{service.name}</div>
                                            {service.description && <div className="italic text-sm">{service.description}</div>}
                                        </div>
                                        <div className="text-right">{service.price}</div>
                                    </div>
                                ))}
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <div className="text-center mb-12">
                        <h2>Our Smile Packages</h2>
                        <p className="text-gray-600 mt-4">Transparent pricing, premium care.</p>
                    </div>
            
                    <div className="grid md:grid-cols-3 gap-5">
                    {PackagesListContent.map((pkg, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-between bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div>
                                <h3 className="flex items-center justify-center bg-brand-dark p-6 text-brand text-center md:h-[125px] rounded-[16px_16px_0_0]">{pkg.title}</h3>
                                <h4 dangerouslySetInnerHTML={{__html: pkg.services}} className="text-gray-500 mt-4 px-6" />
                            </div>
                            <div className="p-6">
                                <p className="o-decor o-decor--center text-sm">{pkg.description}</p>
                                <div className="mt-6 text-center text-2xl font-bold">
                                    {pkg.price}
                                    <span className="text-[16px] font-[100] translate-y-[-8px] inline-block">*</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </section>
                <h4 className=" relative max-w-[900px] text-center px-8 mx-auto my-22 before:absolute before:w-[70%] before:top-[-60px] before:translate-[-50%] before:left-[50%] before:h-[2px] before:bg-gray-600">{FeesContent.text}</h4>
                <p className="mt-20 text-[14px]"><span className="text-[16px] font-[100] inline-block">*</span> - {FeesContent.notation}</p>
            </ContentWithBg>
        </>
    );
  }