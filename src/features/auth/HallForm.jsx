import { useState, useRef } from 'react'
import { Formik, Form } from 'formik'
import { toast } from 'react-toastify'

import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import ImageInput from '../../components/ImageInput'
import useLoading from '../../hooks/useLoading'
import veanueEventSchema from '../../validators/hall'

export default function HallForm({ handleToggleClick, name, detail, handleEdit, id, handleSubmit }) {

    const [file, setFile] = useState(null)
    const inputEl = useRef()

    const { isLoading, isFinish } = useLoading()
    const initialInput = {
        hallName: name,
        detail: detail,
    }

    const handleCreate = async (values) => {
        const formData = new FormData()
        formData.append('image', file)

        Object.entries(values).forEach(([key, value]) => {
            formData.append(key, value);
        });
        await handleSubmit(formData)
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <ImageInput
                    src={file ? URL.createObjectURL(file) : null}
                    file={file}
                    setFile={setFile}
                    inputEl={inputEl}
                    handleEdit={() => inputEl.current.click()}
                />
                <div className="col-lg-5 col-md-6">
                    <Formik
                        validationSchema={veanueEventSchema}
                        initialValues={initialInput}
                        onSubmit={async (values, { resetForm }) => {
                            try {
                                isLoading()
                                // console.log(values);
                                if (id) {
                                    await handleEdit(values, id)
                                    toast.success(`Edit SUCCESS`)
                                } else {
                                    await handleCreate(values)
                                    resetForm()
                                    setFile(null)
                                    toast.success(`Edit SUCCESS`)
                                }
                            } catch (error) {
                                toast.error(`Error : ${error.response ? error.response.data.message : error.message}`)
                            }
                            finally {
                                isFinish()
                                handleToggleClick ? handleToggleClick() : null
                            }
                        }}

                    >
                        {({ values, errors, touched, handleChange }) => (
                            <Form action="" className="d-flex flex-column gap-2">
                                <TextInput
                                    label={'Hall Name'}
                                    name={'hallName'}
                                    input={values.hallName}
                                    handleChange={handleChange}
                                    error={errors.hallName}
                                    touch={touched.hallName} />
                                <TextInput
                                    label={'Detail'}
                                    name={'detail'}
                                    as={'textarea'}
                                    input={values.detail}
                                    handleChange={handleChange}
                                    error={errors.detail}
                                    touch={touched.detail} />

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
