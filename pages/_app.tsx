import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { theme } from '@/theme';
import { HeaderSimple } from '@/components/HeaderSimple/HeaderSimple';
import {Header} from "@/components/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
