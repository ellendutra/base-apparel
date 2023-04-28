const form = document.querySelector(".main__form");
const emailField = form.querySelector(".email__field");
const emailInput = emailField.querySelector(".email__input");

function checkEmail() {
  const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emaiPattern)) {
    return emailField.classList.add("invalid"); 
  }
  emailField.classList.remove("invalid"); 
  emailInput.value= "";
  alert("Registration successful!")
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); 
  checkEmail();
});
