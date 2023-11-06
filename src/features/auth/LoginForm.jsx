import { Form, Formik } from "formik"
import { toast } from "react-toastify"
import TextInput from "../../components/TextInput"
import loginSchema from "../../validators/login"
import useLoading from "../../hooks/useLoading"
import useAuth from "../../hooks/useAuth"


export default function LoginForm() {

    const { login } = useAuth()

    const { isLoading, isFinish } = useLoading()

    const initialInput = {
        userName: '',
        password: '',
    }
    return (
        <Formik
            validationSchema={loginSchema}
            initialValues={initialInput}
            onSubmit={async (values, { resetForm }) => {
                try {
                    isLoading()
                    // console.log(values);
                    await login(values)
                    resetForm()
                    toast.success(`LOGIN SUCCESS`)
                } catch (error) {
                    console.log(error)
                    toast.error(`Error : ${error.response ? error.response.data.message : error.message}`)
                }
                finally {
                    isFinish()
                }
            }}
        >
            {({ values, errors, touched, handleChange }) => (
                <Form className="d-flex flex-column gap-3">
                    <h1 className="text-center">Login</h1>
                    <TextInput label={'Username'} name={'userName'} input={values.userName} handleChange={handleChange} error={errors.userName} touch={touched.userName} />
                    <TextInput label={'Password'} name={'password'} input={values.password} handleChange={handleChange} type={'password'} error={errors.password} touch={touched.password} />
                    <button className="btn_style1 p-2 px-4" type="submit">Login</button>
                </Form>
            )}
        </Formik>
    )
}
