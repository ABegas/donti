import Link from "next/link";
import ArrowRight from "@public/icons/arrow-right.svg";

export const CtaPrimary = ({text, link, style}) => (
    <Link href={link} className={`cta-primary inline-block ${style ? style : ""}`}>
        {text}
    </Link>            
)

export const LinkPrimaryArrow = ({text, link, style}) => (
    <Link href={link} className={`font-poiret md:text-xl inline-flex items-center justify-center group hover:text-brand transition ${style ? style : ""}`}>
        {text}
        <ArrowRight className="w-[15px] translate-x-2 translate-y-[2px] group-hover:translate-x-3 transition-transform" />
    </Link>         
)
  