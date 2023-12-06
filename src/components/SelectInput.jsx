import { ErrorMessage, Field } from 'formik'
import React from 'react'

export default function SelectInput({ name, label, onChange, touch, error, children }) {
    return (
        <>
            <div className="d-flex align-items-start">
                <label className="me-auto" htmlFor={name || ''}>{label || 'label'}</label>
                {touch && error && <ErrorMessage className="text-danger" name={name || ''} component={'span'} />}
            </div>
            <Field as="select" name={name} className={`py-1 px-3 form-select`} onChange={onChange}>
                <option key={0} value={0}>Open this select {label}</option>
                {children}
            </Field>
        </>
    )
}
