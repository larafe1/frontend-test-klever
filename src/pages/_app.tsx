import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';

import { WalletProvider } from '@/hooks';
import { theme, GlobalStyle } from '@/styles';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>kwallet</title>
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="The best crypto wallet in the world"
        />
      </Head>

      <WalletProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </WalletProvider>
    </ThemeProvider>
  );
}

export default App;
