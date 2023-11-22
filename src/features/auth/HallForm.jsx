import { useState, useRef } from 'react'
import { Formik, Form } from 'formik'
import { toast } from 'react-toastify'

import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import ImageInput from '../../components/ImageInput'
import useLoading from '../../hooks/useLoading'
import veanueEventSchema from '../../validators/hall'

export default function HallForm({ handleSubmit, handleToggleClick, handleEdit, name, detail, src, hallid }) {
    const [file, setFile] = useState(null)
    const inputEl = useRef()

    const { isLoading, isFinish } = useLoading()
    const initialInput = {
        hallName: name || '',
        detail: detail || '',
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className='col-lg-4 col-md-6'>
                <ImageInput
                    src={file ? URL.createObjectURL(file) : src}
                    file={file}
                    setFile={setFile}
                    inputEl={inputEl}
                    handleEdit={() => inputEl.current.click()}
                />
                </div>
                <div className="col-lg-5 col-md-6">
                    <Formik
                        enableReinitialize={true}
                        validationSchema={veanueEventSchema}
                        initialValues={initialInput}
                        onSubmit={async (values, { resetForm }) => {
                            try {
                                isLoading()
                                // console.log(values);
                                if (hallid) {
                                    // console.log('edit')
                                    await handleEdit(values, hallid, file)
                                    toast.success(`Edit SUCCESS`)
                                } else {
                                    // console.log('create')
                                    await handleSubmit(values, file)
                                    toast.success(`CREATE SUCCESS`)
                                    resetForm()
                                    setFile(null)
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
