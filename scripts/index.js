const password = document.querySelector('input#pass');
const confirm_password = document.querySelector('input#cpass');
const mismatchText = document.querySelector('.mismatch-text');
const button = document.querySelector('button');

function updateErrorText(e) {
  e.preventDefault();
  if(password.value !== confirm_password.value) {
    mismatchText.style.visibility = "visible";
    password.classList.add("invalid");
    confirm_password.classList.add("invalid");
  } else {
    mismatchText.style.visibility = "hidden";
    password.classList.remove("invalid");
    confirm_password.classList.remove("invalid");
  }
}

mismatchText.style.visibility = "hidden";

password.addEventListener("input", (e) => updateErrorText(e));
confirm_password.addEventListener("input", (e) => updateErrorText(e));

button.addEventListener("click", (e) => {
  if(mismatchText.style.visibility === "visible") {
    e.preventDefault();
  }
})