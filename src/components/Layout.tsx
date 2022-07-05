import React from 'react'

import { Card } from './Card'
import { Months } from './Months'

export const Layout: React.FC = () => {
  const [entries, setEntries] = React.useState(0)
  const [expenses, setExpenses] = React.useState(0)
  const [balance, setBalance] = React.useState(0)

  return (
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
  )
}