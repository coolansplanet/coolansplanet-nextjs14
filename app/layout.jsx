import { Fragment } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getFooterData } from "@/helpers/provider";
import { headConfig, googleAnalytics, metadata, viewport } from "@/config";
import { openSans, anton, silkscreen } from "./fonts";
import "./globals.scss";
import styles from "./layout.module.scss";

export { metadata };

export { viewport };

const RootLayout = async ({ children }) => {
  let footerData;
  try {
    const { data } = await getFooterData();
    footerData = data;
  } catch (error) {
    console.error("Error fetching footer data", error.message);
  }

  return (
    <html
      lang="en"
      className={`${openSans.variable} ${anton.variable} ${silkscreen.variable}`}
    >
      <head>
        {headConfig.linkTags.map((linkProps, index) => {
          return (
            <Fragment key={`link-${index}`}>
              <link {...linkProps} />
            </Fragment>
          );
        })}

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalytics.trackingId}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalytics.trackingId}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </head>
      <body>
        <Header />
        <main className={styles.app}>{children}</main>
        <Footer text={footerData.text} />
      </body>
    </html>
  );
};

export default RootLayout;
