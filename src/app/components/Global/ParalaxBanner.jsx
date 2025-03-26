import { Parallax } from 'react-parallax'
import { CtaPrimary } from "../UI/Cta"

const ParalaxBanner = () => {
    return (
        <Parallax blur={4} strength={300} bgImage="/images/parallax.jpg">
            <div className="bg-[rgba(0,0,0,0.7)] backdrop-sepia-80 flex flex-col items-center justify-center h-[650px] md:h-[480px] text-center text-white px-[32px]">
                <h3 className="o-decor o-decor--center title-h1 mb-6">FREE INITIAL CONSULTATION</h3>
                <div className="text-[22px] mb-6">Our patients come from all over the UK, including Scotland!</div>
                <div className="text-[18px] mb-6 max-w-[900px]">We understand that traveling for dental treatment is a big commitment. That’s why we offer a <strong>free
                    initial video consultation</strong>, helping you make an informed decision before visiting our London clinic</div>
                <CtaPrimary link="/booking" text="Schedule Your Appointment" />
            </div>
        </Parallax>
    )
}

export default ParalaxBanner