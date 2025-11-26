import { memo, useState } from "react";


function JoinChatInputComponent({placeholder,description,ref,error}){
  const [showDescription,setShowDescription] = useState(false);
  return (
    <div>
      <div className="relative" >
         {/* input start */}
         <input ref={ref} type="text" placeholder={placeholder} className="input" />
         {/* input end */}
         {/* description start */}
         {/* description end */}
          {
            description && (
              <div>
                {/* the text start */}
                   <div  className={showDescription ? "block" : "hidden"}>
                    <div className="absolute bg-slate-900 p-2 rounded-md border-2 text-slate-400 border-gray-700 top-[-5rem]" >
                      {description}
                    </div>
                  </div>
                {/* the text end */}
                {/* the button start */}
              <div
                  onMouseOver={()=>setShowDescription(true)}
                  onMouseLeave={()=>setShowDescription(false)}
                  className="cursor-pointer text-gray-500 absolute top-[.4rem] left-[.5rem] border-2 border-transparent hover:border-gray-700 duration-200 bg-slate-900 p-0.5 rounded-md "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
                </svg>
              </div>
              {/* the button end */}
              </div>
            )
          }
         {/* error start */}
         {
          error && <p className="block text-right text-slate-500">{error}</p>
         }
         {/* error end */}
      </div>
    </div>
  )
}

export default memo(JoinChatInputComponent)