import { PackagesListContent, PortfolioContent } from "@data/pages";
import HeroBanner from "../components/Global/HeroBanner";

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
            <h1 className="text-center py-40">Portfolio section will be available soon</h1>
        </>
    );
  }