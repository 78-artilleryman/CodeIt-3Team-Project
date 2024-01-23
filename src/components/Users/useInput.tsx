import { useState } from "react";

export function useInput(initialValue: string, validator :any) {
    const [inputValue, setInputValue] = useState(initialValue)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        setInputValue(e.target.value)
        const result = validator(e.target.value);
       
    }

    return {inputValue, handleChange};
}