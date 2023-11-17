/* eslint-disable @next/next/next-script-for-ga */
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head";
import TagManager from "./service/tagmanager";

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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
}              )(window,document,'script','dataLayer','GTM-NKFPLQ5R');`,
          }}
        ></script>
        <TagManager id="GTM-NKFPLQ5R" />
        <link
          rel="icon"
          href="./favicon.ico"
          // href="/icon?<generated>"
          type="image/ico"
          sizes="32x32"
        />
      </Head>
      <body className={poppins.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NKFPLQ5R"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <TagManager id="GTM-NKFPLQ5R" />
        {children}
      </body>
    </html>
  );
}
