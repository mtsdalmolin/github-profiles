import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Provider from '@react-boilerplate/store/provider'

import store from '../store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
