import * as yup from "yup";

const registerSchema = yup.object({
    name: yup.string().required("Name is required")
    .trim()//remove the extra space from thr field
    .test(
        'no-admin',
        'Name cannot be admin',
        (value) => value?.toLowerCase() !== 'admin'
    )
    .lowercase(),//field ka sara value ko samall letter me convert kar de ga

    // email: yup
    // .string()
    // .required("Email is required")
    // .email("Invalid email")
    // .test(
    //     "check-email",
    //     "Email already in use",
    //     async (value) => {
    //         // Simulate an API call to check if the email is already in use
    //         const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${value}`);
    //         const data = await response.json();
    //         const emailExists = data.some(user => user.email === value);
    //         // yaha par ham isis api me se denge ki koi email hai jo dala hai to wo same to nahi hai na
    //         return !emailExists; // Return true if email is not in use
    //     }
    // ),


    email: yup.string()
    .when("age", {
        is: age => age >= 25,
        then: yup.string().required("Email is required for age 25 and above").email("Invalid email"),
        otherwise: yup.string().notRequired(),
    }),//agar age

    password: yup
        .string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),

    confirmPassword: yup
        .string()
        .required("Confirm Password is required")
        .oneOf([yup.ref("password"), null], "Passwords must match"),
    //OneOf is used to match two fields ref ka matab ha kona sa field ko match kar na hia

    age: yup
        .number()
        .required("Age is required")
        .min(18, "You must be at least 18 years old"),
});

export default registerSchema;
