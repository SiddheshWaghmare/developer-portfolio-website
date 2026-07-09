import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Siddhesh Waghmare — Java Fullstack Developer',
  description:
    'Portfolio of Siddhesh Waghmare, a Java Fullstack Developer specializing in Spring Boot, Microservices, RESTful APIs, and scalable backend systems.',
  generator: 'v0.app',
  keywords: [
    'Siddhesh Waghmare',
    'Java Developer',
    'Spring Boot',
    'Fullstack Developer',
    'Backend Engineer',
    'Microservices',
  ],
  authors: [{ name: 'Siddhesh Waghmare' }],
  openGraph: {
    title: 'Siddhesh Waghmare — Java Fullstack Developer',
    description:
      'Java Fullstack Developer specializing in Spring Boot, Microservices, and scalable backend systems.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f8fa' },
    { media: '(prefers-color-scheme: dark)', color: '#0d1220' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=document.documentElement;if(t==='light'){d.classList.remove('dark');d.classList.add('light');}else{d.classList.add('dark');d.classList.remove('light');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
