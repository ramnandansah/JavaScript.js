// console.log("JavaScript Strings and Methods.");
// console.log('JavaScript Strings and Methods.');
// console.log(`JavaScript Strings and Methods.`);
//We can Write String inside Double quotes["..."], Single quotes['...'], Backticks[`...`]

//● String is used to represent and manipulate a sequence of characters.
//● It is useful for holding data that can be represented in text form.
//● There are 2 ways to create string in JavaScript:--
//    ○ By string literal
//    ○ By string object (using new keyword)

//By string literal:--
//   Using single quotes:--
//       const firstName = 'Primathon';
//       const lastName = 'Academy';
//   Using double quotes
//       const firstName = "Primathon";
//       const lastName = "Academy";
//By string object skipped by teacher may be aage.


//Template literals (Template strings):--[String likhne kaa alag alag tarikaa. ]
// const firstName = `Primathon`;
// const lastName = `Academy`;
// const fullName = `Primathon Academy`;  // Multi Line String
// const name = `${firstName} ${lastName}`
// const music =
// `The quick
// brown fox
// jumps over
// the lazy dog`;   //By this way we write multi statement string, and it's witten only one backticks[`...`]

// String with variables:--
// name="Primathon"
// const intro = `My name is ${name}`;
// console.log(intro);

// String which contain single or double quotes
// const text = `He's often called "Johnny"`;
// let name1 = `The Doctor`;
// let message1 = `Hello, I'm ${name1}.`;
// let message2 = `"I'm The Doctor." She said.`;
// const areaOfSquare = `The area of square is ${5 * 5}`;
// const x = `I'm ${2 * 10 + 9 % 9}`;
//matlab backticks[`...`] ke andar kuch bhi likha jaa sakta hai.

// Using String Method:--[]
// const strPrim1 = String(10); // "10"
// const strPrim2 = String(1); // "1"
// const strPrim3 = String(true); // "true"
// const strPrim4 = String(false); // "false"
// const strPrim5 = String(undefined); // "undefined"
// const strPrim6 = String(null); // "null"

// let Answer = `"It's all right "abdul"`
// console.log(Answer);

// const areaOfSquare = `The area of square is ${5 * 5}`;
// console.log(areaOfSquare);  //The area of square is 25
// const areaOfSquare = `The area of square is {5 * 5}`;
// console.log(areaOfSquare); //The area of square is {5 * 5}
//$ lagana jaruri hai {} ke baad, tabhi value print hoga otw same print ho jaayegaa.[Aur backticks ke andar likhna jaruri hota agar $ lagaye to]

//Relation between "..." and /.../:--
// let text1 = "We are the so-called \"Vikings\" from the north.";
// //let text2 = "We are the so-called "Vikings" from the north."; //matlab ".."...".." nahi likh sakte.
// let text3= 'It\'s alright.'; //'..'..' aisa likhne keliye ' se pahle \ lagana jaruri hota.
// console.log(text3);  //It's alright.
// let text4 = "The character \\ is called backslash.";
// console.log(text4); //The character \ is called backslash.

//let text3= "It's alright.";
//console.log(text3);// It's alright.


// const str = "Hello Primathon"
// console.log(str);  //Hello Primathon
// console.log(str[1]);   //e   //qki isme bhi array element ke tarah index value hota hai.


//● Strings are case-sensitive:--
//  As JavaScript is case-sensitive, upper-case and lower-case texts are treated differently.
// const name1 = 'Primathon'
// const name2 = "primathon"     //logical operator[true false] does'nt matter "....",`...`,'...'
// console.log(name1 === name2); // false //due to p&P of Primathon.

//● Concatenation of strings :--
//  Strings can be concatenated using the “+” operator.
// const name1 = 'Primathon';
// const name2 = name1 + "Academy.";
// console.log(name2) ; // "Primathon Academy."

//● To assemble a string piece by piece, “+=” operator can be used:--
// let className = 'btn';
// className += ' btn-primary'  //iska matlab className=className + btn-Primary, means btn + btn-Primary.
// className += ' none';
// console.log(className); // "btn btn-primary none"

//● Some more examples:--
// console.log(2 + 2); // Expected output: 4
// console.log(2 + true); // Expected output: 3
// console.log('hello ' + 'everyone'); // Expected output: "hello everyone"
// console.log(2001 + ': A Space Odyssey'); // Expected output: "2001: A Space Odyssey"
// console.log('foo' + 'bar'); // "foobar"
// console.log(5 + 'foo'); // "5foo"
// console.log(5 + 10 + 20 + 'foo'); // 35foo
// console.log(5 + 10 + '20' + 30 + 40 + 'foo'+10+20); // 15203040foo1020 //beech me sting aane ke baad console nbr ko add naa karke string samjh ke  
// console.log('foo' + false) // "foofalse"                                  //same print kara dega, Remember it.
// console.log('2' + 2) // "22"

// console.log(2 + false) //  2
// console.log('2' + true)  //2true
// console.log(2 + 'false');//2false
// console.log(2 + true);// 3
// console.log('true' + 'false');  //truefalse
//string ke baad true false 0 aur 1 naa hoke string ke jaisa behave karta hai.

//console.log("10"/"2"); //Here Output is 5


//● Comparison of strings :--

// When using the == operator:--
// let x = "Hi";
// let y = new String("Hi");
// console.log(x == y); // true  //in ==  check only value not type so does'nt matter new String Here.
// let x1 = "Hi";
// let y1 = new String("hi");
// let z1 = 'hi';
// console.log(x1 == y1); // false
// console.log(x1 == z1); // false
// console.log(y1 == z1); // true

// When using the === operator, x and y are not equal:--
// let x = "Hi";
// let y = "Hi";
// //let y = 'Hi'//true
// //let y = ("Hi") //true // ()[parenthesis or round bracket] does'nt matter.
// //let y = new String("Hi") //false due ko new String.
// console.log(x === y); // true

// let x1 = "Hi";
// let y1 = new String("hi");
// let z1 = 'hi';
// console.log(x1 === y1); // false  //due to new String
// console.log(x1 === z1); // false   // due to H & h
// console.log(y1 === z1); // false  //due to new String   


//Other Examples:--
// let x = new String("Hi");
// let y = new String("Hi");
// console.log(x == y); // false
// console.log(x === y); // false
// Note - JavaScript objects cannot be compared.
// Note - Comparing two JavaScript objects always returns false.


//● String methods :--
// String Length :-- This property returns the length of the string.
// let word = "Hello Javascript"
// console.log(word.length); //16

//slice in string:--
// let str = "Wellcome to Primathon Academy"
// console.log(str.slice(11, 21));  //string ke beech space bhi index value reserve karata hai.[space keliye bhi index value count hiota hai.]
// console.log(str.slice(21));  //here output is Academy, matlab jo value denge wahi se start hoga, matlab by default start samjhta hai.
//note:--slice=substring=substr[teeno kaa kaam ek hii bas ye dono purana methods hai]

// const word = "Primathon Academy";
// console.log(word.length); // 17
// console.log(word.slice(0, 9)); // "Primathon"
// console.log(word.slice(3, 9)); // "mathon"
// console.log(word.slice(1)); // "rimathon Academy"
// console.log(word.slice(17)); // "" // If indexStart >= str.length, an emptystring is returned.
// console.log(word.slice(18, 20)); // "" // If indexStart >= str.length, an emptystring is returned.
// console.log(word.slice(-1)); // "y"  // If indexStart < 0, the index is counted from the end of the string.

// const word = "Primathon Academy";
// console.log(word.slice(-7)); // "Academy"  //yaha -7 ko starting index value samjhegaa.
// console.log(word.slice(-7, -2)); // "Acade"
// console.log(word.slice(-3, -7)); // ""  // -index ke case me hamesha bara number aage honaa chahye aur chota num baad me, otw empty print gain.
// // If indexStart is omitted, undefined, or cannot be converted to a number (using Number(indexStart)), it's treated as 0.
// console.log(word.slice()); // "Primathon Academy"
// console.log(word.slice(NaN)); // "Primathon Academy"
// // If indexEnd is omitted, undefined, or cannot be converted to a number (using Number(indexEnd)), or if indexEnd >= str.length, slice() extracts
// // to the end ofthe string.
// console.log(word.slice(1,undefined)); // "rimathon Academy"
 
//IfindexEnd < 0, the index is counted from the end of the string.More formally, in this case, the substring ends at max(indexEnd + str.length,0).
// const word = "Primathon Academy";
// console.log(word.slice(1, -2)); // "rimathon Acade"
// console.log(word.slice(2, -7)); // "imathon"
// console.log(word.slice(1, 0)); // ""
// console.log(word.slice(9, 2)); // ""// +index ke case me hamesha bara number piche honaa chahye aur chota num aage me, otw empty print gain.
// const str1 = "The morning is upon us."; // The length of str1 is 23.
// const str2 = str1.slice(1, 8);
// const str3 = str1.slice(4, -2);
// const str4 = str1.slice(12);
// const str5 = str1.slice(30);
// console.log(str2); // he morn
// console.log(str3); // morning is upon u
// console.log(str4); // is upon us.
// console.log(str5); // ""

// const str = "The morning is upon us.";
// console.log(str.slice(-3)); // 'us.'
// console.log(str.slice(-3, -1)); // 'us'
// console.log(str.slice(0, -1)); // 'The morning is upon us'
// console.log(str.slice(4, -1)); // 'morning is upon us'



//chatAt:--[kisi string ke kis index value pe kya char hai, ye pata karne ke liye use KeyboardEvent.]
// const anyString = "Brave new world";
// console.log(anyString.charAt());"B"
// console.log(anyString.charAt(3));"v"
// console.log(anyString.charAt(95));"   "

//In another/vast/complicated way{under backtics[`...`]}:--
// const anyString = "Brave new world";
// console.log(`The character at index 0 is '${anyString.charAt()}'`);// No index was provided, used 0 as default
// console.log(`The character at index 0 is '${anyString.charAt(0)}'`);
// console.log(`The character at index 1 is '${anyString.charAt(1)}'`);
// console.log(`The character at index 2 is '${anyString.charAt(2)}'`);
// console.log(`The character at index 3 is '${anyString.charAt(3)}'`);
// console.log(`The character at index 4 is '${anyString.charAt(4)}'`);
// console.log(`The character at index 999 is '${anyString.charAt(999)}'`);
//The character at index 0 is 'B'
//The character at index 0 is 'B'
//The character at index 1 is 'r'
//The character at index 2 is 'a'
//The character at index 3 is 'v'
//The character at index 4 is 'e'
//The character at index 999 is ''


//The charCodeAt() method:--[index value ke asthan kaa char kaa ascii value.][yaani q kaa ascii value 113]
//■ The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
// const sentence = 'The quick brown fox jumps over the lazydog.';
// const index = 4;
// console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);
// Expected output: "The character code 113 is equal to q"
//chatAt:--[kisi string ke kis index value pe kya char hai, ye pata karne ke liye use KeyboardEvent.]

//■ The concat() method joins two or more strings.
//■ The concat() method does not change the existing strings.
//■ The concat() method returns a new string.
// const str1 = 'Hello';
// const str2 = 'World';
// console.log(str1.concat(' ', str2));// Expected output: "Hello World"  [agar kuch naa deke add karna hai to ' ' kar, 'kuch de' nahi to].
// console.log(str2.concat(', ', str1)); // Expected output: "World, Hello"
// const hello = "Hello, ";
// console.log(hello.concat(' ',"Kevin. Have a nice day."));// Hello, Kevin. Have a nice day[kel have a nice day]

//some other explanations:--
// const greetList = ["Hello", " ", "Venkat", "!"];
// console.log("now".concat(...greetList)); // "Hello Venkat!" [...araay name kaa kaam hii hai saale element ko string me convert karna.]
// console.log("xyz".concat({})); // "[object Object]"                                     [... = spread operator]
// console.log("xyz".concat([])); // xyz""
// console.log("xyz ".concat(null)); // "xyz null"
// console.log("xyz".concat(true)); // xyz"true"
// console.log("".concat(4, 5)); // "45"


//endsWith:--[last kaa ending milaayegaa phir true false declar karega]
//Examples:---
// const str = "Hello World";
// console.log(str.endsWith("World")); // true //world se string end ho raha isliye true.

// const str1 = 'Cats are the best!';
// console.log(str1.endsWith('best!'));// Expected output: true//best! se end ho rha isliye true
// console.log(str1.endsWith('best', 17));// Expected output: true //best 17 index value pe end ho raha isliye true

// const str2 = 'Is this a question?';
// console.log(str2.endsWith('question'));  // Expected output: false //due to ? mark

// const str3 = "To be, or not to be, that is the question.";
// console.log(str.endsWith("question.")); // true
// console.log(str.endsWith("to be")); // false
// console.log(str.endsWith("to be", 19)); // true  //yaha to be 19 index pe end ho rha isliye true. 


//includes:--[checks incuding or not]
//Examples:--
// const str1 = "Hello World";
// str1.includes("World"); // true

// const str = "To be, or not to be, that is the question.";
// console.log(str.includes("To be")); // true
// console.log(str.includes("question")); // true
// console.log(str.includes("nonexistent")); // false
// console.log(str.includes("To be", 1)); // false
// console.log(str.includes("TO BE")); // false
// console.log(str.includes("")); // true

// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const word = 'fox';
// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence.`); //{? 'is' : 'is not'} aage padhenge.
// Expected output: "The word "fox" is in the sentence"


//indexOf:--[checks the index value]:--
//Examples:--
// const str = "Hello World";
// str.indexOf("World"); // 6  //qki 6 index value pe World kaa W start ho raha.
// console.log(str.indexOf("world")); // -1 //world[smallw] hai hi nahi isliye uske liye -1 dikhaayegaa.
// str.indexOf("o"); // 4   //pehla wala o kaa indexOf dikhaayegaa joki 4 hai.
// "hello world".indexOf(""); // returns 0   //[""]empty string ke kiye index value 0 hota hai.
// "hello world".indexOf("", 0); // returns 0   //empty string kaa 0 kaa index of 0 hoga.
// "hello world".indexOf("", 3); // returns 3   //empty string kaa 3 kaa index of 3 hoga.
// "hello world".indexOf("", 8); // returns 8   //empty string kaa 8 kaa index of 8 hoga.
// "hello world".indexOf("", 11); // returns 11    //empty string kaa 11 kaa index of 11 hoga.
// "hello world".indexOf("", 13); // returns 11    //qki last index 11 tak hiii hai, aur 13 usse bara hai isliye 11 hii dekhaayega
// "hello world".indexOf("", 22); // returns 11     //qki last index 11 tak hiii hai, aur 22 usse bara hai isliye 11 hii dekhaayega

//Nothing But for deep understanding:--
// const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
// const searchTerm = 'dog';
// const indexOfFirst = paragraph.indexOf(searchTerm);
// console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// // Expected output: "The index of the first "dog" from the beginning is 40"     // qki dog kaa d kaa index 40 hai.
// console.log(`The index of the 2nd "${searchTerm}" is
// ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// Expected output: "The index of the 2nd "dog" is 52        //index OfFirst + 1 matlab 2nd wala dog, jiska index 52 hai.


//lastIndexOf:--
//The lastIndexOf() method returns -1 if the value is not found.
//Examples:--
// const str = "Hello World";
// str.lastIndexOf("World"); // 6  //yaha ek hii world hai isliye last bhi wahi first bhi wahi. aur world start ho raha 6 index se.
// "canal".lastIndexOf("a"); // returns 3   //canal me last wala a kaa index value 3 hai, isliye 3 hua.
// "canal".lastIndexOf("a", 2); // returns 1    //yaha keh raha a jo 2nd asthan pe hai uska index kiya hai canal me, 2nd asthan pe jo a hai uska 
// "canal".lastIndexOf("a", 0); // returns -1   //yaha a o astahn pe hai hii nahi isliye not found to -1.                  //index i hai.[uparka hai]
// "canal".lastIndexOf("x"); // returns -1      //ye bhi value not found hai isliye -1.
// "canal".lastIndexOf("c", -5); // returns 0   //sahi hai c jo -5[piche se -1,-2 karke] ke asthan pe hai uska index 0 hai
// "canal".lastIndexOf("c", 0); // returns 0   //The lastIndexOf() method returns the index from the beginning (position 0).remember it.
// "canal".lastIndexOf(""); // returns 5    //empty string ke liye string length hii index of hojata hai.
// "canal".lastIndexOf("", 2); // returns 2    //empty string kaa 2 keliye lastIndexOf 2 hii ho jata hai. 


//repeat:--
// const str = "Hello";
// str.repeat(3); // "HelloHelloHello"
// "abc".repeat(-1); // RangeError
// "abc".repeat(0); // ''
// "abc".repeat(1); // 'abc'
// "abc".repeat(2); // 'abcabc'
// "abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
// 'abc'.repeat(1 / 0); // RangeError
// const chorus = 'Because I\'m happy. ';
// console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);
// Expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy.
//Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm
//happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy.
//Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm
//happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy.
//Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm
//happy. Because I'm happy. Because I'm happy.


//replace:---
// const str = "Hello World";
// console.log(str.replace("l", "*")); // "He*lo World"
// console.log("foo".replace("f", "$1")); // "$1oo"


//split:--
// const str = "Hello World";
// str.split(" "); // ["Hello", "World"]

// const str1 = 'The quick brown fox jumps over the lazy dog.';
// const xyz = str1.split(' ');  //split kara ke ek variable words me store kar liye.
// console.log(xyz[3]);  // Expected output: "fox"  //qki array me covert hone ke kaaran array kaa tisra elemnet fox ho jata hai.

// const str2 = 'The quick brown fox jumps over the lazy dog.';
// const pqr = str2.split('');
// console.log(pqr[8]);   // Expected output: "k" // 8 waa index pe char k hai, isliye k hua.

// const str3 = 'Indian culture is the best culture.'
// const abc = str3.split();
// console.log(abc);   // Expected output: [ 'Indian culture is the best culture.' ]
//Note:--
//agar split() = aise me pura string ko 1 element me covert kar deta hai.
//agar split('') = aise me har char ko array element me convert kar deta hai.
//agar split(' ') = aise me har word ko array element me badal deta hai.


//toLowerCase:--
// const str = "Hello World";
// console.log(str.toLowerCase()); // hello world
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// console.log(sentence.toLowerCase()); // Expected output: "the quick brown fox jumps over the lazy dog


//toUpperCase:--
// const str = "Hello World";
// console.log(str.toUpperCase()); // "HELLO WORLD"
// const sentence = 'The quick brown fox jumps over the lazy dog.';
// console.log(sentence.toUpperCase());
// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."


//toString:--
// const abc = new String("Hello World");
// console.log(abc); // Expected output: [String: 'Hello World']
// console.log(abc.toString()); // Expected output: "Hello World"

// const xyz = new String('foo');    
// console.log(xyz); // Expected output: String { "foo" }
// console.log(xyz.toString()); // Expected output: "foo"
//noter:--
//abc aur xyz object ke form me string likha hai, usme to string laga ke string ke form me convert kiya gaya hai.


//trim:--
//■ The trim() method removes whitespace from both sides of a string.
//■ The trim() method does not change the original string.
//Examples:--
// const str = " Hello World ";
// console.log(str); //" Hello World " //without trim method.
// console.log(str.trim()); // "Hello World" //with trim method.    

// const greeting = ' Hello world! ';
// console.log(greeting);// Expected output: " Hello world! " //without trim method.
// console.log(greeting.trim());// Expected output: "Hello world!" //with trim method.   


//To join[concat] method in string:--
// let str = "Wellcome to Primathon Academy"
// let str1 ="and Technology."
// console.log(str.concat(', ',str1));
//Output is: Wellcome to Primathon Academy, and Technology.


//split method:--
// let str = "Wellcome to Primathon Academy"
// const str1 = str.split(' ')
// console.log(str1);
//Note:--
//agar split() = aise me pura string ko 1 element me covert kar deta hai.
//agar split('') = aise me har char ko array element me convert kar deta hai.
//agar split(' ') = aise me har word ko array element me badal deta hai.


//Splice method:--
// let str = "Wellcome to Primathon Academy"
// const str1 = str.split(' ')
// console.log(str1);
// const str2 = str1.splice(2,3)   //2 aur 3 index pe jo word hai wo hatane keliye splice kaa use kiye hai, jabki splice kaa use index ke a/c print.
// console.log(str2);   //str2 mde jo store hua matlab jin jin index word ke saath splice hua use print karane keliye. 
// console.log(str1); // splice use karne ke kaaran ab str1 me wellcome aur to hii bachegaa, wahi dekhane keliye kiye.
// const str3 = str2.join(' ') //yaha hamne splice hone ke baad jo array element bacha tha use string me badalne keliye aisa kiye.[store=str3]
// console.log(str3);;   //now print.
//We acn use above these many lines in a single line:--
// let str = "Wellcome to Primathon Academy"
// console.log(str.split(' ').splice(2,3).join(' '));
//Slice kaa use karte hai sting kaa index value ke according print karane keliye.
