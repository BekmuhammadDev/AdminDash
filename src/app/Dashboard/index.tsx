import {FC} from 'react'
import "./_style.scss"
import { Outlet } from 'react-router-dom';
import { Aside } from '../../components/aside';
import { Header } from '../../components/header';

export const Dashboard:FC = () => {
  return (
    <>
    <main>
      <Aside/>
      <section className='wrapper'>
        <Header/>
        <Outlet/>
      </section>
    </main>
      
    </>
  )
}
