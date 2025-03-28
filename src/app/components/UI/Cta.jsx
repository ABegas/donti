import Link from "next/link"
import ArrowRight from "@public/icons/arrow-right.svg"

export const LinkPrimary = ({text, link, style}) => (
    <Link href={link} className={`cta-primary inline-block ${style ? style : ""}`}>
        {text}
    </Link>            
)

export const LinkPrimaryArrow = ({text, link, style}) => (
    <Link href={link} className={`font-poppins md:text-[20px] inline-flex items-center justify-center group hover:text-brand transition ${style ? style : ""}`}>
        {text}
        <ArrowRight className="w-[15px] translate-x-2 md:translate-y-[2px] group-hover:translate-x-3 transition-transform" />
    </Link>         
)

export const ButtonPrimary = ({text, style, type}) => (
    <button className={`cta-primary ${style ? style : ""}`} type={type}>{text}</button>
)
  