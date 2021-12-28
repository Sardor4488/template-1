const Validation = (value) => {
  console.log(value.resumeEr);
  let errors = {};
  if (!value.first_name) {
    errors.first_name = true;
  }
  if (!value.last_name) {
    errors.last_name = true;
  }
  if (!value.birth_date) {
    errors.birth_date = true;
  }
  if (!value.course_id) {
    errors.course_id = true;
  }
  if (!value.email) {
    errors.email = true;
  }
  if (!value.phone_number) {
    errors.phone_number = true;
  }
  if (!value.telegram_number) {
    errors.telegram_number = true;
  }
  if (!value.experience) {
    errors.experience = true;
  }
  if (!value.language) {
    errors.language = true;
  }
  if (!value.price) {
    errors.price = true;
  }
  if (!value.resumeEr) {
    errors.resumeEr = true;
  }
  if (!value.about_us) {
    errors.about_us = true;
  }
  if (!value.description) {
    errors.description = true;
  } else if (value.description.length < 200) {
    errors.description_length = true;
  }
  if (!value.region) {
    errors.region = true;
  }
  if (!value.country) {
    errors.country = true;
  }
  return errors;
};

export default Validation;
