export default function ValidateInfo(values) {
  let errors = [];

  if (!values.name) {
    errors.name = "Name required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.phone) {
    errors.phone = "Phone Number required";
  } else if (values.phone.match(/^\d{10}/)) {
    errors.phone = "Phone Number is invalid";
  }

  if (!values.address) {
    errors.address = "Address is required";
  }

  if (!values.zip) {
    errors.zip = "Zip code is required";
  }

  if (!values.city) {
    errors.city = "City is required";
  }

  if (!values.country) {
    errors.country = "Country is required";
  }

  return errors;
}
