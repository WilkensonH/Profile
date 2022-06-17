const form = document.getElementById('form');

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
      status.innerHTML = 'Thank you 🥳 for contacting me ! <br> I will get back to you ASAP <hr>';
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