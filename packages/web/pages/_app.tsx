import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Provider from '@github-profiles/store/provider'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from '../store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}
export default MyApp
