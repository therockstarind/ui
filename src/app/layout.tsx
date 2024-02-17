import { cn } from '@nextui-org/react'
import { Metadata } from 'next'
import { Suspense } from 'react'
import { ThemeSwitcher } from '®/components/theme'
import { fontSans } from '®/lib/fonts'
import { Providers } from '®/ui/providers'

export const metadata: Metadata = {
  title: {
    default: '',
    template: ``,
  },
  description: '',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers>
          <div className="relative flex h-screen flex-col">
            {/* navbar */}
            <Suspense>
              <main className="container mx-auto max-w-7xl flex-grow px-6 pt-16">
                {children}
              </main>
            </Suspense>
          </div>
        </Providers>
      </body>
    </html>
  )
}
