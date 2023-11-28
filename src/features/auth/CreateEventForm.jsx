import { useState, useRef } from 'react'
import { Formik, Form, Field } from 'formik'
import { toast } from 'react-toastify'

import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import ImageInput from '../../components/ImageInput'

import createEventSchema from '../../validators/eventCreate'
import useLoading from '../../hooks/useLoading'
import useEvent from '../../hooks/useEvent'
import useVeanue from '../../hooks/useVeanue'

export default function CreateEventForm({ name, detail, id, src, hallId, period, handleToggleClick, setToggle }) {
    const { handleCreateEvent, handleEditEvent } = useEvent()
    const { allVeanue } = useVeanue()
    const { isLoading, isFinish } = useLoading()

    const [image, setImage] = useState(null)
    const inputEl = useRef()


    const initialInput = {
        title: name,
        description: detail,
        period: period,
        hallId: hallId,
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className='col-lg-4 col-md-6'>
                    <ImageInput
                        src={image ? URL.createObjectURL(image) : src}
                        setFile={setImage}
                        inputEl={inputEl}
                        onClick={() => inputEl.current.click()}
                    />
                </div>
                <div className="col-lg-6 col-md-6">
                    <Formik
                        validationSchema={createEventSchema}
                        initialValues={initialInput}
                        onSubmit={async (values, { resetForm }) => {
                            try {
                                isLoading()
                                if (id) {
                                    await handleEditEvent(values, id, image)
                                    toast.success(`EDIT SUCCESS`)
                                } else {
                                    await handleCreateEvent(values, image)
                                    toast.success(`CREATE SUCCESS`)
                                    resetForm()
                                    setImage(null)
                                    setToggle(false)
                                }
                            } catch (error) {
                                toast.error(`Error : ${error.response ? error.response.data.message : error.message}`)
                            } finally {
                                isFinish()
                                handleToggleClick ? handleToggleClick() : null
                            }
                        }}
                    >
                        {({ values, errors, touched, handleChange }) => (
                            <Form action="" className="d-flex flex-column gap-2">
                                <TextInput
                                    label={'Event Title'}
                                    name={'title'}
                                    input={values.title}
                                    handleChange={handleChange}
                                    error={errors.title}
                                    touch={touched.title} />
                                <TextInput
                                    label={'description'}
                                    name={'description'}
                                    as={'textarea'}
                                    input={values.description}
                                    handleChange={handleChange}
                                    error={errors.description}
                                    touch={touched.description} />
                                <TextInput
                                    label={'Date (DD/MM/YYY)'}
                                    name={'period'}
                                    input={values.period}
                                    handleChange={handleChange}
                                    error={errors.period}
                                    touch={touched.period} />
                                {/* <TextInput
                                    label={'Hall'}
                                    name={'hallId'}
                                    input={values.hallId}
                                    handleChange={handleChange}
                                    error={errors.hallId}
                                    touch={touched.hallId} /> */}
                                <Field as="select" name="hallId" placeholder='aaaaaaaaaaa'>
                                    <option key={0} value={0}>pls choose</option>
                                    {allVeanue && allVeanue.map((el, idx) => (
                                        <option key={el.id} value={el.id}>{el.hallName}</option>
                                    ))}
                                </Field>
                                <div className="d-flex justify-content-center gap-2">
                                    <Button text={'Save'} type={'submit'} />
                                    <Button text={'Cancle'} onClick={() => {
                                        if (id) {
                                            handleToggleClick()
                                        } else {
                                            setToggle(false)
                                        }
                                    }} />
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}