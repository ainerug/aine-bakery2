import * as Yup from 'yup';


export const orderCakeSchema = Yup.object().shape({



    userName: Yup.string().required("Username is required!"),
    phoneNumber:Yup.number().required("Phone number is required!"),
    email: Yup.string().required("E-mail is required!"),
    address: Yup.string().required("Address is required!"),
}
)