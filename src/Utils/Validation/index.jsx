import * as Yup from "yup";

export const validation = Yup.object({
    FirstName: Yup.string().min(8).max(25).required("Please enter your First Name"),
    LastName:  Yup.string().min(8).max(25).required("Please enter your Last Name"),
    userEmail: Yup.string().email().required("Please enter your email"),
    userPassword: Yup.string().min(6).required("Please enter your password"),
});