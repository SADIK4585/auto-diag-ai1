import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Oxanium } from 'next/font/google'
import { LanguageProvider } from '@/lib/i18n/context'
import { AuthProvider } from '@/lib/auth/context'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const oxanium = Oxanium({
  subsets: ['latin'],
  variable: '--font-oxanium',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'AutoDiag AI — AI Car Fault Diagnosis',
    template: '%s · AutoDiag AI',
  },
  description:
    'AI-powered car fault diagnosis for classic and modern vehicles. Select your vehicle, describe the symptoms, upload a photo, and receive a structured diagnostic report.',
  generator: 'v0.app',
  keywords: [
    'car diagnosis',
    'AI car fault',
    'OBD-II',
    'vehicle diagnostics',
    'auto repair',
  ],
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#111318',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${inter.variable} ${oxanium.variable} font-sans antialiased`}>
        <LanguageProvider>
          <AuthProvider>
            <div className="flex min-h-dvh flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
            <Toaster position="top-center" />
          </AuthProvider>
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
