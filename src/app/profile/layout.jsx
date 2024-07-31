import { Inter, Lato } from "next/font/google";
import "../globals.css";
import AuthProvider from "../context/authrovider";
import Header from "../../components/header/header";

const inter = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: "auto" }}>
        <AuthProvider>
          <div className="mx-auto  ">
            <Header />
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}