import { TreatmentsListContent } from '@content/treatments'
import Image from "next/image"
import Link from 'next/link'

const TreatmentsList = () => {
    return (
        <div className="bg-brand px-[32px]">
            <div className="wrapper text-brand-dark text-center mb-[60px]" data-aos="fade-down" data-aos-anchor-placement="top-bottom">
                <h2 className="o-decor o-decor--black o-decor--center mb-[32px] title-h1 pt-[80px]">Caring for Your Smile</h2>
                <div className="text-[24px] font-[200]">From routine cleanings to advanced procedures — we've got you covered.</div>
            </div>
            <ul className="text-brand max-w-[1400px] w-full mx-auto flex justify-center gap-8 flex-wrap py-[80px]">
                {TreatmentsListContent.map((treatment, index) => (
                    <li
                        key={treatment.id}
                        className={`overflow-hidden w-full md:max-w-[47%] lg:max-w-[30%] xl:max-w-[23%] bg-black rounded-[0_60px_0_60px] h-[460px]`}
                        data-aos="fade-up"
                        data-aos-offset="-100"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-delay={100 * index++}
                    >
                        <Image src={treatment.imgSrc} width={600} height={600} alt={treatment.title} className="z-[-1] absolute left-0 top-0 bg-cover w-full h-full object-cover opacity-45 sepia-50" />
                        <Link href={'#'} className="group flex flex-col justify-between h-full">
                            <div>
                                <div className="
                                    relative
                                    font-[400]
                                    text-[36px]
                                    mb-[20px]
                                    after:border-brand
                                    font-oswald
                                    inline-block
                                    after:border-b-[3px]
                                    after:absolute
                                    after:left-0
                                    after:bottom-0
                                    after:w-full
                                    pt-6
                                    pl-6
                                ">
                                        0{index++}.
                                </div>
                            </div>
                            <div className="text-right p-6 lg:group-hover:bg-[rgba(0,0,0,0.4)] lg:group-hover:backdrop-blur-md overflow-hidden transition duration-400 ease-in-out">
                                <h3 className="o-decor o-decor--right mb-2">{treatment.title}</h3>
                                <div className="mb-2 text-[18px] md:text-[20px]">{treatment.subtitle}</div>
                                <div className="flex items-end justify-end text-brand text-[20px] font-[14px] opacity-0 h-0 group-hover:h-[50px] group-hover:opacity-100 transition-all duration-400 ease-in-out">
                                    Read More                                    
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TreatmentsList
