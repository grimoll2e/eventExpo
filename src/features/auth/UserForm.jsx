import useAuth from "../../hooks/useAuth"
import CreateForm from "../../layouts/CreateForm"
import FormInput from "../../layouts/FormInput"

export default function UserForm({ toggleForEdit, onSubmitForm }) {
    const { authenticatedUser } = useAuth()

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
        <CreateForm
            onSubmitForm={onSubmitForm}
            id={authenticatedUser.id}
            addclassImage='rounded-circle'
            src={authenticatedUser.userImage}
            initialValues={initialValues}
            toggleForEdit={toggleForEdit}
        >
            {({ values, errors, touched, handleChange }) => (
                <FormInput
                    id={authenticatedUser.id}
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    textinput={textinput}
                    toggleForEdit={toggleForEdit}
                >
                </FormInput>
            )}
        </CreateForm>
    )
}

