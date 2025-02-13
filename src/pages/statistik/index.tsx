import { FC } from 'react'
import "./_style.scss"
import MyLineChart from '../../components/charts'
import MyBarChart from '../../components/barcharts'
import CardCount from '../../components/countcard'

export const Stats: FC = () => {
  return (
    <div className='stats'>
      <CardCount/>
      <div className='charts'>
        <MyLineChart />
        <MyBarChart />
      </div>
    </div>
  )
}
