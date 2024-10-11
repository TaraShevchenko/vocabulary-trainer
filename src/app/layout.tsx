import { type ReactNode } from 'react'

import { Montserrat } from 'next/font/google'

import { TRPCReactProvider } from 'shared/lib/trpc/client'
import 'shared/styles/globals.css'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--montserrat' })

export const metadata = {
    title: 'Coinroller',
    description: 'Keep your coins',
    icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={montserrat.variable}>
                <TRPCReactProvider>{children}</TRPCReactProvider>
            </body>
        </html>
    )
}
