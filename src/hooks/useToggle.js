import { useState } from "react";

export default function useToggle (){
    const [state,setState] = useState(false);
    function toggle(){
        setState(prev=>!prev);
    };
    return {state,toggle}
}