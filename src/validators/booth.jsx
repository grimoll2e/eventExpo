import { object, string } from 'yup'

const boothSchema = object().shape({
    title: string().trim().required('pls type someting'),
    description: string().trim(),
    link: string().trim(),
});

export default boothSchema