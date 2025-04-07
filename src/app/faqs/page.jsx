import { FaqsContent } from "@data/faqs";
import HeroBanner from "../components/Global/HeroBanner";

export default function Faqs() {
    return (
        <>
            <HeroBanner
                imgSrc={FaqsContent.bannerImgSrc}
                title={FaqsContent.title}
                subtitle={FaqsContent.subtitle}
                imgWidth={1200}
                imgHeight={557}
                overlay={true}
                height={'h-[25vh]'}
            />
            <h1 className="text-center py-40">FAQ(S) section will be available soon</h1>
        </>
    );
  }