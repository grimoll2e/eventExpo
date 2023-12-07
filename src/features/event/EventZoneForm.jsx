import { Formik, Form } from "formik";
import { toast } from "react-toastify";

import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

import useLoading from "../../hooks/useLoading";
import useAuth from "../../hooks/useAuth";
import SelectInput from "../../components/SelectInput";


export default function EventZoneForm({ setEvetZoneById, toggle, editId, id, createToggle, title, xaixs, yaixs, width, height, color, handleSubmit, eventId, handleEdit, handleDelete, userId }) {

    const { isLoading, isFinish } = useLoading()
    const { allUser } = useAuth()

    const initialInput = {
        title: title || '',
        xaixs: xaixs || '0',
        yaixs: yaixs || '0',
        width: width || '0',
        height: height || '0',
        color: color || '#000000',
        userId: userId || '1'
    }

    return (
        <>
            {createToggle ?
                <Formik
                    enableReinitialize={true}
                    // validationSchema={}
                    initialValues={initialInput}
                    onSubmit={async (values, { resetForm }) => {
                        try {
                            isLoading()
                            values = { ...values, eventId: eventId }
                            await handleSubmit(values, eventId)
                            toast.success(`CREATE SUCCESS`)
                            resetForm()
                            toggle()
                        } catch (error) {
                            toast.error(`Error : ${error.response ? error.response.data.message : error.message}`)
                        } finally {
                            isFinish()
                        }
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
                            <SelectInput
                                label={'User Id'}
                                name={'userId'}
                                onChange={handleChange}
                                error={errors.userId}
                                touch={touched.userId}
                            >
                                {allUser && allUser.map((el, idx) => (
                                    <option key={idx} value={el.id}>{el.userName}</option>
                                ))}
                            </SelectInput>
                            <div>
                                <Button text={'save'} type={'submit'} />
                                <Button text={'cancel'} onClick={toggle} />
                            </div>
                        </Form>
                    )}
                </Formik>
                : editId === id && <Formik
                    enableReinitialize={true}
                    // validationSchema={}
                    initialValues={initialInput}
                    onSubmit={async (values, { resetForm }) => {
                        try {
                            isLoading()
                            await handleEdit(values, id)
                            toast.success(`Edit SUCCESS`)
                            resetForm()
                        } catch (error) {
                            toast.error(`Error : ${error.response ? error.response.data.message : error.message}`)
                        } finally {
                            isFinish()
                            toggle()

                        }
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
                                    setEvetZoneById((prev) => prev.map((el, idx) => el.id === editId ? { ...el, title: e.target.value } : el))
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
                                    setEvetZoneById((prev) => prev.map((el, idx) => el.id === editId ? { ...el, xaixs: e.target.value } : el))
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
                                    setEvetZoneById((prev) => prev.map((el, idx) => el.id === editId ? { ...el, yaixs: e.target.value } : el))
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
                                    setEvetZoneById((prev) => prev.map((el, idx) => el.id === editId ? { ...el, width: e.target.value } : el))
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
                                    setEvetZoneById((prev) => prev.map((el, idx) => el.id === editId ? { ...el, height: e.target.value } : el))
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
                                    setEvetZoneById((prev) => prev.map((el, idx) => el.id === editId ? { ...el, color: e.target.value } : el))
                                }}
                                error={errors.color}
                                touch={touched.color}
                            />
                            <SelectInput
                                label={'User Id'}
                                name={'userId'}
                                onChange={handleChange}
                                error={errors.userId}
                                touch={touched.userId}
                            >
                                {allUser && allUser.map((el, idx) => (
                                    <option key={idx} value={el.id}>{el.userName}</option>
                                ))}
                            </SelectInput>
                            <div>
                                <Button text={'save'} type={'submit'} />
                                <Button text={'cancel'} onClick={toggle} />
                                <Button text={'delete'} onClick={async () => {
                                    try {
                                        isLoading()
                                        await handleDelete(id)
                                        toast.success('Delete Success')
                                    } catch (error) {
                                        toast.error(`Error : ${error.response ? error.response.data.message : error.message}`)
                                    } finally {
                                        isFinish()
                                    }

                                }} />
                            </div>
                        </Form>
                    )}
                </Formik>}
        </>
    )
}
