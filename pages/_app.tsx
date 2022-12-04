import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Noto_Sans_JP } from "@next/font/google";

const notoSans = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['japanese']
})

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <main className={notoSans.className}>
      <Component {...pageProps} />
    </main>
  )
}
