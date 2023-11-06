import { object, string } from 'yup'

const loginSchema = object().shape({
    userName: string().trim().required('กรุณากรอกชื่อผู้ใช้'),
    password: string().trim().required('กรุณากรอกรหัสผ่าน'),
});

export default loginSchema