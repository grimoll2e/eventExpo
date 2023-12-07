import React from 'react'
import { object, string } from 'yup'

import CreateForm from '../layouts/CreateForm'
import useVeanue from '../hooks/useVeanue'
import TestForm from '../layouts/TestForm'




export default function Testpage({ handleCancle }) {
    const { allVeanue } = useVeanue()

    const textinput = [
        {
            label: 'title',
            name: 'title',
        },
        {
            label: 'test',
            name: 'test',
        },
        {
            label: 'Uwa',
            name: 'Uwa',
        },
    ]
    const selectinput = [
        {
            label: 'testsel-1',
            name: 'testsel1',
            value: allVeanue && allVeanue.map((el, idx) => (
                <option key={idx + el.hallName} value={el.id}>{el.hallName}</option>
            ))
        },
        {
            label: 'testsel-2',
            name: 'testsel2',
            value: allVeanue && allVeanue.map((el, idx) => (
                <option key={idx + el.id} value={el.id}>{el.id}</option>
            ))
        },
    ]
    const initialValues = {
        title: '',
        test: '',
        Uwa: '',
        testsel1: '',
        testsel2: '',
    }
    const validationSchema = object().shape({
        title: string().trim(),
        test: string().trim().required('3'),
        Uwa: string().trim(),
        testsel1: string().trim().required('4'),
        testsel2: string().trim().required('5'),
    });




    return (
        <>
            <CreateForm
                initialValues={initialValues}
                validationSchema={validationSchema}
            // handleSubmit={ }
            // src={ }
            >
                {({ values, errors, touched, handleChange }) => (
                    <TestForm
                        values={values}
                        errors={errors}
                        touched={touched}
                        handleChange={handleChange}
                        textinput={textinput}
                        selectinput={selectinput}
                    >
                    </TestForm>
                )}

            </CreateForm>
        </>
    )
}
