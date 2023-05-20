//console.log("Javascript Array and Methods:--");
//● An array is a collection of elements or items.
//● Arrays store data as elements and retrieve them back when you need them.
//● A pair of square brackets [] represents an array in JavaScript.
//● All the elements in the array are comma(,) separated.

//Suppose:--
//We noramally write in this way:--
// sname1 = "ritik"
// sname2 = "shivam"
// sname3 = "pooja"

//But in array:--
// sname = ["ritik","tarun","Annu","sana","Ram"]
// console.log(sname[0]);
// console.log(sname[2]);
// console.log(sname[4]);
//This one is example of array.

//● In JavaScript, arrays can be a collection of elements of any type.
//● It means that, you can create an array with elements of type String, Boolean, Number, Objects,and even other Arrays.
//● Here is an example of an array with four elements type: Number, Boolean, String, and Object
//Eg:---
// let x=5;   //Agar ham Define naa karenge to error aa jaayega, aki x variable hai aur variable ko define karna jaruri hai.
// const array = [100, true, "primathon academy", 122, 122.4, "fsdf", 'anc', true, ["abc", "xyz", x], {"key":"value"}];
// console.log(array[3]);
// console.log(array[6]);
// console.log(array[8]);
// console.log(array[9]);
// console.log(array[8][1]);
//Here Output is:--
//122
//anc
//[ 'abc', 5 ]
//{"key":"value"}
//xyz
//Note:--Yha {} ke andar hamlog object ko define karte hai joki iss{"key":"value"} tarah likha jaata hai.
//Index means ? :-- Index is specify as a order of content, like:-- index of 100/ritik is 0 in above examples.

//● The position of an element in the array is known as its index. ● In JavaScript, the array index starts with 0, and it increases by one with each element.
//● So, for example, in the above array, the element 100 is at index 0, true is at index 1, 'primathon academy' is at index 2, and so on.
//● The number of elements in the array determines its length.
//● For example, the length of the below defined array is four:--
// const array = [100, true, "primathon academy", {}];
// console.log(array.length);// output: 4



//JavaScript Array Methods and Properties:--

//Concat:--
//● The concat() method is used to merge two or more arrays.
//● This method does not change the existing arrays, but instead returns a new array.
//Example:--
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log("Array",array3);
// expected output: Array [ 'a', 'b', 'c', 'd', 'e', 'f' ]
//we can concate more than two array:--
//  const array1 = ['a', 'b', 'c'];
//  const array2 = ['d', 'e', 'f'];
//  const array3 = ['g', 'h', 'i'];
//  const array = array1.concat(array2,array3);
//  console.log("Array",array);
//output::--  
// Array [
//   'a', 'b', 'c',
//   'd', 'e', 'f',
//   'g', 'h', 'i'
// ]

//Push:--
//● The push() method adds one or more elements to the end of an array and
//● It returns the new length of the array.
//const animals = ['pigs', 'goats', 'sheep'];
//const count = animals.push('cows');   //count = karke push karne se array kaa length obtain kar sakte, joki niche kiye hai:--
//console.log(count);   //push karne ke baad array kaa length print karne kaa tarika hai.
// expected output: 4
//console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]
//animals.push('chickens', 'cats', 'dogs'); //Push aise/direct bhi kar sakte hai, But count = karke push karne se array kaa length obtain kar sakte.
//console.log(animals);   
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
 
//Unshift:--
//● The unshift() method adds one or more elements to the beginning of an array andreturns the new length of the array.
//const array1 = [1, 2, 3];
//console.log(array1.unshift(4, 5));
//console.log(array1);
// expected output: 5
// expected output: Array [4, 5, 1, 2, 3]
//Note:-- this method is written in console.log. 

//Pop:--
//● The pop() method removes the last element from an array and returns that element.
//● This method changes the length of the array.
// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// console.log(plants.pop());   // expected output: "tomato"
// console.log(plants);      // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
// plants.pop();  //we can use direct plants.pop(); if we not want to print which one element is removed.
// console.log(plants);   // expected output: Array ["broccoli", "cauliflower", "cabbage"]

//Shift:--
//● The shift() method removes the first element from an array and returns that removedelement.
//● This method changes the length of the array.
// const array1 = [1, 2, 3];
// const firstElement = array1.shift();
// console.log(array1);  // expected output: Array [2, 3]
// console.log(firstElement);  // expected output: 1

//Find:--
//● The find() method returns the first element in the provided array that satisfies theprovided testing function.
//● If no values satisfy the testing function, undefined is returned.
// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find(element => element > 10);
// console.log(found);// expected output: 12
// Yaha 2nd statement me (element => element > 10) ek function hai joki array ke element ko full fill karna hai, aur pahla element [array kaa]
//fullfill karegaa wo find me cought ho jaayegaa, jisko found name ke variable ke andar declar kiye hai aur usi found variable se console kii
//sahayeta print karaye hai.
//(element => element > 10) yaha element>10 to samjh aa raha kii array kaa element check karna hai ki kaun pahla element 10 se bara hai.  
//lakin (element => element > 10) yaha element=> qu likha gya qki ye iss method me element ko condition ke saath declar karne kaa tarika hai.
//yha element ke jagah x bhi likha jaa sakta hai koi dikat nahi hoga.

//FindIndex:--
//● The findIndex() method returns the index of the first element in an array that satisfiesthe provided testing function.
//● If no elements satisfy the testing function, -1 is returned.
// const array1 = [5, 12, 8, 130, 44];
// const isLargeNumber = (element => element > 13);   //ye syntax hai condition fullfill karane wala.
// console.log(array1.findIndex(isLargeNumber));  // expected output: 3 //Syntax for console printing  of cought element.
//Yha pe kisi conditioned defined value kaa index value jaanne ke liye function banaya gaya hai jisko findIndex function kehte hai. 
//is tarah se koi bhi function defined kar condition rakh usko value nikaalne kaa function bana sakte hai. 
//wahi condition me 13 ke jagah 133/koi aisa value rakh dete jisse condition ko array kaa koi bhi element fullfilll nahi kar paata to us case me
//console -1 print kar output deta.   [check by puutting 133 at the place of 13 in condition statement.]

//Every:--
//● The every() method tests whether all elements in the array pass the test implementedby the provided function.
//● It returns a Boolean value.
// const array1 = [1, 30, 39, 29, 10, 13];
// const isBelowThreshold = (everyValue => everyValue < 40);
// console.log(array1.every(isBelowThreshold)); // expected output: true
//yaha pe isBelowThreshold ek variable hai jiske andar ek funtion init kiye hai kii array kaa [content value]everyvalue 40 se chota hai kii nahi, 
//agar chota hai to condition true print hogaa nahi to false, jiske liye[print karane keliye] 2nd syntax write kiye hai.
//everyValue ke jagah element bhi likh sakte hai pahle upar wala method ke jaise koi diakt nahi hai.

//Some:--//[kuch element agar condition fullfilll kar raha then true, same as Above, little changing.]
//● The some() method tests whether at least one element in the array passes the testimplemented by the provided function.
//● It returns true if, in the array, it finds an element for which the provided functionreturns true; otherwise it returns false.
//● It doesn't modify the array.
// const array1 = [1, 2, 3, 4, 5];
// const even = (element => element % 2 === 0); // checks whether an element is even // module [%] use kiye hai kisika rem 0 ho to true.
// console.log(array1.some(even));  // expected output: true
//[kuch element agar condition fullfilll kar raha then true, same as Above, little changing.]
//Baaki sara scheme upar wale method every jaisa hii hai bas isme ulta ho gaya hai.[usme sara ko condition fullfill karna tha aur isme koi ek bhi.]
//Aur yaha true hoga qki array kaa 2 element 2 se kat ke % rem 0 dega aur condition fullfilll karega.
//Wahi 2 ke jagah 7 dete to ek bhi element condition fullfill nahi kar pata jiske karan console print me output false hoga. 

//Join:--
//● The join() method creates and returns a new string by concatenating all of theelements in an array, separated by commas or 
//specified separator string.
//● If the array has only one item, then that item will be returned without using the separator.
// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join());  // expected output: Fire,Air,Water
// console.log(elements.join(''));  // expected output: FireAirWater
// console.log(elements.join('-'));  // expected output: Fire-Air-Water
//elements ke bich kuch dene('..jo dena chahhe..') yaa naa dene keliye('') use karte hai.
//Aur sidha () tab by defult elements are added with commas.[1st statement is example.]
//console.log(elements.join('kuch-jgiuhsiug*+bhi'));

//Includes:--
//● The includes() method determines whether an array includes a certain value amongits entries, returning true or false as appropriate.
// const array1 = [1, 2, 3];
// console.log(array1.includes(2));  // expected output: true
//Another One:--
// const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('cat'));  // expected output: true
// console.log(pets.includes('at'));   // expected output: false

//Reverse:--
//● The reverse() method reverses an array.
//● The first array element becomes the last, and the last array element becomes the first.
// const array1 = ['one', 'two', 'three'];
// console.log(array1);   // expected output: "array1:" Array ["one", "two", "three"]
// //Consider from here:--
// const reversed = array1.reverse();    //jaruri hai isko likhna syntax aisaa hii hota hai.  //Yaha variable[reversed] ke andar array ko reverse karaye.
// console.log( reversed);  // expected output: "reversed:" Array ["three", "two", "one"]

// // Careful: reverse is destructive -- it changes the original array.
// console.log(array1); // expected output: "array1:" Array ["three", "two", "one"]
//Destructive-- Matlab ek baar change ho gaya to , phir purana wala hamesha ke liye change. 

//ForEach:---
//● The forEach() method executes a provided function once for each array element.
// const array1 = ['a', 'b', 'c'];
// array1.forEach(element => console.log(element));
// expected output: a
// expected output: b
// expected output: c
//Saare element ke liye alag alag console execute karwaane keliye aisa karte hai.[aage example se clear hoga.] 

//Map:--
//● The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// const array1 = [1, 4, 9, 16];
// const map1 = array1.map(element => element * 2);// Yha ek variable[map1] banake, usme map se ek function array1 me paas karwake store kiye.[phir niche console print]
// //const map1 = array1.map(xyz => xyz * 2);
// console.log(map1);   // expected output: Array [2, 8, 18, 32]

//Filter:--
//● The filter() method creates a new array filled with elements that pass a test provided by a function.
//● The filter() method does not execute the function for empty elements.
//● The filter() method does not change the original array, so we have need to create a variable and under that"s one we aply filter function.
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);  //yaha hamne function aaply kiya kii kaun kaun element kaa word length 6 se bara hai.
// //const result = words.filter(kuchbhi => kuchbhi.length > 6);  //kuch bhi likh ke function define karne kaa tarika hai.
// console.log(result);                                   //phir us element ko jo variable[result] store kiya usse console print karwaaye.
// expected output: Array ["exuberant", "destruction", "present"]

//Is tarah ke bahut saare methods use karte hai joki w3 yaa google pe diya hai jab jisaka jaruri pare dekh ke samajh lenge.

//Soring in case of number:--
//case1:--
// let arr = [1, 6, 65, 45, 45, 545, 4534, 124]       //agar 1 se bara ank kaa digit rahega to bara digit kaa sirf 1st ank dekh kar sort kiya jaayegaa.
// arr.sort();
// console.log(arr)
// //Case2:--
// let arr1 = [3,5,6,8,7,1,9,2]
// arr1.sort();
// console.log(arr1);
// //case3:--
// let arr2 = ["pooja", "sana", "rahul", "rishikesh", "tarun", "annu", "Haider"]
// arr2.sort();
// console.log(arr2);

//slice aur splice dono method alag alag kaam karta hai.:--
//slice me array1.slice(3) karenge ko array 1 kaa jiss element kaa index value 3 hogaa usse element likhna start karegaa, baad index[3] ke baad wala sab.[()=sara].
//Splice me array1.splice(1,2) karege to array1 me jis elemnet kaa index value 1 aur 2 rahegaa uskaa skip kar dega aur jo bachegaa usko print karegaaa.

//Question: var array1=[1,2,3,4,5,6] copy it to array2=[] by using slice and for loop methods:--
//Answer:--
//1>By slice Method:--
// var array1=[1,2,3,4,5,6]
// array2=array1.slice(); //agar slice() ke andar[()] kuch naa denge to by default puraa element copy kar legaa.
// console.log(array2);
// console.log(array1);
// //2>By for loop method:--
// var array1=[1,2,3,4,5,6]
// array2=[];
// for(i=0;i<array1.length;i++){
//     array2[i]=array1[i]
// }
// console.log(array1);
// console.log(array2);
// //3>Another Method:--
// var array1=[1,2,3,4,5,6]
// array2=array1
// console.log(array2);
// console.log(array1);

//reduce method in array :--[to know sum, average, multiplication, substraction, product, etc of array element.]
// const array = [1, 2, 3, 5, 6, 9, 7, 4];      //suppose we have to do sum of this array elements.
// let sum = array.reduce ((accum, curval)=>{return accum + curval});    //return ko likhne keliye {} ka use kiya jata hai.
// console.log(sum);
//accumalator me by defualt 0 se value lena start karta hai, to pahle accum=0 & curval{currentvalue}=1 => then [0+1=1] & retun to accum[return accum],
//now accum=1+curval=2 is 3 .this process repeat and repeat untill arraay element available, accum storage num finally become 37.
//=> ke baad wala kaa koi seen nahi wo 1st accum aur curval pe dependent hai, aur lasr me curval empty rahega jab saara element jur chukaa rahega.
//yaani 1st accum=37, curval=empty, 2nd accum=empty[it returns 37 due to return accum] curval=empty.
//sum = array aur array reduce hoke 37[int] store hai accum me and sum takes int value.
//2nd var[yaani curval/koi aur] me cuurent value store hota aur 1st var[yaani accum/koi aur] me .reduce ke kaaran 0 pahle se store rehta aur 1st var store of .reduce.
//https://www.youtube.com/watch?v=b9zgRt4p9Zo&ab_channel=ThapaTechnical //3 min btw 5 to 8.


//Difference between Array & object:--
// const cars = ["saab","farari","honda","suzuki","BMW"]   //array
// const person = {firstname:"john",lastname:"doe",age:"46"}  //object
// console.log(cars[2]);
// console.log(person.firstname);  //obeject ke element ko iss tarah print karte.

// const cars = ["saab","farari","honda","suzuki","BMW"]   
// console.log(cars[cars.length -1]);
// console.log(cars[cars.length -3]);   //Element index last se yaani -1,-2 iss tarah dekh console print karane keliye [cars.length...] jaruri hai.
//last se array element kuch iss tarah index follow karta aur use iss tarah print karate.

//Array Elements Printed by for loop:--
// const cars = ["saab","farari","honda","suzuki","BMW"]
// let n = cars.length;   //for loop me condition rakhne keliye ek variable len banaya, joki cars.length[4] ke barabar hai.(n=4).
// for(i=0;i<n;i++){
//     console.log(cars[i]);
// }

//foreach Method in an array:--
// const cars = ["saab","farari","honda","suzuki","BMW"]
// cars.forEach(myfunction);
// function myfunction(xyz){
//     console.log(xyz);
// }
//Yaha pe cars ke sabhi element keliye foreach ka function execute hoga. aur function keh raha cars me xyz jo bhi hai sabko print hona hai.

//We add an element in an array by following two methods:--
// const cars = ["saab","farari","honda","suzuki","BMW"]
// const cout =cars.push("Fiat")
// console.log(cout);
// cars[cars.length]="Mercedes"
// console.log(cars);
//Agar const cout[kuch bhi ] lagake push karengen to wo push kaa variable[count] no. of elements batata hai console.(cout) karne pe.

//Array.isArray Method in array:--
//Its checks the following array is array or not.
//For Example:--
// const cars = ["saab","farari","honda","suzuki","BMW"]
// console.log(Array.isArray(cars));  //Here output: True
//This method checks the foolowing array is array or not.

//How we convert array element into string:--
// const cars = ["saab","farari","honda","suzuki","BMW"]
// console.log(cars.toString());

//We can also attach array element by join method:--
//And there is option we have that by what we have want to join element.
//Example:--
// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join());   // expected output: "Fire,Air,Water"
// console.log(elements.join(''));   // expected output: "FireAirWater"
// console.log(elements.join('-'));   // expected output: "Fire-Air-Water"

//pop Method:--
// const cars = ["saab","farari","honda","suzuki","BMW"]
// console.log(cars.pop());
//pop karne se array kaa last elemenet print ho jata hai.
//isi tarah shift aage wala element print karata.
//Aur unshift array me aage me element ko jor deta hai.

// const cars = ["saab","farari","honda","suzuki","BMW"]
// console.log(cars.reverse());  //ulta alphabetically ordered elements
// console.log(cars.sort());  //sidha alphabetically ordered elements























