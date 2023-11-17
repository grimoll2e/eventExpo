import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import Image from '../../components/Image'
import { Formik, Form } from 'formik'
import { object, string } from 'yup'

const initialInput = {
    eventTitle: '',
    zone: '',
    booth: '',
}

const eventSchema = object().shape({
    eventTitle: string().trim().required('required'),
    zone: string().trim().required('required'),
    booth: string().trim().required('required'),
});

export default function EventForm() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="d-flex flex-column gap-3 col-lg-5 col-md-6 align-items-center ">
                    <Image />
                    <div className="d-flex gap-2">
                        <Button text={'Save'} />
                        <Button text={'Cancle'} />
                        <Button text={'Edit'} />
                    </div>
                </div>
                <div className="col-lg-5 col-md-6">
                    <Formik
                        validationSchema={eventSchema}
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
                                    label={'Zone'}
                                    name={'zone'}
                                    input={values.zone}
                                    handleChange={handleChange}
                                    error={errors.zone}
                                    touch={touched.zone} />
                                <TextInput
                                    label={'Booth'}
                                    name={'booth'}
                                    input={values.booth}
                                    handleChange={handleChange}
                                    error={errors.booth}
                                    touch={touched.booth} />
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