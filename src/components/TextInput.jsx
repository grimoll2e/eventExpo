import { Field, ErrorMessage } from 'formik'

export default function TextInput({ label, name, type, as, rows, input, handleChange, error, touch }) {

    const resize = {
        resize: 'none'
    }

    return (
        <div className="d-flex flex-column my-1 gap-2">
            <div className="d-flex align-items-start">
                <label className="me-auto" htmlFor={name || ''}>{label || 'label'}</label>
                {touch && error && <ErrorMessage className="text-danger" name={name || ''} component={'span'} />}
            </div>
            {type === 'range' ?
                <div className='d-flex'>
                    <Field
                        className={`flex-grow-1 pe-5 py-1 form-range ${touch && error ? 'is-invalid' : ''}`}
                        name={name || ''}
                        min={0}
                        max={100}
                        step={0}
                        style={resize}
                        type={type}
                        placeholder={label || 'label'}
                        value={input || 0}
                        onChange={handleChange}
                    />
                    <Field
                        name={name || 0}
                        value={input}
                        type='number'
                        min={0}
                        max={100}
                        onChange={handleChange}
                    />
                </div> :
                <Field
                    className={`py-1 px-3 form-control ${touch && error ? 'is-invalid' : ''}`}
                name={name || ''}
                as={as ? as : ''}
                rows={rows ? rows : '5'}
                style={resize}
                type={type || "text"}
                placeholder={label || 'label'}
                value={input || ''}
                onChange={handleChange}
            />
            }
        </div>
    )
}
