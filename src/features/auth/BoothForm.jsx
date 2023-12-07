import { useState, useRef } from 'react'
import { Formik, Form } from 'formik'
import { toast } from 'react-toastify'

import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import ImageInput from '../../components/ImageInput'
import boothSchema from '../../validators/booth'

import useLoading from '../../hooks/useLoading'



export default function BoothForm({ handleToggleClick, name, detail, src, link, id, setToggle, handleSubmit, handleEdit }) {
    const [file, setFile] = useState(null)
    const inputEl = useRef()
    const { isLoading, isFinish } = useLoading()



    const initialInput = {
        title: name || '',
        description: detail || '',
        link: link || '',
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                    <ImageInput
                        src={file ? URL.createObjectURL(file) : src}
                        file={file}
                        setFile={setFile}
                        inputEl={inputEl}
                        onClick={() => inputEl.current.click()}
                    />
                </div>
                <div className="col-lg-5 col-md-6">
                    <Formik
                        validationSchema={boothSchema}
                        initialValues={initialInput}
                        onSubmit={async (values, { resetForm }) => {
                            try {
                                isLoading()

                                if (id) {
                                    await handleEdit(values, id, file)
                                    toast.success(`EDIT SUCCESS`)
                                    setFile(null)
                                    handleToggleClick()
                                } else {
                                    console.log(values)
                                    await await handleSubmit(values, file)
                                    toast.success(`CREATE SUCCESS`)
                                    resetForm()
                                    setFile(null)
                                    setToggle(false)
                                }
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
                                    label={'Booth Title'}
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
                                    label={'Link'}
                                    name={'link'}
                                    input={values.link}
                                    handleChange={handleChange}
                                    error={errors.link}
                                    touch={touched.link} />
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
