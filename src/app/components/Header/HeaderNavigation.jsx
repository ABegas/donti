'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'
import {HeaderNavigationLinks} from "@data/header";
import '@styles/header-navigation-mobile.scss';
import SocialLinks from "../Global/SocialLinks";


const HeaderNavigation = ({isSticky}) => {
    const [navOpened, setNavOpened] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setNavOpened(false)
    }, [pathname]);

    return (
        <nav className="wrapper relative">
            <div className="c-menuToggle">
                <input type="checkbox" id="menuCheckbox" className="xl:hidden" onChange={(e) => setNavOpened(!navOpened)} checked={navOpened} />
                <span></span>
                <span></span>
                <span></span>
                <ul className="c-menu xl:flex justify-between">
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
                                    transition-all
                                    hover:border-black
                                    xl:text-[#fff]
                                    text-[18px]
                                    xl:hover:border-brand
                                    xl:hover:text-brand
                                    lg:text-[16px]
                                    xl:text-[18px]
                                    ${pathname.split('/')[1] === link.url.replace('/', '') ? 'border-black xl:border-brand xl:h-[32px]' : 'border-transparent'}
                                    
                                `}>
                                    <label htmlFor="menuCheckbox" className="h-[38px] inline-block cursor-pointer font-[200]">{link.title}</label>
                            </Link>
                        </li>
                    ))}
                    <li className="fixed bottom-0">
                        <SocialLinks styles="xl:hidden gap-4" type="light" />
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default HeaderNavigation
  