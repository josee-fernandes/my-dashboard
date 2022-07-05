import React from 'react'

import { BillsContextProvider } from './contexts/bills'

import { Layout } from './components/Layout'

export const App: React.FC = () => {
  return (
    <BillsContextProvider>
      <Layout />
    </BillsContextProvider>
  )
}