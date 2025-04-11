import { PortfolioContent } from "@data/pages"
import HeroBanner from "../components/Global/HeroBanner"
import Video from "../components/Global/Video";
import ContentWithBg from "../components/Global/ContentWithBg";

export const metadata = {
    title: "Our Portfolio",
}

export default function Portfolio() {
    return (
        <>
            <HeroBanner
                imgSrc={PortfolioContent.bannerImgSrc}
                title={PortfolioContent.title}
                subtitle={PortfolioContent.subtitle}
                imgWidth={1200}
                imgHeight={557}
                overlay={true}
                height={'h-[25vh]'}
            />
            <ContentWithBg>
                {PortfolioContent.interviews.map((item, i) => (
                    <div key={item.name} className="flex flex-col md:flex-row md:odd:flex-row-reverse justify-end items-center mb-8 xl:mb-[-40px] gap-15">
                        {item.text && 
                            <div 
                                dangerouslySetInnerHTML={{__html: item.text}}  
                                className="md:w-[60%] md:mt-[-20px] p-8 md:p-10 bg-[rgba(0,0,0,0.1)] backdrop-sepia-10 rounded-[60px_0_60px_0]"
                                data-aos="fade-up"
                            />
                        }
                        <div className="h-full w-full md:w-[35%] bg-[rgba(0,0,0,0.5)] rounded-2xl overflow-hidden shadow-2xl" data-aos="fade-right">
                            <div className="relative w-full pb-[177.77%] rounded-2xl overflow-hidden">
                                <Video videoSrc={item.videoSrc} />
                            </div>
                        </div>
                    </div>
                ))}
            </ContentWithBg>
        </>
    );
  }