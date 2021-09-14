import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Provider from '@github-profiles/store/provider'

import store from '../store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
