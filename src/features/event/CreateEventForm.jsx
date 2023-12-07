import createEventSchema from '../../validators/eventCreate'

import useEvent from '../../hooks/useEvent'
import useVeanue from '../../hooks/useVeanue'
import CreateForm from '../../layouts/CreateForm'
import FormInput from '../../layouts/FormInput'

export default function CreateEventForm({ toggleForCreate, toggleForEdit, id, title, description, period, hallId, src }) {
    const { handleCreateEvent, handleEditEvent } = useEvent()
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
            id={id}
            src={src}
            toggleForEdit={toggleForEdit}
            toggleForCreate={toggleForCreate}
            handleEdit={handleEditEvent}
            handleSubmit={handleCreateEvent}
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