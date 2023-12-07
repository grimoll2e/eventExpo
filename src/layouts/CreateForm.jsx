import { useState, useRef } from 'react'
import { Formik, Form } from 'formik'
import { toast } from 'react-toastify'

import ImageInput from '../components/ImageInput'

import useLoading from '../hooks/useLoading'
import Button from '../components/Button'

export default function CreateForm({ initialValues, validationSchema, handleSubmit, handleCancle, src, children }) {

    const { isLoading, isFinish } = useLoading()
    const [image, setImage] = useState(null)
    const inputEl = useRef()

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
                        validationSchema={validationSchema}
                        initialValues={initialValues}
                        onSubmit={async (values, { resetForm }) => {
                            try {
                                console.log(values)
                                isLoading()
                                //     await handleSubmit(values)
                                //     toast.success(`CREATE SUCCESS`)
                                resetForm()
                                //     setImage(null)
                            } catch (error) {
                                toast.error(`Error : ${error.response ? error.response.data.message : error.message}`)
                            } finally {
                                isFinish()
                            }
                        }}
                    >
                        {children}
                    </Formik>
                </div>
            </div>
        </div>
    )
}