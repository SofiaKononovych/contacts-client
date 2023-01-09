const list = document.querySelector('.contacts');

export function renderContact({ name, number, id }) {
  const contact = document.createElement('li');
  contact.classList.add('contact');
  contact.dataset.id = id;

  contact.innerHTML = `
<h2 class='contact__title'>
      ${name}
</h2>
<a href='tel:${number}'>${number}</a>
  `;
  list.append(contact);
}
