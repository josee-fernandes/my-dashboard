import React from 'react'

import { useBills } from '../hooks/bills'

import { Month } from './Month'

export const Months: React.FC = () => {
  const { months } = useBills()

  return (
    <div className="col-span-3 row-span-2 shadow-2xl rounded-md p-10">
      <div className="flex justify-between mb-5">
        <h3>
          Meses
        </h3>
        <button className="bg-violet-500 hover:bg-violet-700 transition-all text-zinc-100 font-bold px-4 rounded-md">
          Adicionar mês +
        </button>
      </div>
      <div className="flex flex-col">
        {months?.map((month) => (
          <Month
            key={month.id}
            id={month.id}
            name={month.name}
            bills={month.bills}
          />
        ))}
      </div>

    </div>
  )
}