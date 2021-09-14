import React from 'react'
import { Provider, ProviderProps } from 'react-redux'

interface StoreProviderProps extends ProviderProps {
  children: JSX.Element;
}

const StoreProvider = ({ store, children }: StoreProviderProps): JSX.Element => (
  <Provider store={store}>
    {children}
  </Provider>
)

export default StoreProvider