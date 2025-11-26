import { memo } from "react"

function YourMessageComponent({data : {message,date}}){
    return(
        <li className=" w-[40%] ml-auto text-slate-300" >
            <div className=" bg-slate-500  rounded-md p-2 " >
                <small className="" >شما</small>
            <div>
            <p className="" >{message}</p>
           </div>
                <small style={{direction:'rtl'}} className="mt-2 block py-2" >
                    <span className=" bg-slate-700 p-1 px-3 rounded-xl " >
                        {date}
                    </span>
                </small>
            </div>
        </li>
    )
}

export default memo(YourMessageComponent);