import { useState, useRef } from 'react'
import { Formik, Form } from 'formik'
import { object, string } from 'yup'
import { toast } from 'react-toastify'

import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import ImageInput from '../../components/ImageInput'
import useLoading from '../../hooks/useLoading'
import useEvent from '../../hooks/useEvent'
import eventDetailSchema from '../../validators/eventDetail'


export default function EventPageForm({ EventId, id, title, detail, name, bigSrc, src, handleToggleClick, setToggle }) {

    const { handleCreateEventDetail, handleEditEventDetail } = useEvent()
    const [bigImage, setBigImage] = useState(null)
    const [image, setImage] = useState(null)

    const refs = {
        inputEl: useRef(),
        inputEl2: useRef(),
    };

    const { inputEl, inputEl2 } = refs

    const { isLoading, isFinish } = useLoading()

    const initialInput = {
        title: title || '',
        detail: detail || '',
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className='col-12'>
                    <h1 className='header_text mb-2'>{name}</h1>
                </div>
                <div className="col-lg-4 col-md-6 d-flex gap-3 justify-content-center">
                    <ImageInput
                        size={150}
                        src={bigImage ? URL.createObjectURL(bigImage) : bigSrc}
                        setFile={setBigImage}
                        inputEl={inputEl}
                        onClick={() => inputEl.current.click()}
                        text={'Big Image'}
                    />
                    <ImageInput
                        size={150}
                        src={image ? URL.createObjectURL(image) : src}
                        setFile={setImage}
                        inputEl={inputEl2}
                        onClick={() => inputEl2.current.click()}
                        text={'Image'}
                    />
                </div>
                <div className="col-lg-6 col-md-6">
                    <Formik
                        validationSchema={eventDetailSchema}
                        initialValues={initialInput}
                        onSubmit={async (values, { resetForm }) => {
                            try {
                                isLoading()
                                // console.log(values)
                                if (id) {
                                    await handleEditEventDetail(values, bigImage, image, id)
                                    toast.success(`Edit SUCCESS`)
                                    handleToggleClick(false)
                                } else {
                                    const updateValues = { ...values, eventId: EventId }
                                    await handleCreateEventDetail(updateValues, bigImage, image, EventId)
                                    toast.success(`CREATE SUCCESS`)
                                    setToggle(false)
                                }
                                resetForm()
                                setBigImage(null)
                                setImage(null)
                            } catch (error) {
                                toast.error(`Error : ${error.response ? error.response.data.message : error.message}`)
                            } finally {
                                isFinish()
                            }
                        }}
                    >
                        {({ values, errors, touched, handleChange }) => (
                            <Form action="" className="d-flex flex-column gap-2">
                                <TextInput
                                    label={'Title'}
                                    name={'title'}
                                    input={values.title}
                                    handleChange={handleChange}
                                    error={errors.title}
                                    touch={touched.title} />
                                <TextInput
                                    label={'Detail'}
                                    name={'detail'}
                                    as={'textarea'}
                                    // rows={5}
                                    input={values.detail}
                                    handleChange={handleChange}
                                    error={errors.detail}
                                    touch={touched.detail} />

                                <div className="d-flex justify-content-center gap-2">
                                    <Button text={'Save'} type={'submit'} />
                                    <Button text={'Cancle'} onClick={() => {
                                        if (id) {
                                            handleToggleClick(false)
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