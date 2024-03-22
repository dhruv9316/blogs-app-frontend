import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blogs Xplorer",
  description: "Blogs app that contains so many blogs with Pagination",
  icons: {
    icon: '/favicon.ico'
    // icon: [
    //   // {
    //   //   media: '(prefers-color-scheme: light)',
    //   //   url: '/favicon.ico',
    //   //   href: '/favicon.ico',
    //   // },
    //   {
    //     // media: '(prefers-color-scheme: dark)',
    //     url: '/favicon.ico',
    //     href: '/favicon.ico',
    //   },
    // ],
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
