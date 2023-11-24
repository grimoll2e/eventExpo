import { object, string } from 'yup'

const createEventSchema = object().shape({
    title: string().trim().required('required'),
    description: string().trim(),
    period: string().trim().required('required'),
    hallId: string().trim().required('required'),
});

export default createEventSchema