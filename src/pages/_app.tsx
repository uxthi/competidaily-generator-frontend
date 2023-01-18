import React, { useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preload" href="/content/normalize.css" as="style" />
        <link rel="preload" href="/content/common.css" as="style" />
        <link rel="icon" href="/content/images/favicon.png" />
        <title>Gerador de Competidaily</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
