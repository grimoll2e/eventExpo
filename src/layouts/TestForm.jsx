import { Form } from 'formik'
import React from 'react'
import TextInput from '../components/TextInput'
import SelectInput from '../components/SelectInput'
import Button from '../components/Button'

export default function TestForm({ values, errors, touched, handleChange, handleCancle, textinput, selectinput }) {
    return (
        <Form action="" className="d-flex flex-column gap-2">
            {textinput ? textinput.map((el) => (
                < TextInput
                    key={el.label}
                    label={el.label}
                    name={el.name}
                    handleChange={handleChange}
                    input={values[el.name]}
                    error={errors[el.name]}
                    touch={touched[el.name]}
                />
            )
            ) : null}

            {selectinput ? selectinput.map((el) => (
                <SelectInput
                    key={el.label}
                    label={el.label}
                    name={el.name}
                    onChange={handleChange}
                    error={errors[el.name]}
                    touch={touched[el.name]}
                >
                    {el.value}
                </SelectInput>
            )) : null}
            <div className="d-flex justify-content-center gap-2">
                <Button text={'Save'} type={'submit'} />
                <Button text={'Cancle'} onClick={handleCancle} />
            </div>
        </Form>
    )
}
