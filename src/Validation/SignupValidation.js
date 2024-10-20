import * as Yup from 'yup';


export const signUpSchema = Yup.object().shape({



    userName: Yup.string().required("Username is required!"),
    email: Yup.string().required("E-mail is required!"),
    password: Yup.string(). min(8).required("Password is required!"),
}
)