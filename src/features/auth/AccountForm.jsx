import { useRef, useState } from 'react'
import { Formik, Form } from 'formik'
import { object, string } from 'yup'

import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import ImageInput from '../../components/ImageInput'
import useAuth from '../../hooks/useAuth'

import useLoading from '../../hooks/useLoading'
import { toast } from 'react-toastify'


const accountSchema = object().shape({
    userName: string().trim().required('กรุณากรอกชื่อผู้ใช้'),
    descrition: string().trim(),
    link: string().trim(),
});

export default function AccountForm() {
    const { authenticatedUser, updateUserImage } = useAuth()
    const [file, setFile] = useState(null)
    // const [toggle, setToggle] = useState(false)
    const { isLoading, isFinish } = useLoading()

    const initialInput = {
        userName: authenticatedUser.userName || '',
        description: authenticatedUser.description || '',
        link: authenticatedUser.link || '',
    }
    const inputEl = useRef()

    const handleSave = async () => {
        try {
            isLoading()
            const formData = new FormData()
            formData.append('userimage', file)
            await updateUserImage(formData)
            setFile(null)
            toast.success('update success')
        } catch {
            toast.error('update fail')
        } finally {
            isFinish()
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center rounded-circle">
                <div className="d-flex flex-column gap-3 col-lg-5 col-md-6 align-items-center ">
                    <ImageInput src={file ? URL.createObjectURL(file) : authenticatedUser.userImage} addclass={'rounded-circle'} onClick={() => inputEl.current.click()} />
                    <input type="file" className='d-none' ref={inputEl} onChange={e => {
                        if (e.target.files[0]) {
                            setFile(e.target.files[0])
                        }
                    }} />
                    <div className="d-flex gap-2">
                        {file && <Button text={'Save'} onClick={handleSave} />}
                        {file && <Button text={'Cancle'} onClick={() => {
                            setFile(null)
                            inputEl.current.value = null
                        }} />}
                        <Button text={'Edit'} onClick={() => {
                            inputEl.current.click()
                        }
                        } />
                    </div>
                </div>
                <div className="col-lg-5 col-md-6">
                    <Formik
                        enableReinitialize={true}
                        validationSchema={accountSchema}
                        initialValues={initialInput}
                        initialTouched={{ userName: false }}
                        onSubmit={(values, { resetForm }) => {
                            console.log(values)
                            // console.log(values.userName)
                            // resetForm()
                        }}
                    >
                        {({ values, errors, touched, handleBlur, handleChange }) => (
                            <Form action="" className="d-flex flex-column gap-2">
                                <TextInput
                                    label={'Username'}
                                    name={'userName'}
                                    input={values.userName}
                                    handleChange={handleChange}
                                    error={errors.userName}
                                    touch={touched.userName}
                                    onBlur={handleBlur}
                                />

                                <TextInput
                                    label={'Description'}
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
                                    <Button text={'Cancle'} />
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}
