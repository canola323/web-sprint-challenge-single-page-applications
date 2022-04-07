import * as yup from "yup";

const formSchema = yup.object().shape({
    fname: yup
      .string()
      .min(2, "name must be at least 2 characters")
      .required("First name is Required"),
    email: yup
      .string()
      .email("Must be a valid email address")
      .required("Must include email address"),
    pizzaSize: yup
      .string()
      .oneOf(["small", "medium", "large"], "You must select a pizza size")
      .required("You must select a pizza size"),
  })
  
  export default formSchema