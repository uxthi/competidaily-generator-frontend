import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import GlobalStyle from "../styles/global";
import Script from "next/script";
import getConfig from "next/config";

const googleTagManagerId = getConfig().publicRuntimeConfig.googleTagManagerId;

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preload" href="/content/normalize.css" as="style" />
        <link rel="preload" href="/content/common.css" as="style" />
        <link rel="icon" href="/content/images/favicon.png" />
        <title>Gerador de Competidaily!</title>
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${googleTagManagerId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${googleTagManagerId}, {
            page_path: window.location.pathname,
            });
            `,
        }}
      />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
