interface ICardProps {
  title: string
  value: number
  icon?: string
}

interface IBill {
  id: number
  title: string
  value: number
  status: 'paid' | 'pending' | 'expired'
}

interface IBillProps {
  title: string
  value: number
  status: 'paid' | 'pending' | 'expired'
}

interface IBillsProps {
  bills: IBill[]
}

interface IMonth {
  id: number
  name: string
  bills: IBill[]
}

interface IMonthProps {
  id: number
  name: string
  bills: IBill[]
}