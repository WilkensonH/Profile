const form = document.getElementById("form"); 

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("status");
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = " Successful, Thank you for contacting me!";
      status.classList.add("success");
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
      status.classList.add("error");
    });
}
form.addEventListener("submit", handleSubmit);
