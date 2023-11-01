import Button from '../Button'
import TextInput from '../TextInput'
import ImageInput from '../ImageInput'
import { Formik, Form } from 'formik'
import { object, string } from 'yup'

const initialInput = {
    eventTitle: '',
    descrition: '',
    date: '',
    hall: '',
}

const createEventSchema = object().shape({
    eventTitle: string().trim().required('required'),
    descrition: string().trim(),
    date: string().trim().required('required'),
    hall: string().trim().required('required'),
});

export default function CreateEventForm() {
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
                            // console.log(values.boothTitle)
                            // resetForm()
                        }}

                    >
                        {({ values, errors, touched, handleChange }) => (
                            <Form action="" className="d-flex flex-column gap-2">
                                <TextInput
                                    label={'Event Title'}
                                    name={'eventTitle'}
                                    input={values.eventTitle}
                                    handleChange={handleChange}
                                    error={errors.eventTitle}
                                    touch={touched.eventTitle} />
                                <TextInput
                                    label={'Descrition'}
                                    name={'descrition'}
                                    as={'textarea'}
                                    input={values.descrition}
                                    handleChange={handleChange}
                                    error={errors.descrition}
                                    touch={touched.descrition} />
                                <TextInput
                                    label={'Date'}
                                    name={'date'}
                                    input={values.date}
                                    handleChange={handleChange}
                                    error={errors.date}
                                    touch={touched.date} />
                                <TextInput
                                    label={'Hall'}
                                    name={'hall'}
                                    input={values.hall}
                                    handleChange={handleChange}
                                    error={errors.hall}
                                    touch={touched.hall} />
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