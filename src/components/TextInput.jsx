import React from 'react'
import { Field, ErrorMessage } from 'formik'

export default function TextInput({ label, error, name, handleChange, input, type, touch }) {
    return (
        <div className="d-flex flex-column my-1 gap-2">
            <div className="d-flex align-items-start">
                <label className="me-auto" htmlFor={name}>{label}</label>
                {touch && error && <ErrorMessage className="text-danger" name={name} component={'span'} />}
            </div>
            <Field className={`py-1 px-3 form-control ${touch && error ? 'is-invalid' : ''} `} type={type || "text"} name={name} placeholder={label} value={input} onChange={handleChange} />

        </div>
    )
}
