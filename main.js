const TOKEN = "7480871221:AAFPUrkJy7_SB9HfozzsqVqACqURDpAgxcs",
  CHAT_ID = "6163382681",
  URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

let succes = document.querySelector(".succes-application");

let form = document.getElementById("form"),
  formInputs = document.querySelectorAll(".input"),
  formEmail = document.querySelector(".form-email"),
  formPhone = document.querySelector(".form-phone"),
  formName = document.querySelector(".form-name"),
  formButton = document.querySelector(".form-submit-button");

// Валидация электронной почты
function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Валидация имени и фамилии
function validateFullName(fullName) {
  let re = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{2,}\s[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]{2,}$/; // Имя и фамилия должны содержать только буквы и быть не менее 2 символов, разделены пробелом
  return re.test(String(fullName));
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

  if (!validateFullName(formName.value)) {
    formName.classList.add("error");
    isFormValid = false;
  } else {
    formName.classList.remove("error");
  }

  if (emptyInputs.length > 0 || !isFormValid) {
    return false;
  }

  // Если все проверки пройдены, можно отправить данные
  let message = `<b>Заявка с сайта Powercode Academy!</b>\n`;
  message += `<b>Имя пользователя: </b> ${formName.value}\n`;
  message += `<b>Телефон пользователя: </b> ${formPhone.value}\n`;
  message += `<b>Почта пользователя: </b> ${formEmail.value}`;

  axios
    .post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
    .then((res) => {
      formName.value = "";
      formPhone.value = "";
      formEmail.value = "";
      succes.style.display = "flex";
    })
    .catch((err) => {
      console.warn(err);
    });

  return true;
};
