import { memo } from "react"

function ButtonComponent({action,text}){
    return(
        <button onClick={action} className="dark-button" >
            {text}
        </button>
    )
}

export default memo(ButtonComponent)