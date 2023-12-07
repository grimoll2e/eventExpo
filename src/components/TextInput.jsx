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
            <Field
                className={`py-1 px-3 form-control ${touch && error ? 'is-invalid' : ''}`}
                name={name || ''}
                // as={as ? as : ''}
                rows={rows ? rows : '5'}
                style={resize}
                type={type || "text"}
                placeholder={label || 'label'}
                value={input || ''}
                onChange={handleChange}
            />
        </div>
    )
}
