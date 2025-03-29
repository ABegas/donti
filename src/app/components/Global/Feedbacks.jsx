import { FeedbacksContent } from '@content/common'
import Quotes from "@public/icons/quotes.svg"
import { LinkPrimary } from '../UI/Cta'

const Feedbacks = () => {
    return (
        <div className="wrapper text-white py-[80px] px-[32px]">
            <div data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-offset="-150">
                <h3 className="o-decor o-decor--center text-center mb-8 title-h2">What Our Patients Says</h3>
                <div className="text-[24px] font-[100] text-center mb-12 md:mb-20">Real stories from real smiles.</div>
            </div>
            <ul className="flex flex-col lg:flex-row gap-[40px]">
                {FeedbacksContent.map((feedback, i) => (
                    <li key={feedback.id} data-aos="fade-up" data-aos-offset="-150" data-aos-anchor-placement="top-bottom" data-aos-delay={200 * ++i} className="text-center relative p-12 border-1 even:rounded-[0_60px_0_60px] odd:rounded-[60px_0_60px_0] lg:w-1/3">
                        <Quotes className="w-[80px] h-[80px] fill-white absolute left-[50%] translate-x-[-50%] top-[-35px]" />
                        <p>"{feedback.text}"</p>
                        <i>— {feedback.name}</i>
                    </li>
                ))}
            </ul>
            <div className="text-center pt-16">
                <LinkPrimary
                    link='https://www.google.com/maps/place/Donti+Dental+Clinic/@51.5123943,-0.0910324,17z/data=!3m2!4b1!5s0x48760282eae79f1b:0xc0e805a0f3bc1a8f!4m18!1m9!3m8!1s0x4876033668b9545f:0xf0e472eb34772b2a!2sDonti+Dental+Clinic!8m2!3d51.512391!4d-0.0884575!9m1!1b1!16s%2Fg%2F11s7ptl_yy!3m7!1s0x4876033668b9545f:0xf0e472eb34772b2a!8m2!3d51.512391!4d-0.0884575!9m1!1b1!16s%2Fg%2F11s7ptl_yy?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D' 
                    text="Proceed To See More Reviews"
                    external={true}
                />
            </div>  
        </div>
    )
}

export default Feedbacks