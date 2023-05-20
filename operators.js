// var x=5
// var y=10
// document.getElementById("demo").innerHTML =x+y;
// this one is another way to show output throgh HTML by using js file'

//Arithmetic Operator:-

// const a = 10;
// const b = 20;
// console.log(a + b); //30
// console.log(a + "b"); //10b
// const str = "stingValue";
// console.log(a + str); //10stingValue
//this is addition(+) Aur yaha pe + aur "...." hai aur dono yano + aur " concatenate hua matlab jor deta hai.

// const a = '20';
// const b = "10";
// console.log(a - b); // 10
//concatenatation is not applicable in substraction(-), in substraction string[""] are converted into numbers/value first.
// const a = 10;
// const b = 20;
// console.log(a - b); //-10
//this one is substraction(-).

// const a = 10;
// const b = 20;
// console.log(a * b); //200
//this is multiplication(*).

// const a = 20;
// const b = 10;
// const c = 3;
// console.log(a / b); //2
// console.log(a / c); //6.666666666666667
//this one is division(/).

// const a = 20;
// const b = 10;
// const c = 3;
// console.log(a % b); // 0
// console.log(a % c); // 2
// this one is modulus(%). [means showing remainder of divion.]

// a=1
// b=a++
// console.log(a)//2
// console.log(b)//1

// a=1
// b=++a
// console.log(a)//2
// console.log(b)//2

// b=5
// a=++b
// console.log(a)
// console.log(b)

// b=5
// a=b++
// console.log(a)
// console.log(b)

//yaha[yaani post increment(a++) aut pre increment(++a))] me aankh band kar yaad kar le kii, jisme = ke baad ++a rahagaa to pahle durse ke diye 
//value me pahle jorega(+1), phir apne me wo value lega/daalega (yahi pe ++ kaa kaam yani jorne kaa operation/yaani pre increment[++a] kaa kaam 
//khatam ho chuka hai) isliye jo value khud liya wahi value dusre ko dega, matlab jisse value jorne keliye liya tha usko jor ke yaani operation 
//karke dega. {yaha yaad rakho wo value ek startup value/punji tha joki operation ke baad badal jaayegaa} aur process hua badla phir output dikkha.

//Aur jisme = ke baad a++ rahega to pahle dusre ke diye value ko apne value me lega/daalega, phir usme jorke(+1)(yahi pe ++ kaa kaam yani jorne 
//kaa operation/yaani post increment[a++] kaa kaam khatam ho chuka hai) jisse value liya tha usko naya value dega. 

//to remember agar = ke baad  ++ raha to value jor ke lega aur jorke dega.
// aur agar = ke baad a raha yani[a++] to pahle value lega phir joke dega.

//++a me jorega lega phir dega
//a++ me lega jorega phir dega
//{pahle + to pahle jor}
//{pahle a to baadme jor}.
//example:--
// a=10
// b=a++
// console.log(a);
// console.log(b);

//yaha notice karne wali baat ye hai kii is case me a ka value hamesha change hoga:--
//islie a kaa value naa change ho uske liye example (additonal knowledge we can do by other method.) :--
// a=10
// b=a+1
// console.log(a)
// console.log(b)

//in case of substraction:--("same funda as addition")
// a=5
// b=a--
// console.log(a)//4
// console.log(b)//5

// a=5
// b=a--
// console.log(a)//
// console.log(a)//
// console.log(b)//

// a=10
// console.log(a--);//10
// console.log(a);//9

// a=10
// console.log(--a);//9
// console.log(a);//9


//comparision operator:--

//Equallity(==)[it checks value only.]
// const a = 20;
// const b = 10;
// const c = '20';
// const d = '20';
// console.log(a == b); // false
// console.log(a == c); // true
// console.log(c == d); // true

//Strict Equal(===)[it checks value and type both.]
// const a = 20;
// const b = 10;
// const c = '20';
// console.log(a === c); //false[qki a aur c kaa value same hai, but type same nahi hai qki a kaa type integer(20) hai aur c kaa type string("20")
// console.log(a === b); //false[yaha dono ka type same yaani integer hai lakin value alag alag hai a ka 20 aur c kaa 10.]

//Not Equal(!=)[it compare only by value, does'nt matter like string as above(strict equal)]:--
// const a = 20;
// const b = 10;
// const c = '20';
// console.log(a != b); //true[sahi baat hai a kaa value 20 hai aur b kaa value 10 hai, isliye not equal.]
// console.log(a != c); //false[yaha equal hai dono kaa value aur isme type matter bhi nahi karta phir bhi not eqaul kah raha isliye false ho gaya.]

//Strict Not Equal(!==):--{here checks both value and type.}
// const a = 20;
// const b = 10;
// const c = '20';
// console.log(a !== b); //true
// console.log(a !== c); //true

//Greater Than(>):--
// const a = 20;
// const b = 10;
// const c = 30;
// console.log(a > b); //true
// console.log(a > c); //false

//Less Than(<):--
// const a = 20;
// const b = 10;
// const c = 30;
// console.log(a < b); //false
// console.log(a < c); //true

//Greater Than or Equal To[>=]:--
// const a = 20;
// const b = 10;
// const c = 30;
// const d = 20;
// console.log(a >= b); //true
// console.log(a >= c); //false
// console.log(a >= d); //true
//saare greater aur eqaul tak keliye sahi[true] hota hai.

//Less Than or Equal To[<=]:--
// const a = 20;
// const b = 10;
// const c = 30;
// const d = 20;
// console.log(a <= b); //false
// console.log(a <= c); //true
// console.log(a <= d); //true
//saare less aur equal tak keliye sahi[true] hota hai.

//Assignment Operator:--

//Simple Assignment:--
// const num1 = 10;
// const num2 = 10;
// const str = "StringValue";
// const res = num1 + str;
// const num = num1 + num2;
// console.log(res); //10StringValue
// console.log(num);//10

//Addition Assignment[+=]:--
// let num1 = 10;
// let num2 = 5;
// num1 += num2;
// num2 += num2;
// console.log(num1); //15
// console.log(num2); //10
//yaha pe [a+=b] kaa matlab hota hai [a=a+b], Aur yaha code keh raha num1 10 hai num2 5 hai phir num1 me num1 & num2 me num2 jorna hai aur ab 
//1st console num1 kaa value puch raha aur 2nd console num2 kaa value puch raha.[aur baaki ye ghuma ke likha hai, generally sidha rahega (a=a+b).]

//Substraction Assignment[-=]:--
// let num1 = 10;
// const num2 = 5;
// num1 -= num2;
// console.log(num1); //5

//Multiplication Assigment[*=]:--
// let num1 = 10;
// const num2 = 5;
// num1 *= num2;
// console.log(num1); //50

//Remainder/Modulus Assignment[%=]:--
// let num1 = 10;
// const num2 = 5;
// num1 %= num2;
// console.log(num1); //0

//Division Assignment[/=]:--
// let num1 = 10;
// const num2 = 5;
// num1 /= num2;
// console.log(num1); //2

//Logical Operators:--
//1> && (and) Operator:--[for making statement true or false we use such type operator as for example see 3rd not operator's example.]
//   (x<10 && y>1) is true
//2> || (or) Operator:--[same as above and below declaration.]
//   (x==5||y==5) is false
//3> ! (not) Operator:--[suppose x=10, y=20 then without ! statement will be false so we use ! and make the statement true, for thispuspose weuse.]
//   [!(x==y) is true]

//Unary Operators:--

//1>Unary Plus(+)
//  Examples:--
//     opeartion    result
//     +3           3
//     +"+3"        3
//     +"-3"       -3           [imp]
//     +"123e-5"    0.00123     [here written as power of 5]
//     +true        1
//     +False       0

//2>Unary Negation(-)
//Examples:--
//   Operation      Result
//   -3             -3
//   -"3"           -3
//   -"-3"          3      [imp]
//   -"123e-5"      -0.00123
//   -true          -1
//   -false         -0
//   -null          -0


//Miscellanenous Oprators:--

//1.Conditional Operators[?:]:--
// const num1 = 10;
// const num2 = 5;
// const res = num1 > num2 ? 'num1 is greater' : 'num2 is greater';    //[this statement is condition, aur agar condition sahi hoga to num1 is 
// console.log(res); //num1 is greater                                 // is greater hoga nahi to num2 is greater hoga]

// const num1 = 10;
// const num2 = 5;
// const res = num1 > num2 ? 'true':'false';
// console.log(res); //true

//2.typeof Operator:--
// const num = 10;
// const str = "I am string";
// //const num2;
// const bool = true;
// const myFunc = function() {};
// const myObj = {};
// const num3 = null;
// console.log(typeof num); //number
// console.log(typeof str); //string
// console.log(typeof num2); //undefined
// console.log(typeof bool); //boolean
// console.log(typeof myFunc); //function
// console.log(typeof myObj); //object
// console.log(typeof num3); //object
//Note: One of the things to notice here is that typeof null gives an object. Actually, this is a 
//bug in JavaScript which was introduced during its creation in 1995 but this cannot be 
//rectified anymore because a lot of code in the web depends on it and rectifying it will 
//break a lot of websites.


