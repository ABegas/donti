import { LinkPrimary } from '@components/UI/Cta'

const PromoMsg = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[650px] md:h-[480px] text-center text-white px-[32px]">
            <h3 className="o-decor o-decor--center title-h1 mb-6">FREE INITIAL CONSULTATION</h3>
            <div className="text-[22px] mb-6">Our patients come from all over the UK, including Scotland!</div>
            <div className="text-[18px] mb-6 max-w-[900px]">We understand that traveling for dental treatment is a big commitment. That’s why we offer a <strong>free
                initial video consultation</strong>, helping you make an informed decision before visiting our London clinic</div>
            <LinkPrimary link="/booking" text="Schedule Your Appointment" />
        </div>
    )
}

export default PromoMsg