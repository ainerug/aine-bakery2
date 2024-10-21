import * as Yup from 'yup';


export const loginSchema = Yup.object().shape({


    email: Yup.string().required("E-mail is required!"),
    password: Yup.string(). min(8).required("Password is required!"),
}
)