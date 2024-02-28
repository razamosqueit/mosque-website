import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '@/theme';

export default function RootLayout({ children }: { children: any }) {
    return (
        <html lang="en">
        <head>
            <ColorSchemeScript />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
        </head>
        <body>
        <MantineProvider theme={theme}>
             {/*can't use BaseLayout here as for some reason the module css in the Header clashes with the mantine import */}
            {children}
        </MantineProvider>
        </body>
        </html>
    );
}
