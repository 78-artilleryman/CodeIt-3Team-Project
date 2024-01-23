import { useState } from "react";

type ValidatorType = (value: string) => {
    isValid: boolean;
    message: string;
  };

export function useInput(initialValue: string, validator : ValidatorType) {
    const [inputValue, setInputValue] = useState(initialValue)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        setInputValue(e.target.value)
        const result = validator(e.target.value);
       
    }

    return {inputValue, handleChange};
}