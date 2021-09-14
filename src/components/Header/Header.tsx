import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

type PropsType = {
    login: string
    isAuth: boolean
    authThunk: () => void
}

function Header({ login, isAuth }: PropsType) {
    return (
        <header className={s.header}>
            <div>I SOCIAL</div>
            <div className={s.login}>

                {isAuth ? login : <NavLink to={'/login'}> Login</NavLink>}
            </div>
        </header>
    )
}

export default Header