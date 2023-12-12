import CreateForm from "../../layouts/CreateForm";
import FormInput from "../../layouts/FormInput";
import boothSchema from '../../validators/booth'

export default function BoothForm({ toggleForCreate, toggleForEdit, title, description, link, id, src, onSubmitForm }) {


    const initialValues = {
        title: title,
        description: description,
        link: link,
    }
    const textinput = [
        {
            label: 'Title',
            name: 'title',
            value: title
        },
        {
            label: 'Description',
            name: 'description',
            value: description
        },
        {
            label: 'Link',
            name: 'link',
            value: link
        },
    ]

    return (
        <CreateForm
            id={id}
            src={src}
            toggleForEdit={toggleForEdit}
            toggleForCreate={toggleForCreate}
            onSubmitForm={onSubmitForm}
            validationSchema={boothSchema}
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