let form = document.querySelector(".hero-form"),
  formInputs = document.querySelectorAll(".input"),
  formEmail = document.querySelector(".form-email"),
  formPhone = document.querySelector(".form-phone");

form.addEventListener("submit", () => {
  let emailVal = formEmail.value,
    phoneVal = formPhone.value,
    emptyInputs = Array.from(formInputs).filter((inp) => inp.value === "");

  formInputs.forEach((inp) => {
    if (inp.value === "") {
      inp.classList.add(".error");
    } else {
      inp.classList.remove(".error");
    }
  });

  if (emptyInputs.length !== 0) {
    console.log("fields not filled");
    return false;
  }
});
