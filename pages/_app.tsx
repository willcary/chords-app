import '@/styles/globals.css'
import '@/styles/tabs.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </UserProvider>
  )
}
