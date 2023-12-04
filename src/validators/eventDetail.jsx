import { object, string } from 'yup'

const eventDetailSchema = object().shape({
    title: string().trim(),
    detail: string().trim(),
});

export default eventDetailSchema