import { Oswald, Poppins } from "next/font/google";
import "./styles/tailwind.css";
import "./styles/globals.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

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
        default: "Donti Dental Clinic",
        template: "%s | Donti Dental Clinic",
    },
    description: "Discover exceptional dental care at Donti Dental Clinic in the heart of London. We offer advanced treatments and a modern, comfortable environment for your perfect smile",
    icons: [
        { rel: "icon", url: "/favicon.ico" },
        { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
        { rel: "shortcut icon", url: "/favicon.ico" },
    ],
    manifest: "/manifest.webmanifest"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${poppins.variable} font-poppins font-[200] bg-brand text-gray-600`}>
        <Header />
            {children}
        <Footer />
      </body>
    </html>
  );
}
