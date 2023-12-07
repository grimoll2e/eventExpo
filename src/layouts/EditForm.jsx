import { useState, useRef } from 'react'
import { Formik } from 'formik'
import { toast } from 'react-toastify'

import ImageInput from '../components/ImageInput'

import useLoading from '../hooks/useLoading'

export default function EditForm({ initialValues, validationSchema, handleEdit, src, children, addclassImage }) {
    const { isLoading, isFinish } = useLoading()
    const [file, setFile] = useState(null)
    const inputEl = useRef()

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className='col-lg-4 col-md-6'>
                    <ImageInput
                        addclass={addclassImage}
                        src={file ? URL.createObjectURL(file) : src}
                        setFile={setFile}
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
                                await handleEdit(values, file)
                                toast.success(`CREATE SUCCESS`)
                                //      resetForm()
                                //     setFile(null)
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
