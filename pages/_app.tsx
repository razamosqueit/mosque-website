import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { theme } from '@/theme';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MantineProvider theme={theme}>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </MantineProvider>
    );
}
