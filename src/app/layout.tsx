import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Providers from '@/providers/Providers'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import { ThemeScript } from '@/components/theme/ThemeScript'
import './globals.css'

const pretendard = localFont({
  src: './assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

const jetbrainsMono = localFont({
  src: './assets/fonts/JetBrainsMonoVariable.ttf',
  display: 'swap',
  weight: '100 800',
  variable: '--font-jetBrainsMono',
})

export const metadata: Metadata = {
  title: 'mynolog - hello, dev',
  description: 'mynolog의 개발 블로그',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${pretendard.className} ${jetbrainsMono.variable} antialiased`}>
        <Providers>
          <DefaultLayout>{children}</DefaultLayout>
        </Providers>
      </body>
    </html>
  )
}
