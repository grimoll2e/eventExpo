import { Link } from "react-router-dom";
import TextInput from "../components/TextInput";
import { Formik, Form } from 'formik'
import { object, string, ref } from 'yup'


const initialInput = {
    userName: '',
    password: '',
    confirmPassword: '',
    email: '',
}

const registerSchema = object().shape({
    userName: string().trim().required('กรุณากรอกชื่อผู้ใช้'),
    password: string()
        .trim()
        .matches(/^[0-9a-zA-Z]{3,}$/, '/^[0-9a-zA-Z]{3,}$/')
        .required('กรุณากรอกรหัสผ่าน'),
    confirmPassword: string()
        .trim()
        .oneOf([ref('password'), null], 'รหัสผ่านไม่ตรงกัน')
        .required('กรุณายืนยันรหัสผ่าน'),
    email: string().email('รูปแบบอีเมลไม่ถูกต้อง').trim().required('กรุณากรอกอีเมล'),
});

export default function SignupPage() {

    return (
        <div className="bg-image w-100" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1562832135-14a35d25edef?)' }}>
            <div className="container-fluid h-100 p-0 position-relative mt-0">
                <div className="position-absolute top-50 start-50 translate-middle form p-2 px-3">
                    <Formik
                        validationSchema={registerSchema}
                        initialValues={initialInput}
                        onSubmit={(values, { resetForm }) => {
                            console.log(values)
                            // console.log(values.userName)
                            // resetForm()
                        }}
                    >
                        {({ values, errors, touched, handleChange, handleSubmit }) => (
                            <Form className="d-flex flex-column gap-3">
                                <h1 className="text-center">Signup</h1>
                                <TextInput label={'Username'} name={'userName'} input={values.userName} handleChange={handleChange} error={errors.userName} touch={touched.userName} />
                                <TextInput label={'Password'} name={'password'} input={values.password} handleChange={handleChange} type={'password'} error={errors.password} touch={touched.password} />
                                <TextInput label={'Confirm Password'} name={'confirmPassword'} input={values.confirmPassword} handleChange={handleChange} type={'password'} error={errors.confirmPassword} touch={touched.confirmPassword} />
                                <TextInput label={'Email'} name={'email'} input={values.email} handleChange={handleChange} type={'email'} error={errors.email} touch={touched.email} />
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

