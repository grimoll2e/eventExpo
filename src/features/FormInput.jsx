import { Form } from "formik";
import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";
import Button from "../components/Button";


export default function FormInput({ values, errors, touched, handleChange, handleCancle, textinput, selectinput }) {
    return (
        <Form action="" className="">
            {textinput ? textinput.map((el) => (
                < TextInput
                    key={el.label}
                    label={el.label}
                    name={el.name}
                    handleChange={handleChange}
                    input={values[el.name] || el.value}
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
            <div className="d-flex justify-content-center gap-2 mt-4">
                <Button text={'Save'} type={'submit'} />
                <Button text={'Cancle'} onClick={handleCancle} />
            </div>
        </Form>
    )
}