import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import ImageInput from '../../components/ImageInput'
import { Formik, Form } from 'formik'
import { object, string } from 'yup'

const initialInput = {
    hallName: '',
    descrition: '',
}

const createEventSchema = object().shape({
    hallName: string().trim().required('required'),
    descrition: string().trim(),
});

export default function HallForm() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="d-flex flex-column gap-3 col-lg-5 col-md-6 align-items-center ">
                    <ImageInput />
                    <div className="d-flex gap-2">
                        <Button text={'Save'} />
                        <Button text={'Cancle'} />
                        <Button text={'Edit'} />
                    </div>
                </div>
                <div className="col-lg-5 col-md-6">
                    <Formik
                        validationSchema={createEventSchema}
                        initialValues={initialInput}
                        onSubmit={(values, { resetForm }) => {
                            console.log(values)
                            // console.log(values)
                            // resetForm()
                        }}

                    >
                        {({ values, errors, touched, handleChange }) => (
                            <Form action="" className="d-flex flex-column gap-2">
                                <TextInput
                                    label={'Hall Name'}
                                    name={'hallName'}
                                    input={values.hallName}
                                    handleChange={handleChange}
                                    error={errors.hallName}
                                    touch={touched.hallName} />
                                <TextInput
                                    label={'Descrition'}
                                    name={'descrition'}
                                    as={'textarea'}
                                    input={values.descrition}
                                    handleChange={handleChange}
                                    error={errors.descrition}
                                    touch={touched.descrition} />

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