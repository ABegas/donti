import { FeedbacksContent } from '@content/common'

const Feedbacks = () => {
    return (
        <div className="wrapper text-white py-[80px] px-[32px]">
            <h3 className="o-decor o-decor--center text-center mb-8 title-h2">What Our Patients Says</h3>
            <div className="text-[24px] font-[100] text-center mb-20">Real stories from real smiles.</div>
            <ul className="flex gap-[40px]">
                {FeedbacksContent.map(feedback => (
                    <li key={feedback.id} className="p-12 border-1 rounded-[60px_0_60px_0] w-1/3">
                        <p>"{feedback.text}"</p>
                        <i>— {feedback.name}</i>
                    </li>
                ))}
                
            </ul>
        </div>
    )
}

export default Feedbacks