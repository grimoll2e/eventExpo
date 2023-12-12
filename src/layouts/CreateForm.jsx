import { useState, useRef } from 'react'
import { Formik } from 'formik'
import { toast } from 'react-toastify'

import ImageInput from '../components/ImageInput'

import useLoading from '../hooks/useLoading'

export default function CreateForm({ initialValues, validationSchema, imageInput, smallSrc, src, children, id, toggleForEdit, toggleForCreate, addclassImage, onSubmitForm, notImageInput }) {

    const { isLoading, isFinish } = useLoading()
    const [image, setImage] = useState(null)
    const [bigImage, setBigImage] = useState(null)


    const refs = {
        inputEl: useRef(),
        inputEl2: useRef(),
    };

    const { inputEl, inputEl2 } = refs

    return (
        <div className="container">
            <div className="row justify-content-center">
                {imageInput ? <div className="col-lg-4 col-md-6 d-flex gap-3 justify-content-center">
                    <ImageInput
                        size={150}
                        src={bigImage ? URL.createObjectURL(bigImage) : src}
                        setFile={setBigImage}
                        inputEl={inputEl}
                        onClick={() => inputEl.current.click()}
                        text={'Big Image'}
                    />
                    <ImageInput
                        size={150}
                        src={image ? URL.createObjectURL(image) : smallSrc}
                        setFile={setImage}
                        inputEl={inputEl2}
                        onClick={() => inputEl2.current.click()}
                        text={'Image'}
                    />
                </div> : notImageInput ? <></> :
                <div className='col-lg-4 col-md-6'>
                    <ImageInput
                        src={image ? URL.createObjectURL(image) : src}
                        setFile={setImage}
                        addclass={addclassImage}
                        inputEl={inputEl}
                        onClick={() => inputEl.current.click()}
                    />
                    </div>}
                <div className="col-lg-6 col-md-6">
                    <Formik
                        validationSchema={validationSchema}
                        initialValues={initialValues}
                        onSubmit={async (values, { resetForm }) => {
                            try {
                                isLoading()
                                await onSubmitForm(values, image, id, bigImage)
                                toast.success(`SUCCESS`)
                                if (toggleForEdit) {
                                    toggleForEdit()
                                } else {
                                    resetForm()
                                    setImage(null)
                                    setBigImage(null)
                                    toggleForCreate()
                                }
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