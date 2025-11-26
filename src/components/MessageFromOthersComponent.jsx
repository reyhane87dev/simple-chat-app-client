import { memo } from "react"

function MessageFromOthersComponent({data : {autor,message,date}}){
    return (
        <li className=" w-[40%] mr-auto " >
            <div className=" bg-orange-500  rounded-md p-2 " >
                <small className="text-orange-950" >{autor}</small>
            <div>
            <p className="" >{message}</p>
           </div>
                <small style={{direction:'ltr'}} className="mt-2 text-orange-950 block py-2" >
                    <span className=" bg-orange-700 p-1 px-3 rounded-xl " >
                        {date}
                    </span>
                </small>
            </div>
        </li>
    )
}

export default memo(MessageFromOthersComponent)