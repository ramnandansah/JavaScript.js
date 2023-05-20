//how can we assign value of variable throgh user :--*****
// const prompt=require('prompt-sync') ()
// var a;
// a=prompt("Enter Your Name : ")   //jo user ko pahle se dena hai uske liye.
// console.log("a = ", a)           //jo user ne dala wo yaha dikahya jaayega.
//yaha output me batayegaa cannot find 'prompt-sync' qki git bash support nahi karta.
//Uske liye npm init karenge then npm install prompt-sync, phir node module ke andar promt sync install ho jaayegaa, then support and run.
//Now Another One:--
// const prompt=require('prompt-sync') ()
// var name;
// var age;    
// name=prompt("Enter Your Name : ")
// age=prompt("Enter Your age : ")
// console.log("Your Name is = ", name);
// console.log("Your Age is = ", age);
//Agin Another one:--
// const prompt=require('prompt-sync') ()
// let a=parseInt(prompt("Enter First Number : "));
// let b=parseInt(prompt("Enter Second Number : "));
// sum = a+b
// console.log(sum);
//agar parsInt naa lagake prompt define karte to by defult string value gain karta [yaani 10+20=1020 hota] isliye use kiye.


//Q13- WAP to find the power of a number.:--[2^3 = 2*2*2 = 8]
//[2^3 ko a^n ke format me likh sakte hai program likhnme keliye.
//isliye a=2, n=3, i=1
//ab ham chahte hai kii user se a aur n kaa value input karwaaye:--
// const prompt=require('prompt-sync') ()
// let a=parseInt(prompt("Enter Base Number : "));    //a ka value 2 lenge.
// let n=parseInt(prompt("Enter Exponent Number : "));   //n ka value 3 lenge.
// let i=1;
// while(i<=n){   //yaha i aur n ke beech condition rakha gaya.
//     a=a*i    //ye kaise sochte-- hame a^n kaa case generate karna hai, aur n ka increment karenge i++ karke(jiske liye i chahye).
//     i++;      //pahle sir a= ke jagh result= me a*i kaa increment&multiply value store karana chahe lakin galt hua qki base number a ko hii naa
// }       // power dena hai aur usi kaa value naa print karana hai isliye, jo base number maanenge usi me chnge value store karayenge,  
// console.log("Power is :", a)   //aur usi ko console me bhi bulaya jaayegaa. Matlab base number keliye jo varible declar karenge, usi me
//Research:--[lacture of 11 april from 43:25 sec]:--
// const prompt=require('prompt-sync') ()
// let result=parseInt(prompt("Enter Base Number : "));    //a ka value 2 lenge.
// let n=parseInt(prompt("Enter Exponent Number : "));   //n ka value 3 lenge.
// let i=1;
// while(i<=n){   //yaha i aur n ke beech condition rakha gaya.
//     result=result*i    //ye kaise sochte-- hame a^n kaa case generate karna hai, aur n ka increment karenge i++ karke(jiske liye i chahye).
//     i++;      //pahle sir a= ke jagh result= me a*i kaa increment&multiply value store karana chahe lakin galt hua qki base number a ko hii naa
// }       // power dena hai aur usi kaa value naa print karana hai isliye, jo base number maanenge usi me chnge value store karayenge,
// console.log("Power is :", result) 
//[a*i] kaa increment&multiply value store karenge aur usi variable ko console ke though uska looply changed value print karayenge.
//Matlab Base value, store value, function value, console value sabke liye ek hii variable hona chaahye.[isiye 4 baar result likhas.]
//is tarah sochte hai, try karte[sir ke jaise], google support, programic experience. so don't worry.


//[promptprogm upar hai hii hai ab yaha se niche kuch complex progam hai loop kaa.]


//Syntax of for of loop:--
// for(1st var[container] of 2nd var[console])
//Example:--
// let fruits = ["Apple", "Banana", "Orange"];
// for  (X of fruits) {      //x is second variable[console] and fruits is first variable[conatiner]
//   console.log(X);
// }
// used by another process in for loop:--
// let fruits = ["Apple", "Banana", "Orange"];
// for (let i = 0; i < fruits.length; i++) {
//        element =fruits[i];    //yaha ye kah raha kii element fruit hai aur i fke jagah fruits likhaye.
//        console.log(element);
// }

//Wrong Research:--
// let element = ["Apple", "Banana", "Orange"];
// for (let element = yaha kya de; element < element.length; element++) {
//     //    element =fruits[i];    //yaha ye kah raha kii element fruit hai aur i fke jagah fruits likhaye.
//        console.log(element);
// }



//Q13 - WAP to print the sum of digits of a number.:--
// let num=123
// let sum=0
// sum= 1+2+3                   
// console.log(sum);
//iss tarah se kar sakte but agar num =123 ke alawa kuch aur rakhenge to kaam nahi karega.

//Another Process:--
// let num =123
// let sum =0              //0 ke alawa aur kuch rakh bhi nahi sakte qki num kaa value change bhi to karenge.

// for(;num>0;){            //yaha koi dikat hai nahi, hamne loop kaa 1st part[initialiser] aur 3rd part updateExpression empty rakhe.
//   rem=num%10             //iska matlab hua remender of num[123] divided by 10 [hame ek num print karana hogaa uske liye]
//   sum=sum+rem       //isko yaad kar le bhai interview me bhi pucha jata hai kii numko 10 se bhag denge ko kya remender hoga
//   num=parseInt(num/10)  //agar yaha se parseInt hata de to rem[remender]6.665622 aise karke ke aayagaa.(dasamlaw hatane keliye parseInt)
// }    
// console.log(sum);      //yaha pe output 6 yaani [1+2+3] 
//ye do line yaad kar le bhai yaa 10 april ka lacture 43:39 se        
//sum=sum+rem       // jo number nikaale usko yaha sum me rakh diye liye sum kaa use kiye. aur iss statement kaa.  
//num=(num/10)

//e sab questions related confusion dont'worry if not understand.

// let num = 123
// let sum = 0
// for (; num > 0;) {
//     rem = num % 10    //yaha rem nikla joki 3 hoga bhag kaa niche wala rem hota.[in first time wala]
//     sum = sum + rem    //yaha sum badla num nahi.aur condition jab tak true rahegaa badalte rahegaa.
//     num = parseInt(num / 10)   //yaha se num kaa naya value gain kar rahe, bhag deke aur parsInt ke madad se dasamlaw wala hata rahe.
// }
// console.log("for loop", sum);

// let num1 = 123
// let sum1 = 0
// while (num1 > 0) {
//     rem1 = num1 % 10         //yaha rem nikla joki 3 hoga bhag kaa niche wala rem hota.[in first time wala]
//     sum1 = sum1 + rem1      //yaha sum badla num nahi.aur condition jab tak true rahegaa badalte rahegaa.
//     num1 = parseInt(num1 / 10)      //yaha se num kaa naya value gain kar rahe, bhag deke aur parsInt ke madad se dasamlaw wala hata rahe.
// }
// console.log("while loop", sum1);



//Example 2: Display sum of first five natural numbers i.e.1 to 5[1+2+3+4+5=15]:--
// program to display sum of first five natural numbers:--
// initialize the variable:--
// let number = 1;
// const n = 5;
// let sum = 0;
// do {
//  sum = sum + number;     //in first case yaha number = 1 aaya so case 1 me sum 1 ho jaayega aur number 1 to hai hii.
//  number = number + 1;     // number++ // number +=1
//  //console.log(`number is ${number} and sum is ${sum}`);     // ye mechanism hai for understand, jisko hamne print karaya hai. 
// } 
// while (number <= n)    // do...while loop from i = 1 to 5
// console.log(`The sum is ${sum}.`);
//Try to understand step by step it's so simple.



