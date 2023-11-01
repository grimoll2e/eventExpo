import { object, string, ref } from 'yup'

const registerSchema = object().shape({
    userName: string().trim().required('กรุณากรอกชื่อผู้ใช้'),
    password: string()
        .trim()
        .matches(/^[0-9a-zA-Z]{3,}$/, '/^[0-9a-zA-Z]{3,}$/')
        .required('กรุณากรอกรหัสผ่าน'),
    confirmPassword: string()
        .trim()
        .oneOf([ref('password'), null], 'รหัสผ่านไม่ตรงกัน')
        .required('กรุณายืนยันรหัสผ่าน'),
    email: string().email('รูปแบบอีเมลไม่ถูกต้อง').trim().required('กรุณากรอกอีเมล'),
});

export default registerSchema