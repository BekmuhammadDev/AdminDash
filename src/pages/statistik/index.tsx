import { FC } from 'react'
import "./_style.scss"
import MyLineChart from '../../components/charts'
import MyBarChart from '../../components/barcharts'
import CardStat from '../../components/ui/card'

export const Stats: FC = () => {
  return (
    <div className='stats'>
      <h1>Dashboard</h1>
      <div className='dashboard'><h2>Dashboard</h2></div>
      <CardStat/>
      <div className='charts'>
        <MyLineChart />
        <MyBarChart />
      </div>
    </div>
  )
}
