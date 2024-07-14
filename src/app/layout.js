import { Inter, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Hero from "@/components/Hero/hero";

const inter = Lato({ subsets: ["latin"] , weight: ['100', '300', '400', '700', ]});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: "auto" }}>
        <Header />
        <Hero />
        {children}
        </body>
    </html>
  );
}
