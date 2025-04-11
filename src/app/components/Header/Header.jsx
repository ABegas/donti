'use client'

import { useEffect, useState } from "react";
import Image from "next/image"
import Link from "next/link"
import HeaderNavigation from "./HeaderNavigation";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        if (window.scrollY !== 0) {
            setIsSticky(true);
        }

        const handleScroll = () => {
            if (window.scrollY !== 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`
            fixed
            top-0
            z-20
            flex
            xl:flex-col
            justify-between
            w-full
            items-center
            px-8
            transition-all
            duration-400
            ${isSticky ? 'is-sticky before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-brand-dark before:opacity-[30%] backdrop-blur-xl' : ''}
        `}>
            <h1 className="sr-only">Donti Dental Clinic</h1>
            <Link href="/" className={`relative pb-[26px] pt-[10px] transition-all duration-400 ${isSticky ? 'xl:py-[11px] w-[120px] xl:w-[120px]' : 'xl:py-[36px] w-[180px] xl:w-[250px]'}`}>
                <Image src="/images/logo.PNG" alt="Denti Dental Clinic" width={250} height={85} priority={true} />
                <span className={`
                    absolute
                    tracking-[2px]
                    text-[#ced0ab]
                    opacity-90
                    font-[300]
                    transition-all
                    duration-400
                    ${isSticky ? 'bottom-[16px] xl:bottom-[18px] right-[-90px] xl:right-[-145px] text-[8px] xl:text-[10px]' : 'bottom-[16px] xl:bottom-[25px] right-[-55px] text-[8px] xl:text-[10px]'}
                `}>
                    By Dr. Konstantinos
                </span>
            </Link>
            <HeaderNavigation isSticky={isSticky} />
        </header>
    )
}

export default Header
