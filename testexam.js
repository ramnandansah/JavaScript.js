// console.log("CLASS TEST SOME QUESTIONS NEEDS TO PRACTICE:--");

// let city = ["California", "Barcelona", "Paris", "Kathmandu"];
// let len = city.length;
// console.log(len); // 4

// var languages = ["JavaScript", "Python", "C++", "Java", "Php"];
// languages.length = 3
// console.log(languages) // [ 'JavaScript', 'Python', 'C++' ]

// var values=["Three","two","one"];        //      [***]
// var ans=values.shift();  
// console.log(ans); // Three [matlab shif() first element ko hata deta hai aur agar variable ke through shift() use kiye hai to jo hata hai
// value wo us variable me store ho jaayega aur agarb console me wo variable print karwaaye to hata value print ho jaayega.]

// var values=[4,5,6,7]                       //       [***]
// var ans=values.slice(1);  
// console.log(ans); //[ 5, 6, 7 ] //.slice ke () jo length value[not index value] denge wo length value kaa element hata ke baaki remaining values
//ko use kiye hue variable me store kar lega. phir uss variable ko console karwaayenge to to sara naya chata hua element print hoga.
//haan ye shift kaa poorak jais akaam karta hai qki .shift hata hua value ko store karta hai lakin .slice hata hua value ko chor baaki value store
//karta hai. ek baat aur shift kaa () me kuch naa hota jabki .slice ka () me length[(1/xyz)] hota.

// var emptyArray = [];
// console.log(emptyArray.length); // 0

// var a = [1,2,3,4,5];
// str=a.slice(3);   
// console.log(a);   //haan a yaani purna array jaise kaa taise rahega.
// console.log(str);  //considering point slice me yadi 3 value denge to 123 yaani 3tak sara value hata ke baaki remaing value store kar lega.

// var sum = 0;
// var arr = [10, 15, 20, 30];
// arr.forEach(function myFunction(element) //yaha pe forEach ke kaaran function(element) function kaa argument element kaa ek ek elemnet 
// {
//     sum = sum + element;                //sum = sum + element yaani sum= 0+10 phir /10[sum kaa value]+15/ 25+20/ 45+30 iss tarah se sum kaa  
// });
// console.log(sum);  // 75                 //value 75 joki sum ko console karne se print ho jaayega.

// var a = [1,2,3,4,5];
// str=a.pop();  
// console.log(a);   //[ 1, 2, 3, 4 ]  //pahle wla array destroy ho jaata pop method use karne se.
// console.log(str);   //5      //variable laga ke use karenge to hata value variable me store ho jaayega.

// var i=true;
// var j=false;
// var k=true;
// if( i || J && K){
// a=10;
// b="True";
// }
// else {
// a=20;
// b="False";
// }
// console.log(a+","+b);

// x = 3
// while (3==3) {console.log(x)} //infintite time 3 

// let x=0;
// for(x;x<10;x++);
// console.log(x);

// var sum=0;  

// var arr=[101,150,201,30];  

// arr.forEach(function myFunction(element)  
// {  
//     sum=sum+element;  
// });  
// // console.log(sum);

// var tensquared=(function(x)
// {return x*x;}
// (10));  
// console.log(tensquared);

// var tensquared= function (x) {
//     return x*x;
// }
// var c = tensquared(10)
// console.log(c);

// var pow= new Function("num1","num2","return Math.pow(num1,num2)");  
// console.log(pow(2,3));      //Math.pow matlab yadi 2 num 2 aur 3 hai to 2*2*2  [2 kaa power 3 ho jaayega]

// var addition = new Function("number1", "number2", "return number1+number2");
// console.log((addition(10, 5)));

// vararr=[1, 3, 5, 8 ,11];  
// var value =Math.max.apply(null,arr);    //complicated nostudy
// document.writeln(value);  

// var arr = [1, 3, 5, 8, 11];
// //// console.log(...arr,"...arr");
// let value = Math.max(...arr)
// console.log(value);

// let arr2 = [55,84,11,100,1000,22]
// let arr3 = arr2.sort((a,b) => a-b)      
// console.log(arr3,"assending");
// //Sort ka ((a,b) => a-b) ye part me a-b yaa b-a ke kaaran assending yaa decending ho raha and rem it.
// let arr21 = [55,84,11,100,1000,22]
// let arr31 = arr2.sort((a,b) => b-a)
// console.log(arr31,"dssending");

// function myFunction() {
//     var i;
//     for (i = 0; i < 5; i++) {
//         if (i === 3) {
//             continue;    //ganga snan
//         }
//         console.log(i);
//     }
// }
// myFunction();  


// var val = "JavaScript String"
// splittedVal1 = val.split('a',2)    //'a' yaha bhi a se do bhag me split kar raha aur avaScript string nahi aaya qki ek aur a aa raha naa islye 
// console.log(splittedVal1);                                                             //sirf v hii aaya 2nd bhaag me.


// const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
// console.log(event.toLocaleString('en-IN', { timeZone: 'UTC' }));  //20/12/2012, 3:00:00 am //Date padhenge to bsamjhege rem it.


// var materials = [
//     'Hydrogen',
//     'Helium',
//     'Lithium',
//     'Beryllium'
// ];
// console.log(materials.map(material => material.length));   //[ 8, 6, 7, 9 ]  //clear hai .map lgane baad yaha ek fun init kiye hai


// var todaysDate = new Date()
// console.log( todaysDate.toLocaleString() );
//2/5/2023, 9:51:23 pm //for current date and time code in js.
//pahle Date name se ek constructor banayenge, phir usme .toLocaleString() naam kaa fun console
//rakh ke code run karenge.


// let x = "Hello, IncludeHelp!";
// drs = x.slice(-12,-1);
// console.log(drs);


// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Lydia';
//     let age = 21;
// }          //sahi baat hai yaha undefined or reference error bataayegaa. qki name console karane baad define kiya gaya hai. aur dusra console age
// sayHi();   //kaa koi tha pata hii nahi hai.


// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius * 2;        
//     },
//     perimeter: () => 2 * Math.PI * this.radius,    //Saayed qki this.radius kaa use object yaani {} ke andar hii use kiya jaata.
//     // perimeter(){
//     //     return 2 * Math.PI * this.radius;       //yaha se confirm hua // yaha output 62.83185307179586 milega.
//     // },
// };
// console.log(shape.diameter());
// console.log(shape.perimeter());
// console.log(Math.PI);

// let c = { greeting: 'Hey!' };
// let d;
// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);   //Sahi baat hai Hello Aayegaa


// const obj = { a: 'one', b: 'two', a: 'three' };    //a dobaar me confirm hua pahle one tha phir three. isliye  { a: 'three', b: 'two' }
// console.log(obj);


// function checkAge(data) {
//     if (data === { age: 18 }) {
//         console.log('You are an adult!');
//     } else if (data == { age: 18 }) {
//         console.log('You are still an adult.');
//     } else {
//         console.log(`Hmm.. You don't have an age I guess`);    
//     }
// }
// checkAge({ age: 18 });  //yaha age: 18 ek object hai aur use {} ke andar hii likha jaa sakta hai


// async function f() {
//     let result = 'first!';
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('done!'), 1000);
//     });
//     result = await promise;
//     console.log(result);
// }
// f();   //output done! hoga qki settimeout function me resolve me done! print karwaaye hai


// const sum = eval('10*10+5');
// console.log(sum);


// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000);   
// }
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000);
// }
//note:--yaha var aur let kaa kamaal hai, so rem it.


// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(1, '2'));  //Sahi hai 12 print ho jaayegaa.


// let a = 3;
// let b = new Number(3);
// let c = 3;
// console.log(a == b);   //true
// console.log(a === b);  //false
// console.log(b === c);  //false


// console.log(+true);  //iska matlab 1 hota hai rem it.
// console.log(!"kuch bhi");   //iska matlab ! laga ke kuch bhi de to false ho jaayega


// let number = 0;
// console.log(number++);   //accha yaha i++ hai yaani pahle lega phir increment karega, yaha liya 0 aur increment karke hua 1
// console.log(++number);   //yaha ++i hai yaani pahle increment karerga phir phir legaa., yaha 1 me increment kiya to hua 2 aur liya bhi 2
// console.log(number);     //Yha jo numnber hoga wo print ho jaayega aur lasr time, number kaa value 2 store hua 2nd console baad. 


// function Car() {
//     this.make = 'Lamborghini';
//     return { make: 'Maserati' };
// }
// const myCar = new Car();
// console.log(myCar.make);  //simple hai make kaa value baad me return ke through update hoke Maserati ho gaya hai.


// const numbers = [1, 2, 3];
// numbers[10] = 11;  //yha numbers me 10wa index pe 11 value add kar rahe hai
// console.log(numbers);  //Output: [ 1, 2, 3, <7 empty items>, 11 ]


// function greeting() {
//     throw 'Hello world!';
// }
// function sayHi() {
//     try {
//         const data = greeting();
//         console.log('It worked!', data);
//     } catch (e) {
//         console.log('Oh no an error:', e); //rem it 
//     }
// }
// sayHi();
//Ise jaane de iske liye error.js kaa 171 186 line + pura error.js read karna hoga


// console.log(!!null);
// console.log(!!'');
// console.log(!'5');
// console.log(!!'5');
// console.log(!!1);
//Note:--
//Iska yaani !! kaa use kiye jata hai value hai yaa nahi hai check karne keliye agar !! ke baad kuch value ho to true otw false yahi funda hai.


// const foo = () => console.log('First');   //ye pahle print hoga.
// const bar = () => setTimeout(() => console.log('Second'));  //isme time lagega settime out function excute hone me
// const baz = () => console.log('Third');  //isme time nahi lagaga second wla se pahle ho jaayega execute.
// bar(); 
// foo(); //isme time lga settime out function ke kaaran isliye isse pahle baz function execute ho jaayegaa.
// baz();

// const foo1 = () => console.log('First');   
// const bar1 = () => console.log('Second');  
// const baz1 = () => console.log('Third');  
// bar1(); 
// foo1(); 
// baz1();
//is condition me function ko jis according call kiya gaya us according console me value print hoga.

// const set = new Set([1, 1, 2, 3, 4]);
// console.log(set);
// //Repeating element ko nahi leta hai aur jitna element hota hai use side me[set(4)/(5)] aur saare element ko function{} ke andar print karata.
// const set1 = new Set([1, 7, 2, 3, 4]);
// console.log(set1);
// console.log(typeof Set ); //ye green color wala set ek function hai jise constructor kaha jata hai.

// const firstPromise = new Promise((res, rej) => {
//     setTimeout(res, 4000, 'one');
// });
// const secondPromise = new Promise((res, rej) => {
//     setTimeout(res, 3000, 'two');
// });
// Promise.race([firstPromise, secondPromise]).then(res => console.log(res));
// Note:--
//Yaha res ko .then handler kii madad se console karwaya gaya aur jis res kaa time priod kam rahega wo print hoga.
//As for example payment hone me jaid waqt lag raha to fail dikhado otw sahi samay me yaani diye hue samay me ho gaya transection to succes.


// const name = 'Lydia';
// //name = 'Lydia';
// age = 21;
// //age = 21;
// console.log( delete name);  //matlab delete kar sakte name ko ans false yaani no because type defined variables can't deleted.
// console.log(delete age);    //matlab delete kar sakte age ko ans true yaani yes because without type defined variables can be deleted.
//Note:--
///The first console.log(delete name) statement will return false because you cannot delete a const variable. It will not remove the name variable
// from the scope, and the value of name will remain 'Lydia'.
//The second console.log(delete age) statement will return true because the age variable is not declared with const. The delete operator will remove
//the age variable from the scope, and subsequent attempts to access `


// setInterval(() => console.log('Hi'), 1000);    //Here Output comes infinte time Hi printed with taking 1 sec  small interval of time.
//answer hogaa iska a unique id.


// const user = { name: 'Lydia', age: 21 };
// const admin = { admin: true, ...user };//...user yaani user kaa saara value spread hoke admin me aa jaayega isliye name aur age bhi print hoga.
// console.log(admin);
// console.log(user);
//output:-- { admin: true, name: 'Lydia', age: 21 }
//          { name: 'Lydia', age: 21 }


// function getInfo(member, year) {
//     member.name = 'Lydia';
//     year = '1998';
// }
// const person = { name: 'Sarah' };
// const birthYear = '1997';
// getInfo(person, birthYear);
// console.log(person, birthYear);   //Birthyear gaya year ke jagah pe aur birthyear ka value hai 1997.
//yaha person gaya member me aur person kaa value hai {name: 'sarah' lakin jaise hii name scan hua pata chala name declare hai function ke andar 
//joki lydia hai aur pahla priority lydia ko milegaa agar lydia ko comment out kar de to sarah legaa check it.}


// function sayHi() {
//     return (() => 0)();
// }
// console.log(typeof sayHi());    sayhi function me 0 return karwaaye hai function ke through aur 0 number hai isliye typeof console me number.


// console.log(typeof 1);             //In this case output is number due to one time declare typeof.
// console.log(typeof typeof 1);      //In this case output is string due to two time declare typeof.


// var a = 10;
// do {
//     a += 1;
//     console.log(a);
// } while (a < 5);
//do while hai yaha condition nahi fullfill kar raha fir bhi 1 baar 10 me ek increment hoke 11 print hogaa, fir condition nahi fullfill hone ke
//loop terminate ho jaayegaa.


// function range(length) {
//     a = 5;
//     for (i = 0; i < length; i++) {
//         console.log(a);
//     }
// }
// range(3);
//yaha output me 0 1 2 ke case me teen baar a kaavalue 5 print ho jaayega. qki range me as an argument 3 pass kiya gaya joki upar length parameter
//ke jagah excute hoga n kaa value 3 yaani n=3 banke.


// var a = 0;
// var b = 0;
// while (a < 3) {
//     a++;
//     b += a;   //here consider b=b+a then you easily understand.
//     console.log(b);
// }
//Output:-- 1 3 6


// var grade = 'E';
// var result;
// switch (grade) {
//     case 'A':
//         result = "10";
//     case 'B':
//         result = "9";
//     case 'C':
//         result = "8";
//     default:
//         result = "0";
// }
// console.log(result);
//Output:-- 0 qki var result initialise nahi hai isliye by default 0 lega.


// var x = (10 + 20) * 5;
// console.log(x);


// var x = 10 + 20 * 5;
// console.log(x);


// var a = 10;
// do {
//     a += 1;   //iska matlab a=a+1
//     console.log(a);
// } while (a < 5);


// var x = 5;
// console.log(x--);


// var x = 3;
// var y = 2;
// var z = 0;
// if (x == y)
//     document.write(x);
// // elseif(x === y)
// // document.write(x);  
// else 
// console.log(z);


// var size = 5;
// var a = 5;
// var size = 4;
// for (var j = size; j >= 0; j--) {   //sahi hai condition greater than 0 keh raha hai, so don't be confuse 
//     console.log(a);
//     a = a - 2;
// }
//output:-- 5 3 1 -1 -3


// const fruit = {color: "red"}
// fruit.color="blue"
// console.log(fruit);
//yaha const kaa value nahi change ho raha value kaa property change ho raha.

// const fruit = {color: "red"}
// fruit={color:"blue"}
// console.log(fruit);
//yaha const kaa value change ho raha isliye type error show karegaa.


// var a = 10 + 20 + "5";
// console.log(a);


// {
// const fruit = "apple";
// fruit = 'orange';
// console.log(fruit);  //type error batayegaa qki const me reassign aur redeclare allow nahi hai.
// }


// b= 25;
// var b;
// console.log(b);   // output 25 aayegaa koi dikat nahi.


// var name = "Alex" + " " + "Alvin";
// console.log(name);


// console.log(a);
// let a = 10 //here reference error occurs.


// var count = [1, ,3]
// console.log(count);


// var count = [1, , ,3]
// console.log(count);


// var a=0;
// for(a;a<5;a++);
// console.log(a);
//deep analyse 5 hii hogaa.


// var x=0;  
// for(x;x<10;x++);  
// console.log(x); 
//output:- 10 hoga qki simple hai 0 se start huaa aur condition 10 se chota hona chahye, yaani 9 tak loop chalegaa increment hoke value 10 hoga.


// var x=0;  
// for(x;x<10;x++); 
// var x =1
// console.log(x); 

//loop by default ek agla line excute karta hai. dono ko compare karo u better understand.

// var x=0;  
// for(x;x<10;x++); 
// console.log(x); 
// var x =1


// var a = [1, 2, 3, 4, 5]
// var len = a.length, i = 0;
// // if (len == 0)
// //     console.log("Empty Array");
// // else {
//     do {
//         console.log(a[i]);     //here output comes as: 1 2 3 4 5
//     } while (++i < len);      //tab tak i ke value ke according araray element print karao jab tak i ++i hoke len yanni a.length se chota rahe.
// // }
//Yha else me do while loop lagaya gaya hai, aur else condition tab follow hogaa jab if condition nahi follow hogaa yaani len yaani a.length 0 
//nahi hoga aur zero matalab niche example defines:--
// var a = []
// var len = a.length, i = 0;
// if (len == 0)
//     console.log("Empty Array");  //here output comes as: Empty Array
// else {
//     do {
//         console.log(a[i]);
//     } while (++i < len);
// }
//yaha iss case me if condition follow hogaa qki len yaani a.length 0 hai.


// var  height = 123.56;
// var type = (height>=190) ? "tall" : "short";  //agar height kaa value 190 se bara hai to tall console kare otw short.
// console.log(type);  //yaha condition ke according height kaa value 190 se bara nahi hai isliye short print hoga. 
//Yha ternary operator kaa use hua hai 

// option=true;
// let ans= option ?  "yes" :  "no";
// console.log(ans);
//ye bhi ternary operator hai.


// 'use strict';
// age = 21;
// console.log(age);

//'use strict'; lagane se age is not defined aur reference error batayegaa.

// 'use strict';
// age = 21;
// console.log(age);


// let number = 0;
// console.log(number++); //pahle number liya [console me isliye 0 yaha pe] phir increment kiya jise number kaa value 1 store hua.
// console.log(++number); //yaha pahle diya hua value me +1 increment kiya phir value hua 2 aur console 2 hua aur store bhi 2 hua
// console.log(number);   //lastly hamne number kaa value 2 store kiya, aur yaha sidhe number ko console karwaaye isliye 2 hoga


// let a = 3;
// let b = new Number(3);
// let c = 3;
// console.log(a == b); //sahi baat hai value barabar hai.
// console.log(a === b); //false hogaa qki type same nahi hai.
// console.log(b === c);  // same as above[2nd] type same nahi hai.
//Output:-- true false false


// console.log(name);
// console.log(age);  
// var name = 'Lydia';
// let age = 21;
//Iskaa answer yaad kar lo undefined aur referece error aayegaa, only for test perpous.


