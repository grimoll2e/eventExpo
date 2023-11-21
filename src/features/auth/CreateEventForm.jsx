import { useState, useRef } from 'react'
import { Formik, Form } from 'formik'
import { object, string } from 'yup'

import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import useLoading from '../../hooks/useLoading'
import ImageInput from '../../components/ImageInput'
import { toast } from 'react-toastify'


const createEventSchema = object().shape({
    title: string().trim().required('required'),
    description: string().trim(),
    period: string().trim().required('required'),
    hallId: string().trim().required('required'),
});

export default function CreateEventForm({ name, detail, id, src, hallId, period, handleToggleClick, handleSubmit, handleEdit }) {
    const [file, setFile] = useState(null)
    const inputEl = useRef()

    const { isLoading, isFinish } = useLoading()

    const initialInput = {
        title: name,
        description: detail,
        period: period,
        hallId: hallId,
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <ImageInput
                    src={file ? URL.createObjectURL(file) : src}
                    file={file}
                    setFile={setFile}
                    inputEl={inputEl}
                    handleEdit={() => inputEl.current.click()}
                />
                <div className="col-lg-5 col-md-6">
                    <Formik
                        validationSchema={createEventSchema}
                        initialValues={initialInput}
                        onSubmit={async (values, { resetForm }) => {
                            try {
                                isLoading()
                                if (id) {
                                    await handleEdit(values, id, file)
                                    toast.success(`EDIT SUCCESS`)
                                } else {
                                    await handleSubmit(values, file)
                                    toast.success(`CREATE SUCCESS`)
                                    resetForm()
                                    setFile(null)
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
                                <TextInput
                                    label={'Hall'}
                                    name={'hallId'}
                                    input={values.hallId}
                                    handleChange={handleChange}
                                    error={errors.hallId}
                                    touch={touched.hallId} />
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