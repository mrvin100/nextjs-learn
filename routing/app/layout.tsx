import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Template from "./template";
import NavLinks from "../components/nav-links";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next learn|Routing",
  description: "Course of Next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen p-4">
          <header className="border rounded-md p-4 text-center mb-4"><span className="mr-4">header</span> <NavLinks /></header>
          <Template key={'routeParam'} >{children}</Template>
        </div>
      </body>
    </html>
  );
}
