import '../styles/globals.css'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

/* alt
export default function MyApp({ Component, pageProps }: AppProps) {
  retunr <Component {...pageProps} />
}
*/