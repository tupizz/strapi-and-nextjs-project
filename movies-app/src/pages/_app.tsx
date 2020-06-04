import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'emotion-theming';

import GlobalStyles from '../components/GlobalStyles';
import Header from '../components/Header';
import { GetStaticProps } from 'next';
import { api } from '../services/api';

const breakpoints: any = ['360px', '768px', '1024px', '1600px'];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
breakpoints.xxl = breakpoints[4];

const theme = {
  colors: {
    primary: '#ff0000',
  },

  breakpoints,
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
