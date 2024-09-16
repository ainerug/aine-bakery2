import * as Yup from 'yup';

export const cakeSchema = Yup.object().shape({

    cakeName: Yup.string().required("Cake Name is required!"),
    price:Yup.number().min(0).max(10000).required("Price is required!"),
    flavor: Yup.string().required("Flavor is required!"),
    description: Yup.string().required("Description is required!"),
    file: Yup.mixed().required("At least one image is required!")

});