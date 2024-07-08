const TOKEN = "7480871221:AAFPUrkJy7_SB9HfozzsqVqACqURDpAgxcs";
const CHAT_ID = "357344164";
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

let succes = document.querySelector(".succes-application");

document.querySelector(".hero-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let message = `<b>Заявка с сайта Powercode Academy!</b>\n`;
  message += `<b>Имя пользователя: </b> ${this.name.value}\n`;
  message += `<b>Телефон пользователя: </b> ${this.phone.value}\n`;
  message += `<b>Почта пользователя: </b> ${this.email.value}`;

  axios
    .post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
    .then((res) => {
      this.name.value = "";
      this.phone.value = "";
      this.email.value = "";
      succes.style.display = "flex";
    })
    .catch((err) => {
      console.warn(err);
    })
    .finally(() => {});
});
