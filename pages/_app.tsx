import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header.Module'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}
