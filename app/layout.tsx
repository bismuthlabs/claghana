import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/footer'
import Header from '@/components/header'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
})

export const metadata = {
  title: 'Christian Life Academy',
  description: 'Educate for better tommorow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
