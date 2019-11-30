"use strict";


// const adminLogin = "admin";
// const adminPassword = "m4ngo1zh4ackz0r";

// let a = prompt("login, please:");

// if (a === adminLogin) {
//   let b = prompt("password, please:");
//   if (b === adminPassword) {
//     alert("Добро пожаловать!");
//   } else if (!b) {
//     alert("Отменено пользователем!");
//   } else {
//     alert("Доступ запрещен, неверный пароль!");
//   }
// } else if (!a) {
//   alert("Отменено пользователем!");
// } else {
//   alert("Доступ запрещен, неверный логин!");

// }

const numberOfSeats = prompt("Ввести число необходимых мест");

// console.log(+numberOfSeats);
if (Number.isInteger(+numberOfSeats)) {
  if (numberOfSeats <= 6) {
    const taba = confirm("we have place in Taba gruoup");
    if (taba) {
      alert("Приятного путешествия в группе Taba");
    } else {
      alert("Нам очень жаль, приходите еще!");
    }
  } else if (numberOfSeats > 6 && numberOfSeats <= 15) {
    const sharm = confirm("we have place in Sharm gruoup");
    if (sharm) {
      alert("Приятного путешествия в группе Sharm");
    } else {
      alert("Нам очень жаль, приходите еще!");
    }
  } else if (numberOfSeats > 15 && numberOfSeats <= 25) {
    const hurgada = confirm("we have place in Hurgada gruoup");
    if (hurgada) {
      alert("Приятного путешествия в группе Hurgada");
    } else {
      alert("Нам очень жаль, приходите еще!");
    }
  } else {
    alert("Извините, столько мест нет ни в одной группе!");
  }
} else {
  alert("Ошибка ввода");
}
    