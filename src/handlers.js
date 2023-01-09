// import { renderContact, list } from './renders';
// import { validateInput } from './check';
//
// export async function handleCreate(event) {
//   event.preventDefault();
//   const { target: form } = event;
//   const isValid = [...form.elements]
//     .filter((input) => input.tagName === 'INPUT')
//     .every((input) => validateInput(input));
//
//   if (isValid) {
//     const body = new FormData(form);
//     const data = await fetch(
//       'https://contacts-api-learn.herokuapp.com/api/contacts',
//       {
//         method: 'POST',
//         body,
//       }
//     );
//     const contactItem = await data.json();
//     renderContact(contactItem);
//     form.reset();
//     form.elements.submit.disabled(true);
//   }

// fetch('https://contacts-api-learn.herokuapp.com/api/contacts', {
//   method: 'POST',
//   body,
// })
//   .then((data) => {
//     return data.json();
//   })
//   .then((data) => {
//     list.innerHTML = '';
//     Object.values(data).forEach(renderContact);
//     form.reset();
//     form.elements.submit.disabled(false);
//   });
//   const {target: form} = event;
//   const body = new FormData(form);
//   const {name, number} = form;
//
//   form.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const isValid = [...form.elements]
//       .filter(input => input.tagName === 'INPUT')
//       .every((input) => validateInput(input));
//     if (isValid){
//       const data = await fetch ('https://contacts-api-learn.herokuapp.com/api/contacts', {
//         method: 'POST',
//         body,
//       } )
//       const contact = await data.json();
//       const {name, id, number} = contact;
//       renderContact(contact);
//       form.reset();
//     }
//   });
//   form.addEventListener('change', ({target}) => {
//     validateInput(target);
//   });  // }
//
// function validateInput(input){
//   const {min, max} = input.dataset;
//   const validationMessage = document.querySelector('.input__message')
//
//
//   if (input.value === ''){
//     validationMessage.innerText = 'The field is required'
//     return false;
//   }
//
//   if (input.value.length < min){
//     validationMessage.innerText = `Min length is ${min}`
//     return false;
//   }
//   if (input.value.length > max){
//     validationMessage.innerText = `Max length is ${max}`
//     return false;
//   }
//
//   validationMessage.innerText = '';
//   return true;
//}
