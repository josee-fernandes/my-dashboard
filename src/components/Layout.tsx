import React from 'react'

import { useBills } from '../hooks/bills'
import { Bills } from './Bills'

import { Card } from './Card'
import { Months } from './Months'

export const Layout: React.FC = () => {
  const { selectedMonthId, months } = useBills()

  const [entries, setEntries] = React.useState(0)
  const [expenses, setExpenses] = React.useState(0)
  const [balance, setBalance] = React.useState(0)

  const handleSelectedMonth = React.useCallback((id: number) => {
    const foundMonth = months.find(month => month.id === id)

    if (foundMonth) {
      return foundMonth.bills
    }
    
    return []
  }, [selectedMonthId])

  return (
    <>
      {selectedMonthId >= 0 && (
        <Bills
          bills={handleSelectedMonth(selectedMonthId)}
        />
      )}
      <div className="container mx-auto h-screen grid grid-cols-3 grid-rows-3 gap-10 p-10">
        <Card
          title="Entradas" 
          value={entries}
          icon="🟩"
        />
        <Card
          title="Saídas"
          value={expenses}
          icon="🟥"
        />
        <Card
          title="Saldo"
          value={balance}
        />
        <Months />
      </div>
    </>
  )
}