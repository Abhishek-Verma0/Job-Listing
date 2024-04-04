import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { EdgeStoreProvider } from "@/lib/edgestore";

const raleway = Raleway({ subsets: ["latin"],
weight:["200","300","400","500","600","700", "800", "900"],
}); 

export const metadata: Metadata = {
  title: "Adex",
  description: "Job Board",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        
        <EdgeStoreProvider>
        <Navbar/>
        {children}
        <Footer />
        </EdgeStoreProvider>
        </body>
    </html>
  );
}
