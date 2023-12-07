import { Formik, Form } from 'formik'
import { toast } from 'react-toastify'

import Button from '../../components/Button'
import SelectInput from '../../components/SelectInput'

import useEvent from '../../hooks/useEvent'
import useBooth from '../../hooks/useBooth'
import useLoading from '../../hooks/useLoading'

export default function EventForm({ zoneId, boothId, handleSubmit, handleToggleClick }) {
    const { eventZoneById } = useEvent()
    const { booth } = useBooth()
    const { isLoading, isFinish } = useLoading()

    const initialInput = {
        zoneId: zoneId,
        boothId: boothId
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <Formik
                        initialValues={initialInput}
                        onSubmit={async (values, { resetForm }) => {
                            try {
                                isLoading()
                                await handleSubmit(values)
                                toast.success(`CREATE SUCCESS`)
                                handleToggleClick()
                            } catch (error) {
                                toast.error(`Error : ${error.response ? error.response.data.message : error.message}`)
                            } finally {
                                isFinish()
                            }
                        }}
                    >
                        {({ values, errors, touched, handleChange }) => (
                            <Form action="" className="d-flex flex-column gap-2">
                                <SelectInput
                                    label={'Zone'}
                                    name={'zoneId'}
                                    onChange={handleChange}
                                    error={errors.zoneId}
                                    touch={touched.zoneId}
                                >
                                    {eventZoneById && eventZoneById.map((el, idx) => (
                                        <option key={idx} value={el.id}>{el.title}</option>
                                    ))}
                                </SelectInput>
                                <SelectInput
                                    label={'Booth'}
                                    name={'boothId'}
                                    onChange={handleChange}
                                    error={errors.boothId}
                                    touch={touched.boothId}
                                >
                                    {booth && booth.map((el, idx) => (
                                        <option key={idx} value={el.id}>{el.title}</option>
                                    ))}
                                </SelectInput>
                                <div className="d-flex justify-content-center gap-2">
                                    <Button text={'Save'} type={'submit'} />
                                    <Button text={'Cancle'} onClick={handleToggleClick} />
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}