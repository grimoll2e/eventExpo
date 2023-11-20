import { object, string } from 'yup'

const veanueEventSchema = object().shape({
    hallName: string().trim().required('required'),
    detail: string().trim(),
});

export default veanueEventSchema