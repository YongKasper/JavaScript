"use strict";

// const logItems = function(array){
//     for(let i = 0; i < array.length; i++){
//         console.log(`${i+1}-${array[i]}`);
        
//     }
// }



// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

// const calculateEngravingPrice = function (message, pricePerWord){
//     let arr = message.split(" ");
//     let result = pricePerWord*arr.length;
//     return result;
// }

// console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       10,
//     ),
//   ); // 80
  
//   console.log(
//     calculateEngravingPrice(
//       'Proin sociis natoque et magnis parturient montes mus',
//       20,
//     ),
//   ); // 160
  
//   console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200
  
//   console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100


// const findLongestWord = function (string){
//  let max = 0;
//  let longestWord = "";
//  let arr = string.split("");
//  for(let i = 0; i < arr.length; i++){
//     if(max < arr [i].length)
//     max = arr[i].length;
//     longestWord = arr[i]
     
//  }
//  return longestWord
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

// const formatString = function(string){
//     let newStr
//     if(string.length>40) {
//     newStr = string.slice(0,40);

//     }
// }

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// // вернется форматированная строка


// const checkForSpam = function (str){
//     let arr = str.toUpperCase().split('')
//     for (let i = 0; i < arr.length; i++){

//     if(arr[i]) === "SPAM" || nc.include
//     }
// }

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// const hotel = {
//     name: "Hurgada",
//     stars: 5,
//     rooms: ["deluxe", "vip", "lowcost"]
// }

// console.log(hotel.name);
// console.log(hotel["name"]);

// hotel.adress = "Lesi Ukrainki 26a"
// console.log(hotel);

// delete hotel.adress;
// console.log(hote);

// const name = "Taba"
// const stars = 5;

// const newHotel = {
//     name,
//     stars,
//     address: "lesi Ukrainki 26"
// }

// let numbers = [];
// let sum = 0;
// let num;

// let num = prompt("Enter number");
// if( num && Number(num)) {
//     numbers.push(+num);
// } else if (numbers && !num) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++){
//         sum += numbers[i];
//     }
// }else{
//     alert("enter name");
// }
// while (num);

// console.log(sum);


const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  if(login.length <= 16 && login.length >= 4){
      return true;
  }else{
      return false
  }
};

const isLoginUnique = function(allLogins, login) {
  for(let i = 0; i < allLogins.length;i++){
      if(allLogins.includes(login)){
          isUnique=false
      }elses{
          isUnique = true
      }
  }
  return isUnique;
};

const addLogin = function(allLogins, login) {
  if(isLoginValid(login)&& isLoginUnique(allLogins, login))
};

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'


