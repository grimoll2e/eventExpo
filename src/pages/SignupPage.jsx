import { Link } from "react-router-dom";
import { Formik, Form } from 'formik'
import { toast } from 'react-toastify'
import TextInput from "../components/TextInput";
import registerSchema from '../validators/register'
import * as authApi from '../apis/auth-api'
import { useState } from "react";
import useLoading from "../hooks/useLoading";


const initialInput = {
    userName: '',
    password: '',
    confirmPassword: '',
    email: '',
}

export default function SignupPage() {
    const [axiosError, setAxiosError] = useState(null)
    const { isLoading, isFinish } = useLoading()

    return (
        <div className="bg-image w-100" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1562832135-14a35d25edef?)' }}>
            <div className="container-fluid h-100 p-0 position-relative mt-0">
                <div className="position-absolute top-50 start-50 translate-middle form p-2 px-3">
                    <Formik
                        validationSchema={registerSchema}
                        initialValues={initialInput}
                        onSubmit={async (values, { resetForm }) => {
                            try {
                                isLoading()
                                // console.log(values)
                                await authApi.signup(values)
                                resetForm()
                                toast.success(`success register`)
                            } catch (error) {
                                // console.log(error)
                                toast.error(`Error:${error.response?.data.message}`)
                                setAxiosError(error.response?.data.message)
                            } finally {
                                isFinish()
                            }
                        }}
                    >
                        {({ values, errors, touched, handleChange, handleSubmit }) => (
                            <Form className="d-flex flex-column gap-3">
                                <h1 className="text-center">Signup</h1>
                                <TextInput label={'Username'} name={'userName'} input={values.userName} handleChange={handleChange} error={errors.userName} touch={touched.userName} />
                                <TextInput label={'Password'} name={'password'} input={values.password} handleChange={handleChange} type={'password'} error={errors.password} touch={touched.password} />
                                <TextInput label={'Confirm Password'} name={'confirmPassword'} input={values.confirmPassword} handleChange={handleChange} type={'password'} error={errors.confirmPassword} touch={touched.confirmPassword} />
                                <TextInput label={'Email'} name={'email'} input={values.email} handleChange={handleChange} type={'email'} error={errors.email} touch={touched.email} />
                                {/* {axiosError && <span className="text-danger">{axiosError}</span>} */}
                                <button className="btn_style1 p-2 px-4" type="submit">Sign up</button>
                            </Form>
                        )}
                    </Formik>
                <div className="mt-3">
                    <span>
                        Already Registered ?
                        <Link to={'/login'}>Login</Link>
                    </span>
                </div>
                </div>
            </div>
        </div>
    )
}

