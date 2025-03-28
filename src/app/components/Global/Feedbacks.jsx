import { FeedbacksContent } from '@content/common'
import Quotes from "@public/icons/quotes.svg"

const Feedbacks = () => {
    return (
        <div className="wrapper text-white py-[80px] px-[32px]">
            <div data-aos="fade-down" data-aos-anchor-placement="top-bottom" data-aos-offset="-150">
                <h3 className="o-decor o-decor--center text-center mb-8 title-h2">What Our Patients Says</h3>
                <div className="text-[24px] font-[100] text-center mb-12 md:mb-20">Real stories from real smiles.</div>
            </div>
            <ul className="flex flex-col md:flex-row gap-[40px]">
                {FeedbacksContent.map((feedback, i) => (
                    <li key={feedback.id} data-aos="fade-up" data-aos-offset="-150" data-aos-anchor-placement="top-bottom" data-aos-delay={200 * ++i} className="text-center relative p-12 border-1 even:rounded-[0_60px_0_60px] odd:rounded-[60px_0_60px_0] md:w-1/3">
                        <Quotes className="w-[80px] h-[80px] fill-white absolute left-[50%] translate-x-[-50%] top-[-35px]" />
                        <p>"{feedback.text}"</p>
                        <i>— {feedback.name}</i>
                    </li>
                ))}
                
            </ul>
        </div>
    )
}

export default Feedbacks