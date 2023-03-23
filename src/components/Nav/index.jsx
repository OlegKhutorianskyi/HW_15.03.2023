import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './style.module.css'

const Nav = () => {
    const chekClass = ({isActive}) => isActive ? s.active: '';
    const links = [
        {id:1, label: 'Все посты', to:'/'},
        {id:2, label: 'Добавить пост', to:'/add_posts'}
    ]
  return (
    <nav className={s.nav}>
        {
            links.map(({id, label, to}) => 
                <NavLink className={chekClass} key={id} to={to}>
                    {label}
                </NavLink>
            )
        }
    </nav>
  )
}

export default Nav