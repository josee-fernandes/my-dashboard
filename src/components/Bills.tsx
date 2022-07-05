import React from 'react'

import { useBills } from '../hooks/bills'

import { Bill } from './Bill'

export const Bills: React.FC<IBillsProps> = (props) => {
  const { setSelectedMonthId } = useBills()
  
  const handleCloseClick = React.useCallback(() => {
    setSelectedMonthId(-1)
  }, [])

  return (
    <div className="absolute w-screen h-screen z-10 animate-fade-in bg-black/50 backdrop-blur flex justify-center items-center">
      <div className="w-3/5 h-4/5 bg-zinc-100 animate-fade-in-transform rounded-md p-10">
        <div className="flex justify-between mb-5">
          <h3>Bills</h3>
          <div>
            <button onClick={handleCloseClick}>
              X
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {props.bills.map(bill => (
            <Bill
              key={bill.id}
              title={bill.title}
              value={bill.value}
              status={bill.status}
            />
          ))}
        </div>
      </div>
    </div>
  )
}