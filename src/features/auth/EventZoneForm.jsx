import { Formik, Form } from "formik";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";


export default function EventZoneForm({ setEvetZoneById, setCreateValue, onCancel, editId, id, createToggle, title, xaixs, yaixs, width, height, color }) {
    // console.log('editId' + editId)
    // console.log('id' + id)
    const initialInput = {
        title: title || '',
        xaixs: xaixs || '0',
        yaixs: yaixs || '0',
        width: width || '0',
        height: height || '0',
        color: color || '#000000'
    }

    return (
        <>
            {createToggle ?
                <Formik
                    enableReinitialize={true}
                    // validationSchema={}
                    initialValues={initialInput}
                    onSubmit={async (values, { resetForm }) => {
                        console.log(values)
                        setCreateValue(values)
                    }}
                >
                    {({ values, errors, touched, handleChange }) => (
                        <Form>
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
                                input={values.xaixs}
                                handleChange={(e) => {
                                    if (Number(e.target.value) + Number(values.width) > 100) {
                                        e.target.value = 100 - values.width
                                    }
                                    handleChange(e)
                                }}
                                error={errors.xaixs}
                                touch={touched.xaixs}
                            />
                            <TextInput
                                label={'Yaixs'}
                                name={'yaixs'}
                                type={'range'}
                                input={values.yaixs}
                                handleChange={(e) => {
                                    if (Number(e.target.value) + Number(values.height) > 100) {
                                        e.target.value = 100 - values.height
                                    }
                                    handleChange(e)
                                }}
                                error={errors.yaixs}
                                touch={touched.yaixs}
                            />
                            <TextInput
                                label={'Width'}
                                name={'width'}
                                type={'range'}
                                input={values.width}
                                handleChange={(e) => {
                                    if (Number(e.target.value) + Number(values.xaixs) > 100) {
                                        e.target.value = 100 - values.xaixs
                                    }
                                    handleChange(e)
                                }}
                                error={errors.width}
                                touch={touched.width}
                            />
                            <TextInput
                                label={'Height'}
                                name={'height'}
                                type={'range'}
                                input={values.height}
                                handleChange={(e) => {
                                    if (Number(e.target.value) + Number(values.yaixs) > 100) {
                                        e.target.value = 100 - values.yaixs
                                    }
                                    handleChange(e)
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
                                <Button text={'save'} type={'submit'} />
                                <Button text={'cancel'} onClick={onCancel} />
                            </div>
                        </Form>
                    )}
                </Formik> : editId === id && <Formik
                    enableReinitialize={true}
                    // validationSchema={}
                    initialValues={initialInput}
                    onSubmit={async (values, { resetForm }) => {
                        console.log(values)
                    }}
                >
                    {({ values, errors, touched, handleChange }) => (
                        <Form>
                            <TextInput
                                label={'Title'}
                                name={'title'}
                                input={title || values.title}
                                handleChange={(e) => {
                                    handleChange(e)
                                    setEvetZoneById((prev) => prev.map((el, idx) => idx === editId ? { ...el, title: e.target.value } : el))
                                }}
                                error={errors.title}
                                touch={touched.title}
                            />
                            <TextInput
                                label={'Xaixs'}
                                name={'xaixs'}
                                type={'range'}
                                input={xaixs || values.xaixs}
                                handleChange={(e) => {
                                    handleChange(e)
                                    if (Number(e.target.value) + Number(width) > 100) {
                                        e.target.value = 100 - width
                                    }
                                    setEvetZoneById((prev) => prev.map((el, idx) => idx === editId ? { ...el, xaixs: e.target.value } : el))
                                }}
                                error={errors.xaixs}
                                touch={touched.xaixs}
                            />
                            <TextInput
                                label={'Yaixs'}
                                name={'yaixs'}
                                type={'range'}
                                input={yaixs || values.yaixs}
                                handleChange={(e) => {
                                    handleChange(e)
                                    if (Number(e.target.value) + Number(height) > 100) {
                                        e.target.value = 100 - height
                                    }
                                    setEvetZoneById((prev) => prev.map((el, idx) => idx === editId ? { ...el, yaixs: e.target.value } : el))
                                }}
                                error={errors.yaixs}
                                touch={touched.yaixs}
                            />
                            <TextInput
                                label={'Width'}
                                name={'width'}
                                type={'range'}
                                input={width || values.width}
                                handleChange={(e) => {
                                    handleChange(e)
                                    if (Number(e.target.value) + Number(xaixs) > 100) {
                                        e.target.value = 100 - xaixs
                                    }
                                    setEvetZoneById((prev) => prev.map((el, idx) => idx === editId ? { ...el, width: e.target.value } : el))
                                }}
                                error={errors.width}
                                touch={touched.width}
                            />
                            <TextInput
                                label={'Height'}
                                name={'height'}
                                type={'range'}
                                input={height || values.height}
                                handleChange={(e) => {
                                    handleChange(e)
                                    if (Number(e.target.value) + Number(yaixs) > 100) {
                                        e.target.value = 100 - yaixs
                                    }
                                    setEvetZoneById((prev) => prev.map((el, idx) => idx === editId ? { ...el, height: e.target.value } : el))
                                }}
                                error={errors.height}
                                touch={touched.height}
                            />
                            <TextInput
                                label={'color'}
                                name={'color'}
                                type={'color'}
                                input={color || values.color}
                                handleChange={(e) => {
                                    handleChange(e)
                                    setEvetZoneById((prev) => prev.map((el, idx) => idx === editId ? { ...el, color: e.target.value } : el))
                                }}
                                error={errors.color}
                                touch={touched.color}
                            />
                            <div>
                                <Button text={'save'} type={'submit'} />
                                <Button text={'cancel'} onClick={onCancel} />
                            </div>
                        </Form>
                    )}
                </Formik>}
        </>
    )
}
