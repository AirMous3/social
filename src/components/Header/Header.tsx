import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'

type PropsType = {
    login: string
    isAuth: boolean
    setAuthUserData: (userId: number, email: string, login: string) => void
}

function Header(props: PropsType) {
    return (
        <header className={s.header}>
            <div>I SOCIAL</div>
            <div className={s.login}>

                {props.isAuth ? props.login : <NavLink to={'/login'}> Login</NavLink> }
            </div>
        </header>
    )
}

export default Header