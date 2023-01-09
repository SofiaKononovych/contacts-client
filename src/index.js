import { renderContact } from './renders';
import { validateInput } from './check';
import { HOST, request } from './api';

document.addEventListener('DOMContentLoaded', async () => {
  const form = document.querySelector('form');
  const data = await fetch(`${HOST}/contacts`);
  const contacts = await data.json();

  Object.values(contacts).forEach(renderContact);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    event.target.elements.disabled = true;

    const isValid = [...form.elements]
      .filter((input) => input.tagName === 'INPUT')
      .every((input) => validateInput(input));

    if (isValid) {
      const contact = await request('POST', new FormData(form));
      renderContact(contact);
      form.reset();
    }

    event.target.elements.disabled = false;
  });

  form.addEventListener('change', ({ target }) => {
    validateInput(target);
  });
});
