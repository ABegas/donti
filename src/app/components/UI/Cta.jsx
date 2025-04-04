import Link from "next/link"
import ArrowRight from "@public/icons/arrow-right.svg"

export const LinkPrimary = ({text, link, style, external, theme = 'light'}) => {
    return (
        <Link href={link} className={`cta-primary ${theme === "dark" ? 'cta-primary--dark': ''} ${style ? style : ""}`} target={`${external ? "_blank" : ""}`}>
            {text}
        </Link>            
    )
}

export const LinkPrimaryArrow = ({text, link, style, iconPosition = "right"}) => (
    <Link
        href={link}
        className={`
            ${iconPosition === "left" ? 'flex-row-reverse ' : ''}
            font-poppins md:text-[20px]
            flex
            items-center
            justify-center
            group
            hover:text-brand
            transition
            ${style ? style : ""}
        `}
    >
        {text}
        <ArrowRight
            className={`
                ${iconPosition === "left" ? 
                    'translate-x-[-4px] md:translate-y-[1px] rotate-180 group-hover:translate-x-[-10px]' : 
                    'translate-x-2 md:translate-y-[2px] group-hover:translate-x-3'}
                w-[15px]
                transition-transform
            `}
        />
    </Link>         
)

export const ButtonPrimary = ({text, style, type}) => (
    <button className={`cta-primary ${style ? style : ""}`} type={type}>{text}</button>
)
  