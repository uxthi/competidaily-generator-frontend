import React, { useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import GlobalStyle from "../styles/global";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preload" href="/content/normalize.css" as="style" />
        <link rel="preload" href="/content/common.css" as="style" />
        <link rel="stylesheet" href="/content/normalize.css" />
        <link rel="stylesheet" href="/content/common.css" />
        <link rel="icon" href="/content/images/favicon.png" />
        <title>Gerador de Competidaily - (beta)</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
