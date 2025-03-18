export const Hero = () => (
    <section>
        <div className="relative w-full h-screen">
            <div className="video-overlay"></div>
            <div className="absolute z-10 text-white center-absolute text-center">
                <h2 className="title-h1 md:min-w-[1000px]">Welcome to Donti Dental Clinic</h2>
                <p className="text-[24px]">Where Innovation Meets Exceptional Care</p>
            </div>
            
            <video src="videos/hero-video.mov" autoPlay muted loop className="absolute top-0 left-0 h-full object-cover sepia-[40%]"></video>
        </div>
    </section>
);
  