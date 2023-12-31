/* eslint-disable @next/next/next-script-for-ga */
import Head from "next/head";
import React from "react";

interface TagManagerProps {
  id: string;
}

const TagManager: React.FC<TagManagerProps> = ({ id }) => {
  return (
    <>
      <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${id}');`,
            }}
          ></script>
      </Head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${id}`}
            height="0"
            width="0"
            className="hidden invisible"
          ></iframe>
        </noscript>
      </body>
    </>
  );
};

export default TagManager;
