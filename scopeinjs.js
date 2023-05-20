// let a=10 //global scope
// {
//     let a=20  //local scope
//     console.log(a);  //local scope
// }
// console.log(a); //global scope


//● Global scope: The variables that you declare outside of functions. it is called global variables.
//● Local scope: The variables that you declare inside a function. It is called local variables.
//● Block scope: ES6 provides the let and const keywords that allow you to declare variables in block scope.Generally, whenever you see this 
//curly brackets { }, it is called a block.
//● Scope chain: The way that JavaScript resolves a variable is by looking at its current scope, if it cannot find the variable, it goes up to
// the outer scope, which is called the scope chain.
//Example of scope chain:--
// let a=10
// {
//     let a=20
//     {
//         {
//           console.log(a);
//         }
//     }
// }
// console.log(a)
//matlab pahle apne area me variable kaa value khojegaa, then theek upar waale area me, then phir ussse upar waale me, aur iss tarah ke process
//ko scope chain kahte hai.

//Another one Example:--
// const a=20; //global scope
// {
//     const a=10; //top block [local scope]
//     {
//         const a=40; //outer block
//         {
//             const a=30; // inner block
//             console.log(a);
//         }
//     }
// }
// console.log(a);

//global scope -- works in function and curly bracket{} both.
//local scope -- works in function only.
//block scope -- works in curly bracket{} only.

//Clearification between Global or Local Variable/scope:--
// var message = 'Hi';
// function say()
// {
//  var message = 'Hello';
//  console.log(message);//Hello
// }
// say();
// console.log(message);//Hi

//Global variable leaks: the weird part of JavaScript:--
// function getCounter()
// {
//     counter = 10;
//     return counter;
// }
// getCounter();
// console.log(getCounter());
// yaha counter ko locally scope kiya gaya hai but wo {} bahar call karne pe print ho raha hai ye javascript kaa counter ke saath leak/fault hai. 
//counter ke sath let laga de to let counter globally scoped ho jaa raha hai, ye isi leak/fault kaa parinaam hai. aur bahar call karne pe bhi 
//work kar raha hai, jabki let function ke andar agar declar hai to function ke andar hii call hogaa.

// {
//     let x=10
// }
// console.log(x)

// {
//     var x=10
// }
// console.log(x)

//To manage this counter javascript leaks/faults we use 'use strict':-- 
// 'use strict'
// function getCounter()
// {
//  counter = 10;
//  return counter;
// }
// console.log(getCounter());
//inthis case we use 'use strict' so calling function cosole.log is not called outside of function, so here output is counter is not defined.  
// function getCounter() {
//     'use strict'
//     counter = 10;
//     return counter;
//    }
//    console.log(getCounter());


//Example Of Block Scope:--
// function say(message)
// {
//     if(!message) //if not[!] message, agar koi message nahi hai to,
//     {
//     let greeting = 'Hello'; // greeting kaa value Hello ho [block scope].
//     console.log(greeting);
//     }
// console.log(greeting); // ReferenceError due to greeting is not defined outside, greeting is only defined under{}.
// }
// say();
//note:-- yaha koi bhi msg declared nahi hai isliye Hello print ho raha.

// var text = 'outside';
// function logIt()
// {
//     console.log(text);
//     var text = 'inside'; //here hoistng creating.
// };
// logIt();
//Console.log Pahle text kaa value apne scope[block] me khojegaa, pata chalegaa hoising ho raha isliye undefined batayega.
//agar hoising naa hota aur text kaa value us scope[block] me naa hota to, to bahar ke block me search kar text kaa value otside print karata.

// var text = 'outside';
// function logIt()
// {
//   console.log(text);
//   text = 'inside'; //no hoistng due to not delared so this statment does not responding by console and go to another block for searching value.
// };
// logIt();

// function foo() 
// {
//     let a = b = 0;  //is type ke condtion mer a ko koi valuue nahi milegaa sirf b ko value 0 milegaa qkii sirf last wala value gain karega.
//      a++;    //a to defined hii nahi hai to yaha increement se kya faida , isliye yaha increment kaam nahi karega.
//     return a;
// }
//     foo();
//     console.log(typeof a); // isliye a ka type undefined batayega.
//     console.log(typeof b); // aur b kaa type number batayegaa qki b kaa value 0 assign hua hai.
//note:-- agar iss type kaa single increment raha to sirf ek jor denge jisme increment raha.
// function foo() 
// {
//     var a=b=0;
//     b++;
//     return b;
// }
// foo()
// console.log(typeof a);// yaha type puchoge to undefined bta dega, lakin value print karane waqt not defined kaa error batayegaa.
// console.log(b);//1 degaa qki 0 pahle assign ho chuka tha aur b++ ke karan +1 add hoke 0se1 ban gaya.

// const name = 'workattech';
// function printName()
// {
//  console.log(name);  //no doubt clear hai.
// }
// printName();

// function printName()
// {
//     const name = 'workattech';
//     console.log(name); //no output qki function ko ko call karna parta hai, joki maine kiya hai.
// }
// //printName() //agar function banaye hai aur function call nahi kiye to program run nahinhoga.
//   // console.log(name);//{}ke bahar name defined nahi hai, isliye name not defined ka error aayegaa.

// let x = 5;
// if(x === 5)
// {
//  const a = x;
//  console.log(a); //output value 5 aayegaa qki condition keh raha kii agar x ka value[5] aur type[number] hai to a=x print kara do.
// }
// // console.log(a)// a {}ke bahar defined nahi hai, a is not defined kaa error aayegaa.


