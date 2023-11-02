import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Form } from 'formik'
import { object, string } from 'yup'

import useLoading from "../hooks/useLoading";
import useAuth from '../hooks/useAuth'
import TextInput from "../components/TextInput";

const initialInput = {
    userName: '',
    password: '',
}

const loginSchema = object().shape({
    userName: string().trim().required('กรุณากรอกชื่อผู้ใช้'),
    password: string().trim().required('กรุณากรอกรหัสผ่าน'),
});

export default function LoginPage() {

    const { isLoading, isFinish } = useLoading()

    const { login } = useAuth()

    return (
        <div className="bg-image w-100" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1562832135-14a35d25edef?)' }}>
            <div className="container-fluid h-100 p-0 position-relative mt-0">
                <div className="position-absolute top-50 start-50 translate-middle form p-2 px-3">
                    <Formik
                        validationSchema={loginSchema}
                        initialValues={initialInput}
                        onSubmit={async (values, { resetForm }) => {
                            try {
                                isLoading()
                                // console.log(values);
                                await login(values)
                                // resetForm()
                                toast.success(`success register`)
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
                    <div className="mt-3">
                        <span>
                            Not a member ?
                            <Link to={'/signup'}>Signup now</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
