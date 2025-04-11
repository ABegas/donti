import Link from "next/link"
import { ServiceLinksContent } from "@data/common"
import ServiceContent from "@components/Global/ServiceContent"

export const metadata = {
    title: "Privacy Policy",
}

export default function TermsConditions() {
    return (
        <div className="pt-[260px] pb-[60px] header-dark">
            <div className="mx-auto max-w-[1400px] flex flex-col md:flex-row gap-20">
                <ServiceContent data={ServiceLinksContent} />
            </div>   
        </div>
    )
  }