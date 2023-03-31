// marks1=90;
// marks2=10
// console.log(marks1, marks2);

// var x = 5;
// var y = 6;
// var z = x + y;
// console.log(z)

// let x = 5;
// let y = 6;
// let z = x + y;
// console.log(z)

// const x = 5;
// const y = 6;
// const z = x + y;
// console.log(z)

// const price1 = 5;
// const price2 = 6;
// let total = price1 + price2;
// total = price1 + price2 + 20;
// console.log(total)

// const price1 = 5;
// const price2 = 6;
// const total = price1 + price2;
// total = price1 + price2 + 20;
// console.log(total)
// //here error due to const(line28)matlab const type ka variable kaa value cahnge nahi akr sakte wo fix ho jata value assign karne baad. 

// var a=10
// {
//     console.log(a)
// }
//here no error and bracket[block] does'nt matter because var is globally scoped iska aukaat bracket bracket ke andar bahar sab jagah 
//hota aki global matlab PM in code wo braket matalab state ke andar bhi bhar bhi.

// let a=10
// {
//     console.log(a)
// }
//ye bhi globally scoped hai andar bahar sab var ke tarah.

// const a=10
// {
//     console.log(a)
// }
//ye bhi kaam kar raha matlab var let const teeno globally scoped hai.

// function print()
// {
//     var a=10
// }
// print()
// console.log(a)
//here error occurs due to in case of function var is functionally scoped so it will hear only under function block action, and here we 
//call var ouside of function block by using cosole.log(a) so var not comes and here shows error. 

// function print()
// {
//     var a=10
//     console.log(a)
// }
// print()
//here no error and works because above commented condition fullfills.[means var is functionally scoped]

// function print()
// {
//     {
//         var a=10          //extra additiona case for var under function.
//     }
//     console.log(a)
// }
// print()
//here works var matlab pura function me var karega brackets under function doesn't stop var to role work.

// function print()
// {
//     {
//         let a=10
//     }
//     console.log(a)
// }
// print()
//yaha kaam nahi karegaa qki let block bhar hii raaz karta hai yaani let blockly scoped hai.

// function print()
// {
//     {
//         let a=10
//         console.log(a)
//     }
// }
// print()
//yaha kaam karega qki above condition fullfilled and let works under block.[not function]

// function print()
// {
//     {
//         const a=10
//     }
//     console.log(a)
// }
// print()
//yaha kaam nahi karegaa qki const bhi let ke tarah block bhar hii raaz karta hai yaani let blockly scoped hai.

// function print()
// {
//     {
//         const a=10
//         console.log(a)
//     }
// }
// print()
//yaha kaam karega qki above condition fullfilled and const works under block.[not function]

//***now in redelaration [var can be redeclare but let & const can't be redeclare.(examples are shown below:-d3)]***:--

// var a=10
// var a=20
// console.log(a)
//kaam karegaa aur ise re-declaration kahte hai qki hamne pahle a ka value 10 diya phir kaha nahi a kaa value 20 kar do
//aur phir print karne kaha to naya updated means naya declared valur print kar diya.isi se related conditions hai dekhenge:--

// let a=10
// let a=20
// console.log(a)
//not run because re-declaration property not available for let & const.

// const a=10
// const a=20
// console.log(a)
//not run because re-declaration property not available for let & const.

//***now in re-assigned [var & let can be re-assigned but const can't be re-assigned]***:--

// var a=10
// a=20
// console.log(a)
//var me value re-assigned hoga, isliye hua aur run bhi hogaya.

// let a=10
// a=20
// console.log(a)
//hoga aur work bhi karega qki let me value re-assigned kiya jaa sakta hai.


// const a=10
// a=20
// console.log(a)
//nahi hoga qki const kaa value re-assigned nahi kar sakte hai.

// var x; // x is the name of the variable
// console.log(x); // undefined

// let x; // x is the name of the variable
// console.log(x); // undefined

// const x; // x is the name of the variable
// console.log(x); // undefined
//upar dono me undefined aaya lakin niche jisme const use kiye usme error aaya qki const bina value diye & bina fix kiye usko define nahi 
//kar sakte hai agar aisa karenge to error aayega isliye aaya.


// let message="Hello"
// console.log(message)

// let message="Hello"
// message="World"
// console.log(message)

// let message="Hello"
// let message="World"
// console.log(message)
//yaha error aayega qki do baar let ko declare nahi kar saate hai. remember ek saath do let galat but ek let sahi qki assigned kar sakte.

//   let $$one="Stone"
//     $$one="Lime"
//   console.log($$one)
//we can use or start with double underscore and doble dollar as variable name, but it's not a fair.[remember there is no space between($ & _)] 


