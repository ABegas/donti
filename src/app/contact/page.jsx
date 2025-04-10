import HeroBanner from '@components/Global/HeroBanner'
import { BookingContent } from '@data/pages'
import ContactForm from '@components/Global/ContactForm'
import FooterAddressInfo from '@components/Footer/FooterAddressInfo'

export const metadata = {
    title: "Contact Us",
}

const Contact = () => {
    return (
        <>
            <HeroBanner
                imgSrc={BookingContent.bannerImgSrc}
                title={BookingContent.title}
                subtitle={BookingContent.subtitle}
                imgWidth={1170}
                imgHeight={1600}
                overlay={true}
                height='h-[25vh]'
                button={false}
            />
            <div className="bg-brand-dark">
                <div className="max-w-[1200px] mx-auto py-10 px-4 lg:px-0">
                    <div dangerouslySetInnerHTML={{ __html: BookingContent.text }} className="text-brand text-center py-10 mx-4" />
                    <div className="mt-20 relative flex flex-col md:flex-row justify-center items-center before:absolute before:w-[70%] before:top-[-75px] before:translate-[-50%] before:left-[50%] before:h-[1px] before:bg-brand">
                        <div className="w-full md:w-2/3">
                            <ContactForm />
                        </div>
                        <div className="mt-12 md:mt-0 md:ml-10">
                            <FooterAddressInfo />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
