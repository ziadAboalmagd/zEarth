// React & Next
import React from "react";
import { Baloo_Bhaijaan_2 } from "next/font/google"; // alt Ubuntu
// import Head from "next/head";

// components
import Footer from "@/app/components/Footer";
import Zheader from "@/app/components/Header";
import Starfield from "@/app/components/Stars";

// global scss
import "./globals.scss";

const font = Baloo_Bhaijaan_2({
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "zEarth",
  description: "zEarth company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* stars */}
        <Starfield
          starCount={1000}
          starColor={[255, 255, 255]}
          speedFactor={0.05}
          backgroundColor="black"
        />
        {/* header */}
        <Zheader />

        {/* children */}
        {children}
        {/* footer */}
        <Footer />
        {/* <ToastContainer limit={1} /> */}
      </body>
    </html>
  );
}
