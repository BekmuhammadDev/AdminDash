import {FC} from 'react'
import Input from "../input"
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import "./_style.scss"
import { Link } from 'react-router-dom';

export const Header : FC = () => {
  return (
    <header>
      <nav className='nav'>
      <Input/>
      <Link to='/'><Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /></Link>
      </nav>
    </header>
  )
}
