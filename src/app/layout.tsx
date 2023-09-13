import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["devanagari"],
});

export const metadata: Metadata = {
  title: "LD Elétrica e Tecnologia",
  description: "Serviços elétricos com tecnologia de ponta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="./favicon.ico"
          // href="/icon?<generated>"
          type="image/ico"
          sizes="32x32"
        />
      </Head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
