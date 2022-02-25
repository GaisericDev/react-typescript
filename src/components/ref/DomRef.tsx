import { useEffect, useRef } from "react"
const inputRef = useRef<HTMLInputElement>(null!);

useEffect(()=>{
    inputRef.current.focus();
}, []);
export const DomRef = () => {
    return (
        <input type="text" ref={inputRef} />
    )
}