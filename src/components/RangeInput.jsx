import React from 'react'

export default function RangeInput({ label, name, value, handleChange, error, touch }) {
    return (
        <div className="d-flex flex-column my-1 gap-2">
            <div className="d-flex align-items-start">
                <label className="me-auto" htmlFor={name || ''}>{label || 'label'}</label>
                {touch && error && <ErrorMessage className="text-danger" name={name || ''} component={'span'} />}
            </div>
            <div className='d-flex'>
                <Field
                    className={`flex-grow-1 pe-5 py-1 form-range ${touch && error ? 'is-invalid' : ''}`}
                    name={name || ''}
                    min={0}
                    max={100}
                    step={0}
                    style={resize}
                    type='range'
                    placeholder={label || 'label'}
                    value={value || 0}
                    onChange={handleChange}
                />
                <Field
                    name={name || 0}
                    value={value}
                    type='number'
                    min={0}
                    max={100}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}
