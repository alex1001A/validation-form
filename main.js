let form = document.querySelector(".hero-form"),
  formInputs = document.querySelectorAll(".input"),
  formEmail = document.querySelector(".form-email"),
  formPhone = document.querySelector(".form-phone"),
  formButton = document.querySelector(".form-submit-button");

function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.onsubmit = function () {
  let emptyInputs = Array.from(formInputs).filter((inp) => inp.value === "");

  formInputs.forEach((inp) => {
    if (inp.value === "") {
      inp.classList.add("error");
    } else {
      inp.classList.remove("error");
    }
  });

  if (emptyInputs.length !== 0) {
    return false;
  }
};
