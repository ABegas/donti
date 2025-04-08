import { PackagesListContent, FeesContent } from "@data/fees";
import HeroBanner from "../components/Global/HeroBanner";

export const metadata = {
    title: "Our Fees",
    description: "Transparent pricing, premium care in Donti Dentl Clinic.",
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
            <h1 className="text-center pt-12">Fees and Pricing section will be available soon</h1>
            {/*<section className="py-16 px-4 md:px-8">
                <div className="max-w-5xl mx-auto text-center mb-12">
                <h2>Our Smile Packages</h2>
                <p className="text-gray-600 mt-4">Transparent pricing, premium care.</p>
                </div>
        
                <div className="grid md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
                {PackagesListContent.map((pkg, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div>
                            <h3 className="flex items-center justify-center bg-brand-dark p-6 text-brand text-center md:h-[125px] rounded-[16px_16px_0_0]">{pkg.title}</h3>
                            <h4 className="text-gray-500 mt-4 px-6">{pkg.services}</h4>
                        </div>
                        <div className="p-6">
                            <p className="o-decor o-decor--center text-sm">{pkg.description}</p>
                            <div className="mt-6 text-center">
                                <span className="text-2xl font-bold">{pkg.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </section>*/}
            <h4 className=" relative max-w-[900px] text-center px-8 mx-auto my-22 before:absolute before:w-[70%] before:top-[-60px] before:translate-[-50%] before:left-[50%] before:h-[2px] before:bg-gray-600">{FeesContent.text}</h4>
        </>
    );
  }