const phoneInputField = document.getElementById("input-phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  initialCountry: "auto",
  geoIpLookup: function (callback) {
    fetch("https://ipinfo.io?token=ipinfo.io/91.238.23.39?token=09bed92e4a94ed", { headers: { Accept: "application/json" }, mode: "no-cors" })
      .then((response) => response.json())
      .then((data) => callback(data.country))
      .catch(() => callback("ua"));
  },
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js",
});
