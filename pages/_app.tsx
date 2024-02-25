import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import Head from 'next/head';
import { theme } from '@/theme';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <MantineProvider theme={theme}>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </MantineProvider>
        </>
    );
}
