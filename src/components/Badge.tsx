import React from 'react'

export const Badge: React.FC<IBadge> = (props) => {
  return (
    <div className={`px-1 py-[2px] ${props.color ?? 'bg-blue-400'} text-white rounded`}>
      {props.text}
    </div>
  )
}