import CreateForm from "../../layouts/CreateForm";
import FormInput from "../../layouts/FormInput";

import veanueEventSchema from '../../validators/hall'

export default function HallForm({ toggleForCreate, toggleForEdit, id, name, detail, src, onSubmitForm }) {


    const initialValues = {
        hallName: name,
        detail: detail,
    }
    const textinput = [
        {
            label: 'Hall Name',
            name: 'hallName',
            value: name
        },
        {
            label: 'Detail',
            name: 'detail',
            value: detail
        },
    ]

    return (
        <CreateForm
            onSubmitForm={onSubmitForm}
            id={id}
            src={src}
            toggleForEdit={toggleForEdit}
            toggleForCreate={toggleForCreate}
            validationSchema={veanueEventSchema}
            initialValues={initialValues}
        >
            {({ values, errors, touched, handleChange }) => (
                <FormInput
                    id={id}
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    textinput={textinput}
                    toggleForCreate={toggleForCreate}
                    toggleForEdit={toggleForEdit}
                >
                </FormInput>
            )}
        </CreateForm>
    )
}