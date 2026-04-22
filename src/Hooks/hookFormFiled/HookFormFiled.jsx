import { useState } from "react"

const useFormFiled = (defaultValue)=>{
    const [filedValue,setFiledValue]=useState(defaultValue)


    const handleFiledOnCange = (e)=>{
        setFiledValue(e.target.value)
    }
    return [filedValue,handleFiledOnCange];
}
export default useFormFiled