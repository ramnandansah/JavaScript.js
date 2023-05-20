// console.log("Javascript Exception handlingtry catch finally.");
// const a = 10;
// a = 20;

// ● Exception handling::--
// Exception/error handling is one of the important features of Javascript, as it helps in handling the  errors and maintain the proper code flow,
// it also tells us where the error occurred.

// Types of errors:--
// 1. Syntax Errors: These errors are not interpreted by the computer and stop the program from running. Ex. Spelling errors, missing semicolon, 
//    wrong indentation, etc.
// 2. Runtime Errors: Such errors occur during the execution of code, it crashes and raises an exception. Ex. Where there is no data / invalid 
//    data found.
// 3. Logical Errors: No errors thrown in these, it does not fulfil the requirement as developers intend to.

// Types of Error Objects:--
// When a runtime error occurs, javascript throws exceptions, which are as follows:--
// 1. RangeError: RangeError exceptions occur when a numeric value is outside the specified range.
// 2. ReferenceError: A ReferenceError exception occurs when undeclared variables are used or spelling mistakes are made.
// 3. Syntax Error: A Syntax Error exception occurs when there is a syntactical mistake made according to JS.
// 4. TypeError: A TypeError exception occurs when a value is different from the one expected.
// 5. URIError: A URIError exception is raised by encodeURI() and decodeURI() methods, when URI encoding or decoding is unsuccessful.

// How to handle exceptions:--
// Javascript handles exceptions with 4 statements which are:--
// ● JavaScript try…catch
// ● JavaScript try…catch…finally
// ● JavaScript Throw Exception
// ● Optional catch Binding


// JavaScript try…catch:--
// let result = add(10, 20);
// console.log(result);
// console.log('Bye');
//output:--ReferenceError: add is not defined
//correct code:--
// function xyz(a,b) {
//     return a+b
// }
// let result = xyz(10, 20);
// console.log(result);
// output:--30

// let result = add(10, 20);
// console.log(result);

// console.log('Bye');
// console.log('Bye');    //chalo upar wala me error hai, but ye 5 console to aana chahye naa, lakin nai aaya upar wala galat prgm ke kaaran.
// console.log('Bye');    //ye aana chahye lakin nahi aaya ab kaise laaye isi ko exception handling kehte hai.
// console.log('Bye');

// exception handling:--
// try{
// let result = add(10, 20);
// console.log(result);
// }
// catch(e){
// console.log(e);              //yaha e matlab error aur phir e yaani error ko print kara diye.//kuch aur karana ho to e ke jagah console me
// // console.log("this is a error in your code but continue in execution.")
// }
// console.log("bye");
// console.log("bye");
// console.log("bye");
// console.log("bye");
// matlab hame doubt hai kii es block me error hai to us block tp ham try {} ke andar rakh dete,
// try likhe to catch bhi likhna jruri hota isliye catch me (e) daalke {} ke andar e ko console se print kara dete hai. 


//Aur agar code me error tha phir try aut catch kaa use kiye, lakin phir code theek kar diya aur try catch bhi rehne diya to kya hoga, kuch nahi
//hoga normal chalega bas try me likha code bhi excute hoga, agar galat to galat otw sahi raha to catch ko ignore kar dega.
//For Example:--
//  function xyz(a,b) {
//         return a+b
//     }
//     let result = xyz(10, 20);
//     console.log(result);

// try{
// let result = add(10, 20);
// console.log(result);
// }
// catch(e){
// console.log("this is error")
// }
// //If no error occurs in the try block, the JavaScript engine ignores the catch block.

// console.log("Example");
// console.log("Example");
// console.log("Example");


//● JavaScript try…catch…finally:--
// try {
//     // code may cause exceptions (error wala code block written here.)
//    } catch (error) {
//     // code to handle exceptions (error/error's place what we want to write.)
//    } finally {
//     // code to execute whether exceptions occur or not (additinal mesaage or comments that we want to write.)
//    }
//Kuch nahi sab same hai try catch ke hii tarah bas antar yahi hai kii finally block kabhi ignore nahi hota yaha hamesha kuch naaa kuch likayega.

//For Example:--[error ke saath]
// let result = 0;
// try {
//  result = add(10, 20);
// } catch (e) {
//     console.log(e.message);
//  //console.log("this is error");
// } finally {
//  console.log({ result });
// // console.log("finally says nothing but result=o:");
// }

//For Example:--[without error]
// const add = (x, y) => x + y;
// let result = 0;
// try {
//  result = add(10, 20);
// } catch (e) {
//  console.log(e.message);
//  console.log("try block sahi hai isliye ye [catch] skiped");
// } finally {
//  console.log({ result });
// }
////isikaa term hai don't confuse:--
//try…catch…finally and return:--
// function fn() {
//     try {
//     return 1;
//     } catch {
//     return 2;
//     } finally {
//     return 3;
//     }
//    }
//    console.log(fn())
//yaha empty function call hua hai, try block ka code return 1 bhi sahi hai isliye catch ignore to jaayegaa, then finally block execute hoga,
//islye output return 3 hua.[return kaa case aise hii hota rem it.][pahle try ke a\c fn ka value 1, but due to finally fn value is 3.]
// function fn() {
//     try {
//         //abc [for executing catch block/for output 2]
//         return 1;
//         }
//     catch {
//         return 2;
//     }
// }    
// console.log(fn());
//output: 1   


//JAVASCRIPT THROW EXCEPTION [METHOD] STATEMENT:--

// 1. Using the JavaScript throw statement to throw an {exception}:--
// function add(x, y) {
//     if (typeof x !== 'number') {                //if x is not a number then throw[good tarika]/print[console] 'first argument'
//     throw 'The first argument must be a number' ;
//     }
//     if (typeof y !== 'number') {                //if x is not a number then throw[good tarika]/print[console] 'second argument'
//     throw 'The second argument must be a number' ;
//     }
//     return x + y;   //ye jaruri hai, agar sahi hai dono argumnet to added value add variable ko return karne keliye.
//    }
//    const result = add( "a" , 10);
//    console.log(result)
// //Rememberable syntax:--
// if(condition){
//     throw "satement that we want to throw/print."
// }
////Now throw within try...catch statement:--
// function add(x, y) {
//     if (typeof x !== 'number') {
//     throw 'The first argument must be a number';
//     }
//     if (typeof y !== 'number') {
//     throw 'The second argument must be a number';
//     }
//     return x + y;
//    }
//    try {
//     const result = add('a', 10);
//     console.log(result);
//    } catch (e) {
//     console.log(e);
//    }
// //yaha try block ke andar code likhe hai aur code sahi hai but a num nahi hai, is condition me use karte hai ye situation.
// console.log("now ready for execution");

// 2. Using JavaScript throw statement to throw an {instance of the Error class}:--
//3. Using JavaScript throw statement to throw a {user-defined exception}:--
//Ye dono keliye class function padha rahna jaruri hai joki nahi padhe hai till now.


//OPTIONAL CATCH BINDING:--
//ES2019 introduced the optional catch binding that allows you to omit the catch binding and
//its surrounding parentheses, like this:--
// try {
// } catch {
// }
//In this part nothing to learn but overall of this chapter.


//Additional:--[to know sirf error name aur mesaage of catch block/error block]
// let num = 1;
// try {
//  num.toUpperCase(); // Trying to convert a number to upper case galt code hai qki num = 1 hai.
// } catch (e) {     //haan yaha e ke jagah kuch bhi xyz de sakte but usi ke according .name aur .message hona chahye. 
//  console.log('Name of the error keliye:', e.name);
//  console.log('Message of error keliye:', e.message);
// }
// Output:--
// Name of the error keliye: TypeError
// Message of error keliye: num.toUpperCase is not a function


