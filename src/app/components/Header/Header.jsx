import Image from "next/image";
import Link from "next/link";
import {HeaderNavigationLinks} from "../../content/header";

export const Header = () => (
    <header className="fixed top-0 z-20 flex flex-col justify-between w-full items-center px-8">
        <h1 className="text-2xl font-bold sr-only">Denti Dental Clinic</h1>
        <Link href="/" className="relative py-[36px]">
            <Image src="/images/logo.png" alt="Denti Dental Clinic" width={250} height={250} />
            <p className="
                absolute
                text-[11px]
                bottom-[24px]
                right-[-55px]
                tracking-[3px]
                text-[#ced0ab]
                opacity-90
            ">
                By Dr. Konstantinos
            </p>
        </Link>

        <nav>
            <ul className="flex space-x-4">
                {HeaderNavigationLinks.map((link) => (
                    <li key={link.id} className="px-4">
                        <Link 
                            href={link.url}
                            className="
                                font-alumni
                                text-[#fff]
                                text-[24px]
                                tracking-[1px]
                                border-b-[0.5px]
                                border-transparent
                                transition
                                hover:border-brand
                                hover:text-brand
                                drop-shadow-md
                            ">
                                    {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  );
  