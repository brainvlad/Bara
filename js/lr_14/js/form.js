$(document).ready(function () {
  $(".form").on("click", ".form__tab-btn", function () {
    $(".form").find(".active").removeClass("active");
    $(this).addClass("active");
    $(".form__tab").eq($(this).index()).addClass("active");
  });
});

let form = document.querySelector("#signin");
let formInputs = document.querySelectorAll(".input");
let inputEmail = document.querySelector("#email");
let inputName = document.querySelector("#name");
let inputSurame = document.querySelector("#surname");
let inputDate = document.querySelector("#date");
let inputPass = document.querySelector("#pass");
let inputCheckbox = document.querySelector("#doc");

function validateEmail(email) {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateCountry(country) {
  let re = new RegExp(".co$");
  return re.test(String(country).toLowerCase());
}

form.onsubmit = function () {
  let emailVal = inputEmail.value,
    emptyInputs = Array.from(formInputs).filter((input) => input.value === "");

  formInputs.forEach(function (input) {
    if (input.value === "") {
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });

  if (emptyInputs.length !== 0) {
    return false;
  }

  if (!validateEmail(emailVal)) {
    inputEmail.classList.add("error");
    return false;
  } else {
    inputEmail.classList.remove("error");
  }

  if (validateCountry(emailVal)) {
    inputEmail.classList.add("error");
    return false;
  } else {
    inputEmail.classList.remove("error");
  }

  if (!inputCheckbox.checked) {
    inputCheckbox.classList.add("error");
    return false;
  } else {
    inputCheckbox.classList.remove("error");
  }
};
