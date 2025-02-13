import { FC } from 'react'
import "./_style.scss"
import { NavLink } from 'react-router-dom'
import { navigation } from '../../mocks/ndex.data';

export const Aside: FC = () => {
  return (
    <aside>
      <NavLink to="/" className='logo'>
        Admin Panel</NavLink>
      
      <ul className='list'>
        {
          navigation.map((item:any) => (
            <li>
              <NavLink to={item.path} className="list-item">
              <i className={item.icon}></i>
              <span>{item.title}</span>
              </NavLink>
              </li>
          ))
        }
      </ul>
    </aside>
  )
}
