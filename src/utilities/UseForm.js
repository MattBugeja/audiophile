import { useState } from "react";
import ValidateInfo from "./ValidateInfo";

const useForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    setErrors(ValidateInfo(values));
  };

  let numOfErrors = "";
  numOfErrors = Object.keys(errors).length;

  return { handleChange, values, handleSubmit, errors, numOfErrors };
};

export default useForm;
