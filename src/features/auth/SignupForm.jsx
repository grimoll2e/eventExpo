import { toast } from "react-toastify"
import { Form, Formik } from "formik"

import * as authApi from '../../apis/auth-api'
import registerSchema from "../../validators/register"
import TextInput from "../../components/TextInput"
import useLoading from "../../hooks/useLoading"
import { useNavigate } from "react-router-dom"

export default function SignupForm() {
    const { isLoading, isFinish } = useLoading()
    const navigate = useNavigate();

    const initialInput = {
        userName: '',
        password: '',
        confirmPassword: '',
        email: '',
    }

    return (
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
                    navigate('/login')
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
    )
}
