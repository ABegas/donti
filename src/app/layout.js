import { Oswald, Poppins } from "next/font/google";
import "./styles/tailwind.css";
import "./styles/globals.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700"],
    variable: "--font-oswald"
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "400", "600"],
    variable: "--font-poppins"
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

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
