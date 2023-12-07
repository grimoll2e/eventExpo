import useAuth from "../../hooks/useAuth"
import EditForm from "../../layouts/EditForm"
import FormInput from "../FormInput"

export default function UserForm({ toggleForEdit }) {
    const { authenticatedUser, updateUser } = useAuth()

    const textinput = [
        {
            label: 'User Name',
            name: 'userName',
            value: authenticatedUser.userName
        },
        {
            label: 'Mobile',
            name: 'mobile',
            value: authenticatedUser.mobile
        },
        {
            label: 'Description',
            name: 'description',
            value: authenticatedUser.description
        },
        {
            label: 'Link',
            name: 'link',
            value: authenticatedUser.link
        }
    ]

    const initialValues = {
        userName: authenticatedUser.userName,
        mobile: authenticatedUser.mobile,
        description: authenticatedUser.description,
        link: authenticatedUser.link,
    }

    return (
        <EditForm
            addclassImage='rounded-circle'
            src={authenticatedUser.userImage}
            handleEdit={updateUser}
            initialValues={initialValues}
        // validationSchema={validationSchema}
        >
            {({ values, errors, touched, handleChange }) => (
                <FormInput
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    textinput={textinput}
                    handleCancle={toggleForEdit}
                >
                </FormInput>
            )}
        </EditForm>
    )
}

