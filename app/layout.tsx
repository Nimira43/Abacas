import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Header from '@/components/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Abacus',
  description: 'Expense tracker using Next JS, Vanilla CSS, Neon, Clerk and Prisma',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={poppins.className}>
          <Header />
          <main className='container'>
            {children}
          </main>
          <ToastContainer />
        </body>
      </html>
    </ClerkProvider>
    
  )
}
