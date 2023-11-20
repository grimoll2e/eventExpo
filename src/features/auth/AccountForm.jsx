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
    const [toggle, setToggle] = useState(false)
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

            // console.log(file)
            // console.log(...formData)
            await updateUserImage(formData)
            setFile(null)
            toast.success('update success')
        } catch {
            toast.error('update fail')
        } finally {
            isFinish()
        }
    }
    const handleCancle = () => {
        setFile(null)
        inputEl.current.value = null
    }

    return (
        <div className="container">
            <div className="row justify-content-center rounded-circle">
                <ImageInput
                    src={file ? URL.createObjectURL(file) : authenticatedUser.userImage}
                    addclass={'rounded-circle'}
                    handleEdit={() => inputEl.current.click()}
                    handleSave={handleSave}
                    handleCancle={handleCancle}
                    file={file}
                    setFile={setFile}
                    inputEl={inputEl}
                />

                <div className="col-lg-5 col-md-6">
                    {toggle || <>
                        <div className='bg-body-secondary p-2 m-2 rounded-1'>
                            <p className='m-0'>userName: {initialInput.userName}</p>
                        </div>
                        <div className='bg-body-secondary p-2 m-2 rounded-1'>
                            <p className='m-0'>description: {initialInput.description}</p>
                        </div>
                        <div className='bg-body-secondary p-2 m-2 rounded-1'>
                            <p className='m-0'>link: {initialInput.link}</p>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Button text={'Edit'} onClick={() => setToggle(true)} />
                        </div>
                    </>}
                    {toggle && <Formik
                        enableReinitialize={true}
                        validationSchema={accountSchema}
                        initialValues={initialInput}
                        initialTouched={{ userName: false }}
                        onSubmit={(values, { resetForm }) => {
                            console.log(values)
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
                                    <Button text={'Cancle'} onClick={() => setToggle(false)} />
                                </div>
                            </Form>
                        )}
                    </Formik>}
                </div>
            </div>
        </div>
    )
}
