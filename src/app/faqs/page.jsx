import { FaqsContent, FaqsListContent } from "@data/faqs";
import HeroBanner from "../components/Global/HeroBanner";
import ContentWithBg from "../components/Global/ContentWithBg"
import { Accordion, AccordionItem } from '@szhsin/react-accordion'

export const metadata = {
    title: "FAQ(s)",
}

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
            <ContentWithBg imgSrc={FaqsContent.bgContnentImg}>
                <section className="py-16">
                    <Accordion transition transitionTimeout={200} className="mb-12">
                        {FaqsListContent.map((item) => (
                            <AccordionItem key={item.id} header={item.title} initialEntered={(item.isOpen) ? true : false} className="border-b-1 border-dashed border-b-gray-400">
                                {item.items.map((question, i) => 
                                    <div key={i} className="border-b-1 items-end border-dashed border-b-gray-400 py-3 md:px-4 md:mx-4">
                                        {question.question && 
                                            <div className="font-[400] pb-3">
                                                {question.question}
                                            </div>
                                        }
                                        {question.answer &&
                                            <div dangerouslySetInnerHTML={{__html: question.answer}} className="mr-4" />
                                        }
                                    </div>
                                )}
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>
            </ContentWithBg>
        </>
    );
  }