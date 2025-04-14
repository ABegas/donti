import { ServiceLinksContent } from "@data/common"
import ServiceContent from "@components/Global/ServiceContent"

export const metadata = {
    title: "Cookies Policy",
}

export default function CookiesPolicy() {
    return (
        <ServiceContent data={ServiceLinksContent} />
    )
  }