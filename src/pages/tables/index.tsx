import {FC} from 'react'
import CardStat from '../../components/ui/card'
import "./_style.scss"
import TableList from '../../components/tabel'

export const Tables : FC = () => {
  return (
    <div>
      <CardStat/>
      <TableList/>
    </div>
  )
}
