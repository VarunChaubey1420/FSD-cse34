// const mod = (N,D) => ((N%D)+D)%D;
// console.log(mod(2,5));

// let n = 10;
// if(n<20){
//     let x = 15;
//     console.log(x);
// }
// console.log(x);
// var year = 2100;
// if(year%100==0){
//     if (year % 400 == 0) {
//       console.log("Leap year");
//     } else {
//       console.log("Not leap year");
//     }
// }
// else{
//     if (year % 4 == 0) {
//       console.log("Leap year");
//     } else {
//       console.log("Not leap year");
//     }
// }
// year % 100 == 0?(year % 400 == 0?console.log("Leap year"):console.log("Not leap year")):(year % 4 == 0?console.log("Leap year"):console.log("Not leap year"));
// let x = '+';
// let a = 5;
// let b = 3;
// switch (x) {
//     case '+':
//         console.log(a+b);
//         break;
//     case '-':
//         console.log(a-b);
//         break;
//     case '*':
//         console.log(a*b);
//         break;
//     case '/':
//         console.log(a/b);
//         break;
//     case '%':
//         console.log(a%b);
//     default:
//         console.log("Incorrect Operator");
// }

// var year = 2100;
// if ( year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
//   console.log("Leap year");
// } else {
//   console.log("Not Leap year");
// }
// let i=56342;
// let sum=0;
// for(let a=0;a<5;a++){
//     sum+=i%10;
//     i=Math.floor(i / 10);
// }
// console.log(sum)
// let i=56342;
// let ans=0;
// for(let a=0;a<5;a++){
//     ans=ans*10+i%10;
//     i=Math.floor(i / 10);
// }
// console.log(ans)

// let a = 0;
// let b = 1;
// for (let i = 0; i < 10; i++) {
//   console.log(a);
//   let c = a + b;
//   a = b;
//   b = c;
// }

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Enter first three number: ", (input) => {
//   let [a, b, c] = input.split(" ").map(Number);
//     for (let i = 0; i < 10; i++) {
//         console.log(a);
//         let d = a + b + c;
//         a = b;
//         b = c;
//         c = d;
//     }
//   rl.close();
// });

// let b = 1;
// let c = 2;
// for (let i = 0; i < 10; i++) {
//   console.log(a);
//   let d = a + b + c;
//   a = b;
//   b = c;
//   c = d;
// }

// let x = 4,
//   y = 0,
//   z;
// while (x >= 0) {
//   x--;
//   y++;
//   if (x == y) {
//     break;
//   } else {
//     console.log(x, y);
//   }
// }

// let x = 4,
//   y = 0,
//   z;
// while (x >= 0) {
//   x--;
//   y++;
//   if (x == y) {
//     continue;
//   } else {
//     console.log(x, y);
//   }
// }
// let x = (10, 10+30);
// console.log(x);
// let i,j;
// let a=[1,2,3,4,5];
// for(i = 0,j=a.length-1;i<j;i++,j--){
//     let x=a[i];
//     a[i]=a[j];
//     a[j]=x;
// }
// console.log(a);
// if(true){
//     var x = "CSE";
//     console.log(x);
// }
// console.log(x);
// console.log(x);
// var x = 3.4;
// let name = 'java';
// function example(){    
//     console.log(name);
// }
// if (true) {
//   console.log(name);
// }

// console.log(name);
// example();

//hoisting
