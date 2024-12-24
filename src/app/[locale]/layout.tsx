import { type Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { getServerSession } from 'next-auth'

import { NextIntlProvider, type NextIntlProviderProps, languages } from 'shared/lib/nextIntl'
import { SessionProvider, authOptions } from 'shared/lib/nextAuth'
import { TRPCReactProvider } from 'shared/lib/trpc/client'
import 'shared/styles/globals.css'
import { cn } from 'shared/utils/cn'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--montserrat' })

export const metadata: Metadata = {
    title: 'Vocabulary Trainer',
    description: 'Train your vocabulary',
    icons: [
        { rel: 'apple-touch-icon', sizes: '57x57', url: '/apple-icon-57x57.png' },
        { rel: 'apple-touch-icon', sizes: '60x60', url: '/apple-icon-60x60.png' },
        { rel: 'apple-touch-icon', sizes: '72x72', url: '/apple-icon-72x72.png' },
        { rel: 'apple-touch-icon', sizes: '76x76', url: '/apple-icon-76x76.png' },
        { rel: 'apple-touch-icon', sizes: '114x114', url: '/apple-icon-114x114.png' },
        { rel: 'apple-touch-icon', sizes: '120x120', url: '/apple-icon-120x120.png' },
        { rel: 'apple-touch-icon', sizes: '144x144', url: '/apple-icon-144x144.png' },
        { rel: 'apple-touch-icon', sizes: '152x152', url: '/apple-icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-icon-180x180.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', url: '/android-icon-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', url: '/favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
    ],
    manifest: '/manifest.json',
    other: {
        'msapplication-TileColor': '#000000',
        'msapplication-TileImage': '/ms-icon-144x144.png',
    },
}

export const revalidate = 0

export function generateStaticParams() {
    return languages.map((language) => ({ locale: language }))
}

export default async function RootLayout({ children, params: { locale } }: NextIntlProviderProps) {
    const session = await getServerSession(authOptions)
    return (
        <html lang={locale}>
            <body className={cn(montserrat.variable, 'min-h-screen bg-background')}>
                <NextIntlProvider params={{ locale }}>
                    <SessionProvider session={session}>
                        <TRPCReactProvider>{children}</TRPCReactProvider>
                    </SessionProvider>
                </NextIntlProvider>
            </body>
        </html>
    )
}
