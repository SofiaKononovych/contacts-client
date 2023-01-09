export function validateInput(input) {
  const { min, max } = input.dataset;
  const validationMessage = document.querySelector('.input__message');

  if (!input.value) {
    validationMessage.innerText = 'The field is required';
    return false;
  }
  if (input.value.length < min) {
    validationMessage.innerText = `This field has min value ${min}`;
    return false;
  }
  if (input.value.length > max) {
    validationMessage.innerText = `This field has max value ${max}`;
    return false;
  }
  validationMessage.innerText = '';
  return true;
}
