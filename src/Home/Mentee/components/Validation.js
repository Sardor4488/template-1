const Validation = (values) => {
  let errors = {};
  if (!values.first_name) {
    errors.first_name = true;
  }
  if (!values.last_name) {
    errors.last_name = true;
  }
  if (!values.phone_number) {
    errors.phone_number = true;
  }
  if (!values.email) {
    errors.email = true;
  }
  if (!values.telegram) {
    errors.telegram = true;
  }
  if (!values.birth_date) {
    errors.birth_date = true;
  }
  if (!values.region) {
    errors.region = true;
  }
  if (!values.country) {
    errors.country = true;
  }
  if (!values.job) {
    errors.job = true;
  }
  if (!values.about_us) {
    errors.about_us = true;
  }
  if (!values.experience) {
    errors.experience = true;
  }
  if (!values.target) {
    errors.target = true;
  } else if (values.target.length < 50) {
    errors.target_length = true;
  }
  return errors;
};

export default Validation;
