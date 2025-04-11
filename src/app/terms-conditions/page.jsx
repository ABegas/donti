import Link from "next/link"
import { ServiceLinksContent } from "@data/common"
import ServiceContent from "@components/Global/ServiceContent"

export const metadata = {
    title: "Privacy Policy",
}

export default function TermsConditions() {
    return (
        <ServiceContent data={ServiceLinksContent} />
    )
  }