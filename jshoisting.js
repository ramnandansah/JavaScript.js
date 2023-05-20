// let a=10, b=20, c="ram"
// console.log(a, b, c);
//we can use multiple variable and show multiple output.

//Hoisting is behaviour or feature in javascript which is used before declaration of variable/class/function.
//examples:--

// console.log(x)
// var x 
//yaha hamne x ko declare karne se pahle function ko call kar output maang diya joki undefined aaya, this is called hoisting.
//pahle print kara raha baad me variable ko call kar rahe joki hoising hai.

// console.log(x)
// let x
// console.log(x)
// const x
//upar var x me undefined aaya print karane pe jooki ek data type hai.
//lakin let x yaa const x me uninitialized bataya joki ek error hai.
//ye teeno me var, let aur const me hoising kaa alag alag features hota hai.
//matlab var=undefined, let=uninitialized, const=uninitialized yaani let aur const kaa hoisting nahi kar sakte.

// var x = 2; // Allowed
// let x = 3; // Not allowed
// {
// let x = 2; // Allowed
// let x = 3; // Not allowed      //only for knowledge purpous.
// }{
// let x = 2; // Allowed
// var x = 3; // Not allowed
// }

// let x = 10;
// {
//     let x = 2;
//     console.log(x) // Here x is 2
// }
// console.log(x)// Here x is 10
//yaha let ko redeclare kiya gaya hai aur work bhi kiya qki ek globally scoped hai, to dusra blockly scoped hai.
//iss tarah se const ko bhi redeclare kiya jaa sakta hai.


// const PIE = 3.14159265359;  //Correct
// const PI;         //for knowledge purpous.  
// PI = 3.14159265359;    //Incorrect  

//ye sab feature avaiable hai aur workable hai const ke saath so consider:--

// You can create a constant array:
// const cars = ["Saab", "Volvo", "BMW"];
// cars[0] = "Toyota";// You can change an element:[o ke asthan pe jo hai(saab) uske jagah pe toyota assign kar diye]
// cars.push("Audi");// You can add an element:
// console.log(cars[3])

// const cars = ["Saab", "Volvo", "BMW"];
// cars = ["Toyota", "Volvo", "Audi"]; // ERROR [const array me value reassign yaa redeclare nahi kia jaa sakta.]

// You can create a const object:
// const car = {type:"Fiat", model:"500", color:"white"};
// car.color = "red";// You can change a property:
// car.owner = "Johnson";// You can add a property:

// const car = {type:"Fiat", model:"500", color:"white"};
// car = {type:"Volvo", model:"EX60", color:"red"}; // ERROR[cosnt object me value reassign yaa redeclare nahi kar sakte hai.]

//● Hoisting in JavaScript is a behaviour in which a function or a variable can be used before declaration.
// For example,

// console.log(test); // Using test before declaring
// var test;// undefined
//in both case above and below program output will be same undefined.
// var test;// undefined
// console.log(test); // Using test before declaring

//● Since the variable test is only declared and has no value, undefined value is assigned to it.
//Which is checked before in program that test named var is available or not during time of declaration.


//● One of the advantages of hoisting is that it lets you use a function before you declare it in your code.
//Example of hoisting in case of function:--
// catName("Tiger");
// function catName(name)
// {
// console.log(`My cat's name is ${name}`);//The result of the code above is: "My cat's name is Tiger"
// }
//yaha catname variable hai jiska value tiger hai, yaha hamne pahle variable declare kiya phir function ko call kiya.
//yaha function ke case me hoisting hua qki pahle function call hota hai phir variable declation, lakin yaha hoisting ho raha isliye program runs.  

//● Without hoisting you would have to write the same code like this:
// function catName(name) 
// {
//     console.log(`My cat's name is ${name}`);
// }
// catName("Tiger");
//The result of the code above is the same: "My cat's name is Tiger"

// program to print the text
// greet();
// function greet()
// {
// console.log(great) 
// }
//yha error show karegaa qki greet ko delare kiye hai but define nahi kiye. agar define kar dete to hoisting kaam karta. 
//However JavaScript only hoists declarations, not initializations/define!   [hoising matlab support]


//Examples of var hoisting:-- [above one is function hoisting and that's one is normal hoisting.]
// console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)[hoisting applied here]
// num = 6; // Initialization
// var num; // Declaration
// console.log(num); // Returns 6 after the line with initialization is executed[without hoising]
//yaha pahle console.log likh ke hoisting kiye to undefined diya matlab var hoisting case me javascript sirf declaration ko hoisting karta hai.
// console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)[hoisting applied here]
// var num = 6; // Initialization and declaration.
// console.log(num); // Returns 6 after the line with initialization is executed.[without hoising]
//niskarsh ye hua kii javascript sirf declaration ho hoising[support] karta hai. initializations ko nahi(value do yaa naa do hoisting ke case 
//me fark nahi karta.)qki value dena initialization kehlata hai aur , variable call karna declation kehlata hai)*in case of var*.

//Examples of let & Const hoisting:--
// console.log(num); // Throws ReferenceError exception as the variable value is uninitialized
// let num = 6; // Initialization & Declaration
//let ke case me declaration bhi hoist nahi hua error bata diya matlab let ke case me naa initialisztaion hoist hoga naa declartaion.
// console.log(num);// Throws ReferenceError exception as the variable value is uninitialized
// const num = 6; //Initialization & Declaration
//const ke case me bhi declaration bhi hoist nahi hua error bata diya matlab let ke case me naa initialisztaion hoist hoga naa declartaion.

//conclusion:--
//incase of var only declaration hoisted.
//incase of let neither declaration nor initialization hoisted.
//incase of const neither declaration nor initialization hoisted.
//aur ye jo initialization or declaration karne ke waabjood javascript hoist nahi kar paa raha isi ko Temporal Dead Zone kahte[TDZ] kehte hai.
//Aur iska[TDZ] kaa upay ek hii hai kii apne operating system me completely value initialize karna then use it.
//{   //Range of TDZ:--
// bestFood's TDZ starts here (at the beginning of this block's local scope)
// bestFood's TDZ continues here
// bestFood's TDZ continues here
// bestFood's TDZ continues here
// console.log(bestFood); // returns ReferenceError because bestFood's TDZ continues here
// bestFood's TDZ continues here
// bestFood's TDZ continues here
// let bestFood = "Vegetable Fried Rice"; // bestFood's TDZ ends here
// bestFood's TDZ does not exist here
// bestFood's TDZ does not exist her
// bestFood's TDZ does not exist here
//}

//*hoisting is a behaviour in javascript, used before initialization or declaration of a variable or function.*

//Function and Block Scope:--
//● var refers to a variable in the function scope, while let, const refers to a variable in the blockscope.
//● When we use the var keyword to declare a variable, it is available on every line of thefunction, hence Function scoped.
//● When we use the let, const keyword to declare a variable, it is only accessible within theblock in which it was declared, hence block scope.
//For Examples:--
// function iAmAFunction()   //yaha semi column[;] nahi laga sakte nahito error aa jaayega, qki function ko bina initialize kiye statement close 
// {                         //nahi kar sakte hai.
//  var iAmTwo = 2;
//     {
//     var iAmThree = 3;
//     let iAmFour = 4;
//     console.log(iAmFour); // 4 ho jaayegaa qki let block ke andar hai aur andar hii caal hua hai
//     console.log(iAmTwo); //2 ho jaayegaa qki yaha hoisting kaa case nahi hai aur var globally scoped hota hai.
//     }
//  console.log(iAmThree); // 3 run hojaayega. 
//  console.log(iAmTwo);  // 2 run ho jaayega.
// //  console.log(iAmFour); // error qki iamfour let ke andar define hua hai aur let iske{} andar declar hai.joki blockly scoped hai.
// }
// iAmAFunction();
// // console.log(iAmTwo) //yaha error dega qki var iamtwo {} ke bahar call kiye hai aur yaha hoising ho raha qki function call pahle kiye hai.
//                        //matlab hoising ke case me var globally scoped nahi rah jata.


//Problem(Example) with var:--
// var greeter = "hey hi";
// var times = 4;
// if (times > 3)//yaha ex condition rakhe hai kii yadi times 3 se bara hai to greeter kaa value "say hello instead" dena hai.
// {
// var greeter = "say Hello instead";
// // let greeter = "say Hello instead"//yaha say hello instead nahi print hoga qki let ko function ke andar hii call kar sakte hai.
// //yaha dono ko ek saath use nahi kar sakte qki condition ek kii hii saath rakha jata hai isliye ek ek kar execute karna hoga.
// }
// console.log(greeter) // "say Hello instead"


//Predict the output of the following code:
// var a = 10;
// {
// var a = -10; 
// }
// let b = a; // yaha b= a kah raha matlab b=-10 qki a kaa value lastly -10 assign hua bracket ke andar aur var keliye bracket matter nahi karta.
// {
// let b = -20; 
// }
// console.log(b)
//yaha output -10 hoga qki console iske{} bahar call hua isliye bahar wala let kaa value print hoga.


// alert(a());
// function a()
// {
//  function b()
//   {
//  return 3;
//   }
//  return b();
//  function b()
//   {
//  return 8;
//   }
// }
//yaha alert define nahi hai isliye error batayega.

// console.log(y);
// y = 1;
//yaha y is not defined error batayega qki hoisting ho raha, aur naa y declared hai jo undefined batayega.

// console.log(y);
// var y = 2;
//yaha undefined batyegaa qki y declared hai, lakin hoising ho raha isliye value initialize/define nahi karega.
//wahi hoising nahi hota matlab var y= 2 wala line pahlre likhata to value batata.
// var y = 2;
// console.log(y);//aise batata

// y = 3;
// console.log(y);
// var y;
//yaha hoisting nahi hoga qki upar value assign hai aur by default var declare hota.

// var fruit = 'apple'
// {
//   var fruit = 'orange'
//   console.log(fruit) // orange
// }
// console.log(fruit) // orange
//mistaking problem hai, var change ho gaya bracket doesn'nt matter in var.




