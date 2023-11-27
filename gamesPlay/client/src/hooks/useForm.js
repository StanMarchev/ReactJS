import { useState } from "react"

export  default function useForm(initialValues) {
    const[values, setValues] = useState(initialValues);
    const onChange = (e) => {
        setValues(state =>({
            ...state,
            [e.target.name]: e.target.values
        }));
    };


    return {
        values, 
        onChange,
    };
}