const form = document.getElementById('form');
const hideForm = document.getElementsByClassName('hide_contact')

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById('status');
  const data = new FormData(event.target);

  fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })
    .then(response => {
      status.innerHTML = 'Thank you 🥳 for contacting me ! I will reply ASAP <hr>';
      status.classList.add('success');
      form.reset();
    })
    .catch(error => {
      console.log(error)
      status.innerHTML = 'Oops 😔 ! There was a problem submitting your form';
      status.classList.add('error');
    });
}
form.addEventListener('submit', handleSubmit);
console.log(hideForm);