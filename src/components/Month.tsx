import React from 'react'

import { useBills } from '../hooks/bills'

export const Month: React.FC<IMonthProps> = (props) => {
  const { setSelectedMonthId } = useBills()

  const handleSelectMonth = () => {
    setSelectedMonthId(props.id)
  }

  return (
    <div
      className="cursor-pointer w-full rounded-md  bg-violet-500 hover:bg-violet-700 transition-all text-zinc-100 p-5"
      onClick={handleSelectMonth}
    >
      <span>{props.name}</span>
    </div>
  )
}