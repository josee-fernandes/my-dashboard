import React from 'react'

import { useBills } from '../hooks/bills'

import { Month } from './Month'

export const Months: React.FC = () => {
  const { months } = useBills()

  return (
    <div className="col-span-3 row-span-2 shadow-2xl rounded-md p-10">
      <h3 className="mb-5">
        Meses
      </h3>
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