import TextInput from '../TextInput'
import Button from '../Button'
import ImageInput from '../ImageInput'
import { Formik, Form } from 'formik'
import { object, string } from 'yup'

const initialInput = {
    userName: '',
    descrition: '',
    link: '',
}

const accountSchema = object().shape({
    userName: string().trim().required('กรุณากรอกชื่อผู้ใช้'),
    descrition: string().trim(),
    link: string().trim(),
});

export default function AccountForm() {
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
                        validationSchema={accountSchema}
                        initialValues={initialInput}
                        onSubmit={(values, { resetForm }) => {
                            console.log(values)
                            // console.log(values.userName)
                            // resetForm()
                        }}

                    >
                        {({ values, errors, touched, handleChange }) => (
                            <Form action="" className="d-flex flex-column gap-2">
                                <TextInput label={'Username'} name={'userName'} input={values.userName} handleChange={handleChange} error={errors.userName} touch={touched.userName} />
                                <TextInput label={'Descrition'} name={'descrition'} input={values.descrition} handleChange={handleChange} error={errors.descrition} touch={touched.descrition} />
                                <TextInput label={'Link'} name={'link'} input={values.link} handleChange={handleChange} error={errors.link} touch={touched.link} />
                                <div className="d-flex justify-content-center gap-2">
                                    <Button text={'Save'} />
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
