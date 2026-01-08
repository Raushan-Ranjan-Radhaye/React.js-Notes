import { useState } from "react";

export default function useForm(initialValues = {}, callback ){
    const [values, setValues] = useState(initialValues)

    //Handle input change
    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues(prev => ({
            ...prev,
            [name] : value
        }))
    }
    //handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if(callback) callback(values);
    }

    // reset form
    const resetForm = () => setValues(initialValues)

    return {
        values,
        handleChange,
        handleSubmit,
        resetForm
    }
 };