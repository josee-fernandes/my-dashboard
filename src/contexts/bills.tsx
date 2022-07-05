import React from 'react'

import { months as monthsData } from '../services/data'

interface IBillsContext {
  months: IMonth[]
  setMonths: React.Dispatch<React.SetStateAction<IMonth[]>>
  selectedMonthId: number
  setSelectedMonthId: React.Dispatch<React.SetStateAction<number>>
}

interface IBillsContextProvider {
  children: React.ReactNode
}

export const BillsContext = React.createContext<IBillsContext>({} as IBillsContext)

export const BillsContextProvider: React.FC<IBillsContextProvider> = ({ children }) => {
  const [months, setMonths] = React.useState<IMonth[]>(monthsData)
  const [selectedMonthId, setSelectedMonthId] = React.useState(-1)

  const contextValues = {
    months,
    setMonths,
    selectedMonthId,
    setSelectedMonthId
  }

  return (
    <BillsContext.Provider value={contextValues}>
      {children}
    </BillsContext.Provider>
  )
}