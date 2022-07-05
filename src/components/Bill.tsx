import React from 'react'

import { Badge } from './Badge'

export const Bill: React.FC<IBillProps> = (props) => {
  const handleStatusBadgeColor = React.useCallback((status: 'paid' | 'pending' | 'expired') => {
    switch (status) {
      case 'paid':
        return 'bg-green-400'
      case 'pending':
        return 'bg-orange-400'
      case 'expired':
        return 'bg-red-400'
      default:
        return 'bg-blue-400'
    }
  }, [props.status])

  return (
    <div className="flex justify-between w-full rounded-md bg-violet-500 hover:bg-violet-700 transition-all text-zinc-100 p-5">
      <span>{props.title}</span> 
      <div className="flex gap-4">
        <span>
          {props.value} R$
        </span>
        <Badge
          text={props.status}
          color={handleStatusBadgeColor(props.status)}
        />
      </div> 
    </div>
  )
}