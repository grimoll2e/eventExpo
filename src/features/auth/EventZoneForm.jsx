import { Formik, Form } from "formik";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import { useState } from "react";
import { useEffect } from "react";


export default function EventZoneForm({ setPreviewdata, previewdata, onCancel }) {
    const initialInput = {
        title: '',
        xaixs: '0',
        yaixs: '0',
        width: '0',
        height: '0',
        color: '#000000'
    }

    const handlePreview = (value) => {
        setPreviewdata(value)
    }

    return (
        <div>
            <Formik
                enableReinitialize={true}
                // validationSchema={}
                initialValues={initialInput}
                onSubmit={async (values, { resetForm }) => {
                    // setPreviewdata(values)
                    console.log(values)
                }}
            >
                {({ values, errors, touched, handleChange }) => (
                    <Form action='' className=''>
                        <TextInput
                            label={'Title'}
                            name={'title'}
                            input={values.title}
                            handleChange={handleChange}
                            error={errors.title}
                            touch={touched.title}
                        />
                        <TextInput
                            label={'Xaixs'}
                            name={'xaixs'}
                            type={'range'}
                            input={previewdata.xaixs || values.xaixs}
                            handleChange={(e) => {
                                handleChange(e)
                                setPreviewdata(prv => ({ ...prv, xaixs: e.target.value }))
                            }}
                            error={errors.xaixs}
                            touch={touched.xaixs}
                        />
                        <TextInput
                            label={'Yaixs'}
                            name={'yaixs'}
                            type={'range'}
                            input={previewdata.yaixs || values.yaixs}
                            handleChange={(e) => {
                                handleChange(e)
                                setPreviewdata(prv => ({ ...prv, yaixs: e.target.value }))
                            }}
                            error={errors.yaixs}
                            touch={touched.yaixs}
                        />
                        <TextInput
                            label={'Width'}
                            name={'width'}
                            type={'range'}
                            input={previewdata.width || values.width}
                            handleChange={(e) => {
                                handleChange(e)
                                setPreviewdata(prv => ({ ...prv, width: e.target.value }))
                            }}
                            error={errors.width}
                            touch={touched.width}
                        />
                        <TextInput
                            label={'Height'}
                            name={'height'}
                            type={'range'}
                            input={previewdata.height || values.height}
                            handleChange={(e) => {
                                handleChange(e)
                                setPreviewdata(prv => ({ ...prv, height: e.target.value }))
                            }}
                            error={errors.height}
                            touch={touched.height}
                        />
                        <TextInput
                            label={'color'}
                            name={'color'}
                            type={'color'}
                            input={values.color}
                            handleChange={handleChange}
                            error={errors.color}
                            touch={touched.color}
                        />
                        <div>
                            <Button text={'preview'} onClick={() => handlePreview(values)} />
                            <Button text={'save'} type={'submit'} />
                            <Button text={'cancel'} onClick={onCancel} />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
