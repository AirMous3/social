import React from "react";
import s from "./ProfileInfo.module.css"


function ProfileInfo() {
    return <div className={s.container}>

        <img className={s.image} src={'https://i.pinimg.com/474x/01/c8/53/01c853a45c2397fc8dc44a6876f9c39e.jpg'}/>
        <div className={s.text}>
            <div>about me: </div>
            <div>country: </div>
            <div>what i love: </div>
        </div>


    </div>

}


export default ProfileInfo