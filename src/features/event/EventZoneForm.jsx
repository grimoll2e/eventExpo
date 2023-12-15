import { Formik, Form } from "formik";
import { toast } from "react-toastify";

import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

import useLoading from "../../hooks/useLoading";
import useAuth from "../../hooks/useAuth";
import SelectInput from "../../components/SelectInput";
import RangeInput from "../../components/RangeInput";


export default function EventZoneForm({ setEvetZoneById, toggle, editId, id, createToggle, title, xaixs, yaixs, width, height, color, handleSubmit, eventId, handleEdit, handleDelete, userId, setCreateValue }) {

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
                            console.log(values)
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
                                handleChange={(e) => {
                                    handleChange(e)
                                    setCreateValue(prv => ({ ...prv, title: e.target.value }))
                                }}
                                error={errors.title}
                                touch={touched.title}
                            />
                            <RangeInput
                                label={'Xaixs'}
                                name={'xaixs'}
                                type={'range'}
                                value={values.xaixs}
                                handleChange={(e) => {
                                    if (Number(e.target.value) + Number(values.width) > 100) {
                                        e.target.value = 100 - values.width
                                    }
                                    handleChange(e)
                                    setCreateValue(prv => ({ ...prv, xaixs: e.target.value }))
                                }}
                                error={errors.xaixs}
                                touch={touched.xaixs}
                            />
                            <RangeInput
                                label={'Yaixs'}
                                name={'yaixs'}
                                type={'range'}
                                value={values.yaixs}
                                handleChange={(e) => {
                                    if (Number(e.target.value) + Number(values.height) > 100) {
                                        e.target.value = 100 - values.height
                                    }
                                    handleChange(e)
                                    setCreateValue(prv => ({ ...prv, yaixs: e.target.value }))
                                }}
                                error={errors.yaixs}
                                touch={touched.yaixs}
                            />
                            <RangeInput
                                label={'Width'}
                                name={'width'}
                                type={'range'}
                                value={values.width}
                                handleChange={(e) => {
                                    if (Number(e.target.value) + Number(values.xaixs) > 100) {
                                        e.target.value = 100 - values.xaixs
                                    }
                                    handleChange(e)
                                    setCreateValue(prv => ({ ...prv, width: e.target.value }))
                                }}
                                error={errors.width}
                                touch={touched.width}
                            />
                            <RangeInput
                                label={'Height'}
                                name={'height'}
                                type={'range'}
                                value={values.height}
                                handleChange={(e) => {
                                    if (Number(e.target.value) + Number(values.yaixs) > 100) {
                                        e.target.value = 100 - values.yaixs
                                    }
                                    handleChange(e)
                                    setCreateValue(prv => ({ ...prv, height: e.target.value }))
                                }}
                                error={errors.height}
                                touch={touched.height}
                            />
                            <TextInput
                                label={'color'}
                                name={'color'}
                                type={'color'}
                                input={values.color}
                                handleChange={(e) => {
                                    handleChange(e)
                                    setCreateValue(prv => ({ ...prv, color: e.target.value }))
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
                                <Button text={'cancel'} onClick={() => {
                                    toggle()
                                    setCreateValue({
                                        title: '',
                                        xaixs: '0',
                                        yaixs: '0',
                                        width: '0',
                                        height: '0',
                                        color: '#000000'
                                    })
                                }} />
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
                            <RangeInput
                                label={'Xaixs'}
                                name={'xaixs'}
                                type={'range'}
                                value={xaixs || values.xaixs}
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
                            <RangeInput
                                label={'Yaixs'}
                                name={'yaixs'}
                                type={'range'}
                                value={yaixs || values.yaixs}
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
                            <RangeInput
                                label={'Width'}
                                name={'width'}
                                type={'range'}
                                value={width || values.width}
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
                            <RangeInput
                                label={'Height'}
                                name={'height'}
                                type={'range'}
                                value={height || values.height}
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
                            <div className="mt-3">
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
