import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import ImageInput from '../../components/ImageInput'
import { Formik, Form } from 'formik'
import { object, string } from 'yup'
import useAuth from '../../hooks/useAuth'



const accountSchema = object().shape({
    userName: string().trim().required('กรุณากรอกชื่อผู้ใช้'),
    descrition: string().trim(),
    link: string().trim(),
});

export default function AccountForm() {
    const { authenticatedUser } = useAuth()

    const initialInput = {
        userName: authenticatedUser.userName || '',
        description: authenticatedUser.description || '',
        link: authenticatedUser.link || '',
    }

    return (
        <div className="container">
            <div className="row justify-content-center rounded-circle">
                <div className="d-flex flex-column gap-3 col-lg-5 col-md-6 align-items-center ">
                    <ImageInput addclass={'rounded-circle'} />
                    <div className="d-flex gap-2">
                        <Button text={'Save'} />
                        <Button text={'Cancle'} />
                        <Button text={'Edit'} />
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
