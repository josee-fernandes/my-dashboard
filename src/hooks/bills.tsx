import { useContext } from 'react'

import { BillsContext } from '../contexts/bills'

export const useBills = () => {
  const context = useContext(BillsContext)

  return context
}