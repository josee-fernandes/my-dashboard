import React from 'react'

import { useBills } from '../hooks/bills'

import { Bill } from './Bill'

export const Bills: React.FC<IBillsProps> = (props) => {
  const { setSelectedMonthId } = useBills()
  
  const handleCloseClick = React.useCallback(() => {
    setSelectedMonthId(-1)
  }, [])

  return (
    <div className="absolute w-screen h-screen z-10 ">
      <div className="w-3/5 h-4/5 bg-zinc-400">
        <div className="flex justify-between">
          <h3>Bills</h3>
          <div>
            <button onClick={handleCloseClick}>
              X
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          {props.bills.map(bill => (
            <Bill
              key={bill.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}