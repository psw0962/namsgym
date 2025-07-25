import React, { useState } from 'react';
import GlobalStyle from '@/styles/global-style';
import Head from 'next/head';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import usePageLoading from '@/hooks/usePageLoading';
import GlobalSpinner from '@/components/global-spinner';
import styled from 'styled-components';
import Navigation from '@/components/navigation';
import { Analytics } from '@vercel/analytics/react';
import dynamic from 'next/dynamic';
import Footer from '@/components/footer';
import Contact from '@/components/contact';

const Splash = dynamic(() => import('@/components/splash'), {
  ssr: false,
});

const App = ({ Component, pageProps }) => {
  const loading = usePageLoading();
  const [queryClient] = useState(() => new QueryClient());
  const [isSplash, setIsSplash] = useState(true);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        />

        <title>남스짐 | 프리미엄 PT GYM</title>
      </Head>

      <GlobalStyle />

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <React.Fragment>
            {isSplash ? (
              <Splash setIsSplash={setIsSplash} />
            ) : (
              <Frame>
                {loading ? (
                  <GlobalSpinner />
                ) : (
                  <>
                    <Analytics />

                    <Navigation />

                    <ComponentFrame>
                      <Component {...pageProps} />
                    </ComponentFrame>

                    <Contact />

                    <Footer />
                  </>
                )}
              </Frame>
            )}
          </React.Fragment>
        </Hydrate>

        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
};

export default App;

const Frame = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ComponentFrame = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  max-width: 120rem;
  min-height: 100vh;
  padding: 12rem 6rem 6rem 6rem;

  @media screen and (max-width: 500px) {
    max-width: 100%;
    padding: 8rem 3rem 6rem 3rem;
  }
`;
