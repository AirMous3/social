import s from './ErrorPage.module.css'
import SuperButton from "../common/SuperButton/SuperButton";
import { NavLink } from 'react-router-dom';

export const Error = () => {
    return (<div className={s.wrapper}>
        <h1>
            Woops, page not found 404
        </h1>
        <SuperButton>

            <NavLink style={{textDecoration: 'none'}} to={'/profile'}>
                return
            </NavLink>
        </SuperButton>

    </div>)
}