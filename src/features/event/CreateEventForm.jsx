import createEventSchema from '../../validators/eventCreate'

import useVeanue from '../../hooks/useVeanue'
import CreateForm from '../../layouts/CreateForm'
import FormInput from '../../layouts/FormInput'

export default function CreateEventForm({ toggleForCreate, toggleForEdit, id, title, description, period, hallId, src, onSubmitForm }) {

    const { allVeanue } = useVeanue()

    const initialValues = {
        title: title,
        description: description,
        period: period,
        hallId: hallId
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
            label: 'Date (DD/MM/YYY)',
            name: 'period',
            value: period
        },
    ]
    const selectinput = [
        {
            label: 'hall Id',
            name: 'hallId',
            value: allVeanue && allVeanue.map((el, idx) => (
                <option key={idx} value={el.id}>{el.hallName}</option>
            ))
        },
    ]

    return (
        <CreateForm
            onSubmitForm={onSubmitForm}
            id={id}
            src={src}
            toggleForEdit={toggleForEdit}
            toggleForCreate={toggleForCreate}
            validationSchema={createEventSchema}
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
                    selectinput={selectinput}
                    toggleForCreate={toggleForCreate}
                    toggleForEdit={toggleForEdit}
                >
                </FormInput>
            )}
        </CreateForm>
    )
}