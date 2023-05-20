//Increment & Decrement Revision:--
// let a=10
// b= ++a
// console.log(a,b)
// ++a matlab [add(jorega) take(legaa) give(degaa)] a++ matlab [take(legaa) add(joregaa) give(degaa)].
// let a=10
// b= a++
// console.log(a,b)

//javaScript Bitwise[logical] Operator:--
// << zero fill left shift.
// >>> zero fill right shift.      // these are java script bitwise operators.
// >> signed right shift 
// For Example:--
// let x=6<<1  //yha <<[zero fill left shift] matlab 6 ka binary (110) me 1 zero aur shift karna hai means baithana/add karna hai so ab 1100 ho
// console.log(x);//jaayega, aur 12 ka binary digit 1100 hota hai isliye output me answer 12 aayega.{haa name dosn't matter jidhar muh udhar zero}

// let text = "hello 654465 world"
// console.log(text)
//all are string, doesn'matter number and text under inverted comaa["..."] all are strings.

// const name = 'ram';
// const name1 = "hari";
// const result = `The names are ${name} and ${name1}`;
// console.log(result)
//we represent strings by single quotes['...'], double quotes["..."],Backticks[`...`]


//Examples of number data types:--

// const num=3e5
// console.log(num)
//e5 matlab panch zero aage add ho jaayega.

// const number1 = 3;
// const number2 = 3.433;
// const number3 = 3e5 // 3 * 10^5
// console.log(number1)
// console.log(number2)
// console.log(number3)

// const hugeString = BigInt("9007199254740991")
// console.log(hugeString)// 9007199254740991n
//is tarah se BigInt kaa use karte hai. 

// const number1 = 3/0;
// console.log(number1); // Infinity
// const number2 = -3/0;
// console.log(number2); // -Infinity
// const number3 = "abc"/3;// strings can't be divided by numbers.
// console.log(number3); // NaN

//boolean data types:--
// const dataChecked = true;
// const valueCounted = false;
// console.log(dataChecked)
// console.log(valueCounted)

//undefined data types:--
// let name;
// console.log(name); // undefined
// let name = undefined;
// console.log(name); // undefined

//null data types:--
// const number = null;
// console.log(number)

//object data types:--
// const student = {
//     firstName: 'ram',
//     lastName: null,    //yaha ek hii variable multiple data save kar rahe aur isse ko object kahte. 
//     class: 10
//    };
// console.log(student)   

//Note :-
//● JavaScript is a dynamically typed (loosely typed) language.
//● JavaScript automatically determines the variable’s data type.
//● It also means that a variable can be of one data type and later it can be changed
//to another data type. For example,

// let data;//data is of undefined type 
//     data = 5;//data is of integer type
//     data = "JavaScript Programming";//data is of string type
// console.log(data); //final value show karta hai aur karegaa.
