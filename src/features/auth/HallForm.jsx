import { object, string } from 'yup'
import { Formik, Form } from 'formik'
import { toast } from 'react-toastify'
import { Await } from 'react-router-dom'

import Button from '../../components/Button'
import TextInput from '../../components/TextInput'
import ImageInput from '../../components/ImageInput'
import useLoading from '../../hooks/useLoading'
import * as hallApi from '../../apis/hall-api'


const createEventSchema = object().shape({
    hallName: string().trim().required('required'),
    detail: string().trim(),
});

export default function HallForm({ handleToggleClick, name, detail, handleEdit, id, handleSubmit }) {

    const initialInput = {
        hallName: name,
        detail: detail,
    }

    const { isLoading, isFinish } = useLoading()
    return (
        <div className="container">
            <div className="row justify-content-center">
                <ImageInput />
                <div className="col-lg-5 col-md-6">
                    <Formik
                        validationSchema={createEventSchema}
                        initialValues={initialInput}
                        onSubmit={async (values, { resetForm }) => {
                            try {
                                isLoading()
                                // console.log(values);
                                if (id) {
                                    await handleEdit(values, id)
                                    toast.success(`Edit SUCCESS`)
                                } else {
                                    await handleSubmit(values)
                                    resetForm()
                                    toast.success(`SUCCESS`)
                                }
                            } catch (error) {
                                console.log(error)
                                toast.error(`Error : ${error.response ? error.response.data.message : error.message}`)
                            }
                            finally {
                                isFinish()
                                handleToggleClick ? handleToggleClick() : null
                            }
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
                                    label={'Detail'}
                                    name={'detail'}
                                    as={'textarea'}
                                    input={values.detail}
                                    handleChange={handleChange}
                                    error={errors.detail}
                                    touch={touched.detail} />

                                <div className="d-flex justify-content-center gap-2">
                                    <Button text={'Save'} type={'submit'} />
                                    <Button text={'Cancle'} onClick={handleToggleClick} />
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}
