import Image from "next/image";
import Link from "next/link";
import { HeaderNavigation } from "./HeaderNavigation";

const Header = () => {
    return (
        <header className="fixed top-0 z-20 flex xl:flex-col justify-between w-full items-center px-8">
            <h1 className="text-2xl font-bold sr-only">Denti Dental Clinic</h1>
            <Link href="/" className="relative pb-[36px] pt-[20px] xl:py-[36px] w-[180px] xl:w-[250px]">
                <Image src="/images/logo.PNG" alt="Denti Dental Clinic" width={250} height={85} priority={true} />
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
            <HeaderNavigation />
        </header>
    )
}

export default Header
