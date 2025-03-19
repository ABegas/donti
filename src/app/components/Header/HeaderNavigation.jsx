import Link from "next/link";
import {HeaderNavigationLinks} from "../../content/header";
import '../../styles/header-navigation.scss';

export const HeaderNavigation = () => (
    <nav>
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
                            className="
                                inline-block
                                font-poiret
                                text-[20px]
                                border-b-[0.5px]
                                h-[38px]
                                xl:hover:h-[32px]
                                border-transparent
                                transition-all
                                hover:border-black
                                xl:text-[#fff]
                                xl:hover:border-brand
                                xl:hover:text-brand
                            ">
                                <label htmlFor="menuCheckbox" className="cursor-pointer font-bold xl:font-normal">{link.title}</label>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
)
  