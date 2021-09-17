import React, { useState } from 'react'


type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus = (props: PropsType) => {


    const [editMode, setEditMode] = useState<Boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    const activateEditmode = () => setEditMode(true)
    const deactivateEditMode = (status: string) => {
        props.updateStatus(status)
        setEditMode(false)
    }


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
                    <input onBlur={() => deactivateEditMode(status)} onChange={(e) => setStatus(e.currentTarget.value)} autoFocus value={status} />
                </div>
            }


        </div>
    )
}
