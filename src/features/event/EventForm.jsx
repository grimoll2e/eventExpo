import CreateForm from '../../layouts/CreateForm'
import FormInput from '../../layouts/FormInput'

import useEvent from '../../hooks/useEvent'
import useBooth from '../../hooks/useBooth'


export default function EventForm({ toggleForEdit, zoneId, boothId, id, onSubmitForm, src }) {
    const { eventZoneById } = useEvent()
    const { booth } = useBooth()
    const notImageInput = true

    const initialValues = {
        zoneId: zoneId || '',
        boothId: boothId || ''
    }
    const selectinput = [
        {
            label: 'Zone Id',
            name: 'zoneId',
            value: eventZoneById && eventZoneById.map((el, idx) => (
                <option key={idx} value={el.id}>{el.title}</option>
            ))
        },
        {
            label: 'Booth Id',
            name: 'boothId',
            value: booth && booth.map((el, idx) => (
                <option key={idx} value={el.id}>{el.title}</option>
            ))
        },
    ]

    return (
        <CreateForm
            notImageInput={notImageInput}
            onSubmitForm={onSubmitForm}
            id={id}
            src={src}
            toggleForEdit={toggleForEdit}
            initialValues={initialValues}
        >
            {({ values, errors, touched, handleChange }) => (
                <FormInput
                    id={id}
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    selectinput={selectinput}
                    toggleForEdit={toggleForEdit}
                >
                </FormInput>
            )}
        </CreateForm>
    )
}