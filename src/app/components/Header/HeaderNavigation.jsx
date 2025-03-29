import Link from "next/link";
import {HeaderNavigationLinks} from "@content/header";
import '@styles/header-navigation-mobile.scss';
import SocialLinks from "../Global/SocialLinks";

export const HeaderNavigation = ({isSticky}) => (
    <nav className="relative">
        <div className="c-menuToggle">
            <input type="checkbox" id="menuCheckbox" className="xl:hidden" />
            <span></span>
            <span></span>
            <span></span>
            <ul className="c-menu xl:flex">
                {HeaderNavigationLinks.map((link) => (
                    <li key={link.id} className="px-6">
                        <Link 
                            href={link.url}
                            className={`
                                inline-block
                                font-poppins
                                border-b-[0.5px]
                                h-[38px]
                                xl:hover:h-[32px]
                                border-transparent
                                transition-all
                                hover:border-black
                                xl:text-[#fff]
                                text-[18px]
                                xl:hover:border-brand
                                xl:hover:text-brand
                                lg:text-[16px]
                                xl:text-[18px]
                            `}>
                                <label htmlFor="menuCheckbox" className="cursor-pointer font-[200]">{link.title}</label>
                        </Link>
                    </li>
                ))}
                <li className="absolute bottom-0">
                    <SocialLinks styles="xl:hidden gap-4" type="light" />
                </li>
            </ul>
        </div>
    </nav>
)
  