import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
    title: '234 Poker',
    description: '234 Poker: Holdem, Pineapple, and Omaha poker.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' suppressHydrationWarning>
            <head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <meta name='charset' content='utf-8' />
            </head>
            <body
                className={cn(
                    'min-h-screen bg-white font-sans text-white antialiased dark:bg-slate-900 dark:text-black',
                    fontSans.variable
                )}
            >
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
