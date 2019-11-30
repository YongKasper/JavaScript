"usw strict"

// let array = ["summer", "winter", "spring", "autom"]

// console.log(array.length);

// array[0] = "Hello world";
// array[2] = "Bugs";

// console.table(array)

// const string = "hello world my friends"

// console.log(Array.isArray(array))

// string.split("");

// console.log(string.split("").join("") .indexOf("").includs("") );

// const arr = [];

// arr.push(1,2,3,4); //добавление в конец
// arr.unshift(10, 5); //добавлене в начало
// arr.pop(); //удаление с конца
// arr.shift() //удаление с начала

// const arr = ["a", "b", "c", "d", "e"];
// const arrNum = [1,2,3,4,5,6];

// const newArr = arrStr.concat(arrNum)
// const newArr = arr.splice(0, 2);
// // const newArr = arr.slice();
// console.log(arr);
// console.log(newArr);

/*
* Есть массив имен пользователей
* Используя методы массива, последовательно выполнить указанные операции
*/

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// // Удалить первый элемент массива
// users.shift()
// console.log(users); // ["Poly", "Ajax", "Chelsey"]

// // Удалить последний элемент массива
// users.pop
// console.log(users); // ["Poly", "Ajax"]

// // Добавить в начало массива пользователя "Lux"
// users.unshift(Lyx)
// console.log(users); // ["Lux", "Poly", "Ajax"]

// // Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
// users.push("Kivi","Jay" )
// console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// // Удалить из массива элемент хранящийся в переменной userToDelete

// const userToDelete = "Ajax";
// users.splice(users.indexOf(usersToDelite), 1)
// console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// // Добавить в массив пользователя "Kong", перед пользователем хранящейся в переменной userToInsertBefore
// const userToInsertBefore = "Jay";
// users.splice(users.indexOf(userToInsertBefore) - 1, 0, "Kong");
// console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]

// const i = 0;
// while (i < 10) {
//  i += 1;
//  console.log("counter", i);
    
// }

// const reservedPlase = 25;
// let takenPlase = 18;

// while (takenPlase < reservedPlase) {
//     takenPlase++;
//     console.log();
    
// }

// const arr = ["Ajax", "Mongo", "Jay", "Hello",]
// let i = 0;

// while (i < arr.lenght){
//     console.log(arr[i]);
//     i++;
// }

// let i =0;
// const arr = ["a", "b", "c", "d", "e", "n"]
// do{
// console.log(arr[i]);
// i++;
// console.log(i);


// }while(i < arr.lenght)

// for(let i = 0; i < arr.lenght; i++){
//     console.log(arr[i]);
// }

// for(let i = 0, max = 10; i < max; i += 1) {
//     console.log(`${max} % ${i} = `, max % i);
//   }

// const arr = ["a", "b", "c", "d", "e", "n"]

// for(let a of arr){
//     console.log(a);
    
// }
// if (value === clientName) {
//     resultMsg = "Клиент с таким именем есть в базе данных!";
//     break;
//   }

/*
* Есть массив имен пользователей users
*
* Напиши цикл, который для каждого пользователя будет выводить в консоль
* сообщение в формате [номер элемента] - [значение элемента]. 
* 
* Нумерация должна начинаться с 1. К примеру для первого элемента массива
* с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'
*
* Цикл должен выводить сообщения до тех пор, пока не закончатся элементы массива
*/

const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];


for(let i= 0; i < i < users.length; i++){
    console.log(`${i + 1} - ${users[i]}`);
    
}