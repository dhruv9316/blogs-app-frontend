import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog Xplorer",
  description: "Blogs app that contains so many blogs with Pagination",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <NavBar />
        {children}
      </body>
    </html>
  ); 
}
