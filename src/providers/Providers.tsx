import React from 'react'
import { ReactRouterProvider } from './ReactRouter'

interface IProviders {
  children: React.ReactNode
}

export const Providers = ({ children }: IProviders) => {
  return <ReactRouterProvider>{children}</ReactRouterProvider>
}
