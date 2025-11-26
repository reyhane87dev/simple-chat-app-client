import {memo, useCallback, useContext} from 'react'
import { MainContext } from '../context/MainContext'

function ChatHeader() {
  const {userData : {roomId},setUserData,setMessages} = useContext(MainContext)
  const backToHome = useCallback(()=>{
    setUserData({name : "",id : "",roomId :''});
    setMessages([]);
  },[])
  return (
        <header className="bg-slate-900 text-white p-2 px-4 flex-1/12" >
            <nav  className="flex justify-between container mx-auto items-center " >
                {/* right section start */}
                <div>
                <h2 className="text-2xl" >
                    Live <span className="text-orange-500"> Chat </span>
                </h2>
                <small className="text-gray-500  ">شناسه گفتگو : {roomId}</small>
                </div>
                {/* right section end */}
                {/* left section start  */}
                <button  className="p-2 group bg-orange-600 rounded-md hover:bg-orange-700 duration-200 text-white cursor-pointer gap-2 flex" onClick={backToHome} >
                    <span>
                    بازگشت
                    </span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 group-hover:mr-3 duration-300 "
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                    </svg>
                </button>
                {/* left section end */}
            </nav>
        </header>
  )
}

export default memo(ChatHeader)