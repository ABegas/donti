import { LinkPrimary, LinkPrimaryArrow } from "../UI/Cta";

const HeroVideo = () => {
    return (
        <section className="shadow-[0_0_0_320px_rgb(35,35,35)] md:shadow-none">
            <div className="relative w-full h-screen">
                <div className="video-overlay"></div>
                <div className="absolute z-10 text-white center-absolute text-center">
                    <h2 className="o-decor o-decor--center drop-shadow-text title-h1 min-w-[340px] md:min-w-[800px] mb-4 md:mb-2">Welcome to Donti Dental Clinic</h2>
                    <div className="font-oswald text-[24px] md:text-[32px] font-thin drop-shadow-text mb-[30px]">Where Innovation Meets Exceptional Care</div>
                    <div className="flex flex-col md:flex-row justify-center px-[40px]">
                        <LinkPrimary text="Book Now" link="/book" />
                        <LinkPrimaryArrow text="About Us" link="/about" style="mt-4 md:mt-0 md:ml-12" />
                    </div>
                </div>
                <video src="videos/hero-video.mov" autoPlay muted loop playsInline className="absolute top-0 left-0 h-full w-full object-cover sepia-[40%]"></video>
            </div>
        </section>
    )
}

export default HeroVideo