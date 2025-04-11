import { Oswald, Poppins } from "next/font/google";
import "./styles/tailwind.css";
import "./styles/globals.scss";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700"],
    variable: "--font-oswald"
})

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "400", "600"],
    variable: "--font-poppins"
})

export const metadata = {
    title: {
        default: "Donti Dental Clinic | Cosmetic & Restorative Dentistry in London",
        template: "%s | Donti Dental Clinic",
    },
    description: "Located in the heart of the City of London, Donti Dental Clinic offers advanced, high-quality dental treatments tailored to your unique needs and goals",
    icons: [
        { rel: "icon", url: "/favicon.ico" },
        { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
        { rel: "shortcut icon", url: "/favicon.ico" },
    ]
}

export default function RootLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Donti Dental Clinic",
        "url": "https://www.dontidentalclinic.co.uk",
        "telephone": "020 3576 9700",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "King William 1",
          "addressLocality": "London",
          "postalCode": "EC4N 7AR",
          "addressCountry": "GB"
        }
    }

    return (
        <html lang="en">
            <body className={`${oswald.variable} ${poppins.variable} font-poppins font-[200] bg-brand text-gray-600`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
