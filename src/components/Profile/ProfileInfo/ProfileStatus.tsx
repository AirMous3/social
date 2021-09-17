import React, { useState } from 'react'


type PropsType = {
    status: string
}

export const ProfileStatus = (props: PropsType) => {


    const [editMode, setEditMode] = useState<Boolean>(false)

    const deactivateEditMode = () => setEditMode(false)
    const activateEditmode = () => setEditMode(true)



    return (

        <div>

            {
                !editMode &&
                <div>
                    <span onDoubleClick={activateEditmode} >
                        status:{props.status}
                    </span>
                </div>
            }

            {
                editMode &&
                <div>
                    <input onBlur={deactivateEditMode} autoFocus value={props.status} />
                </div>
            }


        </div>
    )
}
