let form = document.querySelector(".hero-form"),
  formInputs = document.querySelectorAll(".input"),
  formEmail = document.querySelector(".form-email"),
  formPhone = document.querySelector(".form-phone"),
  formButton = document.querySelector(".form-submit-button");

// Валидация электронной почты
function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Валидация имени
function validateName(name) {
  let re = /^[A-Za-zА-Яа-я]{2,}$/; // Имя должно содержать только буквы и быть не менее 2 символов
  return re.test(String(name));
}

// Валидация номера телефона (начинается с 0 и содержит 10 цифр)
function validatePhone(phone) {
  let re = /^0[0-9]{9}$/; // Номер телефона должен начинаться с 0 и содержать 10 цифр
  return re.test(String(phone));
}

form.onsubmit = function (event) {
  event.preventDefault(); // Останавливаем стандартное поведение формы
  let emptyInputs = Array.from(formInputs).filter((inp) => inp.value === "");
  let isFormValid = true;

  formInputs.forEach((inp) => {
    if (inp.value === "") {
      inp.classList.add("error");
      isFormValid = false;
    } else {
      inp.classList.remove("error");
    }
  });

  if (!validateEmail(formEmail.value)) {
    formEmail.classList.add("error");
    isFormValid = false;
  } else {
    formEmail.classList.remove("error");
  }

  if (!validatePhone(formPhone.value)) {
    formPhone.classList.add("error");
    isFormValid = false;
  } else {
    formPhone.classList.remove("error");
  }

  // Предположим, что у нас есть элемент формы для имени с классом .form-name
  let formName = document.querySelector(".form-name");
  if (!validateName(formName.value)) {
    formName.classList.add("error");
    isFormValid = false;
  } else {
    formName.classList.remove("error");
  }

  if (emptyInputs.length > 0 || !isFormValid) {
    return false;
  }

  // Если все проверки пройдены, можно отправить форму
  form.submit();
};
