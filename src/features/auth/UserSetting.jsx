import { useState } from 'react'

import UserForm from './UserForm'
import Button from '../../components/Button'
import Image from '../../components/Image'

import useAuth from '../../hooks/useAuth'
import { useNavigate, useLocation } from 'react-router-dom';


export default function UserSetting() {
    const [toggle, setToggle] = useState(false)
    const { authenticatedUser, updateUser } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();




    const onSubmitForm = async (values, image) => {
        try {
            await updateUser(values, image)
            if (values.userName) {
                const pathParth = location.pathname.split('/')
                pathParth[pathParth.length - 1] = values.userName
                const newpath = pathParth.join('/')
                navigate(`${newpath}`)
            }
        } catch (error) {

        }

    }

    return (
        <>
            {toggle ?
                <UserForm toggleForEdit={() => setToggle(false)} onSubmitForm={onSubmitForm} />
                :
                <div className="container">
                    <div className="row justify-content-center">
                        <div className='col-lg-4 col-md-6'>
                            <div className="d-flex flex-column gap-3  align-items-center ">
                                <Image
                                    addclass={'rounded-circle'}
                                    src={authenticatedUser.userImage}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="d-flex flex-column my-1 gap-2">
                                <div className="d-flex align-items-start">
                                    <label className="me-auto" >User Name</label>
                                </div>
                                <input
                                    className={`py-1 px-3 form-control  `}
                                    type={"text"}
                                    placeholder={'User Name'}
                                    defaultValue={authenticatedUser.userName}
                                    readOnly
                                />
                            </div>
                            <div className="d-flex flex-column my-1 gap-2">
                                <div className="d-flex align-items-start">
                                    <label className="me-auto" >Mobile</label>
                                </div>
                                <input
                                    className={`py-1 px-3 form-control  `}
                                    type={"text"}
                                    placeholder={'Mobile'}
                                    defaultValue={authenticatedUser.mobile}
                                    readOnly
                                />
                            </div>
                            <div className="d-flex flex-column my-1 gap-2">
                                <div className="d-flex align-items-start">
                                    <label className="me-auto" >Description</label>
                                </div>
                                <input
                                    className={`py-1 px-3 form-control  `}
                                    type={"text"}
                                    placeholder={'Description'}
                                    defaultValue={authenticatedUser.description}
                                    readOnly
                                />
                            </div>
                            <div className="d-flex flex-column my-1 gap-2">
                                <div className="d-flex align-items-start">
                                    <label className="me-auto" >Link</label>
                                </div>
                                <input
                                    className={`py-1 px-3 form-control  `}
                                    type={"text"}
                                    placeholder={'Link'}
                                    defaultValue={authenticatedUser.link}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center mt-4'>
                        <Button text={'Edit Profile'} onClick={() => setToggle(true)} />
                    </div>
                </div>
            }
        </>

    )
}
