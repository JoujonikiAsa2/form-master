import { useState } from "react"

const useInputState = (defaultvalue=null) => {
    const [inputValue, setInputValue] = useState(defaultvalue);

    // const handleOnchange = val => {
    //     setInputValue(val.target.value);
    // }
    const onChange = e => {
        setInputValue(e.target.value);
    }
    // return [inputValue, handleOnchange]
    return {inputValue, onChange}

}

export default useInputState