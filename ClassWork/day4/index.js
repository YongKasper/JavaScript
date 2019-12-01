"usw script";

// const abc = function(a, b, c) {
//     return a + b + c;
//   };
  
//   console.log(abc(1, 2, 3));
  
//   const multi = function(a, b, c) {
//     return a * b - c;
//   };
  
//   console.log(multi(1, 2, 5, 3, 5));
  
//   const fnB = function() {
//     console.log("this is function 2");
//   };
  
//   const fnA = function() {
//     console.log("this is function 1");
//     fnB();
//     console.log("This is functions 2 & 1");
//   };
  
//   console.log(fnA());
  
//   const count = function(countFrom = 0, countTo = 10, step = 1) {
//     console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);
  
//     for (let i = countFrom; i <= countTo; i += step) {
//       console.log(i);
//     }
//   };
  
//   console.log(count());
//   console.log(count(5, 21, 2));
//   console.log(count());
  
//   const args = function() {
//     let sum = 0;
  
//     for (let el of arguments) {
//       sum += el;
//     }
//     return arguments[1];
//   };
  
//   console.log(args(1, 2, 3, 4, 5));
  
//   const arrFromArgs = function() {
//     let arr = Array.from(arguments);
  
//     if (arr.includes(5)) {
//       alert("Molodez");
//     } else {
//       alert("Rozbiinik");
//     }
//   };
  
  // arrFromArgs(1, 2, 67, 8, 9);
//   arrFromArgs(1, 3, 5, 6, 8);
  
//   const operator = function(...arg) {
//     console.log(arg);
//   };
  
//   operator("a", "b", "c");
  
  
//   const
// const withdraw = function(amount, balance) {
//     /*
//      * Проверяется условие. Если оно выполняется, происходит
//      * console.log и выход из функции. Код идущий после тела if
//      * не выполнится.
//      */
//     if (amount === 0) {
//       console.log('Для проведения операции введите сумму больше нуля.');
//       return;
//     }
  
//     /*
//      * Если условие первого if не выполнилось, его тело пропускается
//      * и интерпретатор доходит до этого if.
//      * Проверяется условие. Если оно выполняется, происходит
//      * console.log и выход из функции. Код идущий после тела if
//      * не выполнится.
//      */
//     if (amount > balance) {
//       console.log('Недостаточно средств на счету.');
//       return;
//     }
  
//     /*
//      * Если ни один из предыдущих if не выполнился,
//      * интерпретатор доходит до этого кода и выполняет его.
//      */
//     console.log('Операция снятия средств проведена.');
//   };
  
//   withdraw(0, 300); // Для проведения операции введите сумму больше нуля.
//   withdraw(500, 300); // Недостаточно средств на счету.
//   withdraw(100, 300); // Операция снятия средств проведена.
  
// const hello1=function(){
//     alert("Привет, js")
// }



// const hello2=function(name="Gost"){
// console.log(`Privet, ${name}`);

// }
// hello2("MAKAR")
// hello2()

// const repeat = function(str, n=2) {
//     for (let i ; i <= n)
// }
// const c = 4;
// function a () {
//     if (1==1) {

//     }
//     function b () {}
// }

// console.log(c)

// const h =10;
// const sum = function() {
//     let a = 5;
//     console.log(a+ );
    
// }
// sum()

// const hots = function() {
//     let c = 5;

//     const fot = function(){
//         let b = 10;
//         console.log(c + b);
        
//     };
//     return fot()
// }

// hots()

// const sum = function(a,b,c){
//     console.log((a+b+c));
    
// }

// const sum2 = (a,b,c) => a+b

// const rgb = function(){
//     console.log(`rgb(${arguments[0]?arguments[0]:0}, ${arguments[1]?arguments[1]:0}, ${arguments[2]?arguments[2]:0}})`);
//     rgb()
//     rgb(200,160,100)
// }

// const avg = function(...arg){
 
//     console.log( Math.max(...el));
    
//  }
// avg(3,5,6,10,100,50)

// const avg = function(num1, num2){
//     console.log( Math.min);
    
// }

// const rem = function(arr, num){
//     arr.splice(arr.indexOf(num,2))
//     console.log(arr);

// }

// const number = [1,2,3,4,5]
//  rem (number, 3)

// const pass = ["qwery","qwerty321","ajax", "zxcvs"];

// const pass = prompt ("Please, password");
// const ram = function(pass){
// if(pass.length > 6 && pass.lenght < 12 )
// {  
// return true
// } else { return false}
// }
// console.log(ram(pass));
