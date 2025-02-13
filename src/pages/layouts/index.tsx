import {FC} from 'react'
import "./_style.scss"
import CardCount from '../../components/countcard'
import TableList from '../../components/tabel'

export const Layouts : FC = () => {
  return (
    <div>
      <CardCount/>
      <TableList/>
    </div>
  )
}
