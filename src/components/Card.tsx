import React from 'react'

export const Card: React.FC<ICard> = (props) => {
  return (
    <div className="flex flex-col justify-between shadow-2xl rounded-md p-10">
      <div className="flex justify-between items-center">
        <h3>
          {props.title}
        </h3>
        <span className="text-2xl">
          {props.icon}
        </span>
      </div>
      <span className="font-bold text-4xl">
        {props.value} R$
      </span>
    </div>
  )
}