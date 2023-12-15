import eventDetailSchema from '../../validators/eventDetail'
import CreateForm from '../../layouts/CreateForm'
import FormInput from '../../layouts/FormInput'


export default function EventPageForm({ toggleForCreate, toggleForEdit, id, title, detail, smallSrc, src, onSubmitForm }) {

    const imageInput = true

    const initialValues = {
        title: title || '',
        detail: detail || '',
    }
    const textinput = [
        {
            label: 'Title',
            name: 'title',
            value: title
        },
        {
            label: 'Detail',
            name: 'detail',
            value: detail
        },
    ]

    return (
        <CreateForm
            imageInput={imageInput}
            onSubmitForm={onSubmitForm}
            id={id}
            src={src}
            smallSrc={smallSrc}
            toggleForEdit={toggleForEdit}
            toggleForCreate={toggleForCreate}
            validationSchema={eventDetailSchema}
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
                    // selectinput={selectinput}
                    toggleForCreate={toggleForCreate}
                    toggleForEdit={toggleForEdit}
                >
                </FormInput>
            )}
        </CreateForm>
    )
}