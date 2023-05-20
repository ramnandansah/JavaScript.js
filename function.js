// console.log("Javascript Function:--");
// ● A function is a block of code that performs a specific task.
// ● A function can we called from anywhere and any number of time.
// ● A function may or may not return a value.
// example:--
// function sum (a,b){   //Here, function is key word, sum is function name, a and  b are parameters.
// console.log(a+b);     //this statement is function statement.[{} ke andar likha statement function statement yaa body / scope of function kahenge.]
// // return a+b         //ye function return, statement hai joki abhi iss function keliye jaruri nahi hai [likhe/naa likhe]
// }
// sum(10,20);      //Aur yaha function ko call kiya gaya a aur b keliye value deke.[yaha 10 aur 20 argument hai faunction kaa]
// //matlab function ko call karne waqt jo value or variable pass karte hai use ham arguments kahenge, aur jo function define karne waqt pass karte 
// //use parameters kahte hai.[ye difference hai parameters or argument me, in case of function.]
// //Hann function ke andar {} ke andar jo likhte hai use function defination[define wala] bhi kehte hai.
// sum(40,20)
// sum(50,60)           //This one is advantages of delaring function, one time call multitime.
// sum(90,30)


//function for calculating area:--
// function calcArea(width, height){
//     result = width*height;
//     return result;
// }
// console.log(calcArea(10, 20));


//Other Examples:--
// function sayhello(){
//     console.log("Wellcome to Primathon.")
// }
// sayhello();   //Wellcome to Primathon.
//case2:--
// function sayhello(){
//     console.log("Wellcome to Primathon.")
// }
// sayhello(12,10);   //Wellcome to Primathon.
//case3:--
// function sayhello(a,b){
//     console.log("Wellcome to Primathon.")
// }
// sayhello(12,10);    //Wellcome to Primathon.
//case4:--
// function sayhello(a,b){
//     console.log("Wellcome to Primathon.")
//     let sum = a+b;
//     console.log(sum);
// }
// sayhello(12,10);   //Wellcome to Primathon.//22
//case5:--
// function sayhello(a,b){
//     console.log("Wellcome to Primathon.")
//     let sum = a+b;
//     if(sum>100)
//     console.log(sum);
// }
// sayhello(12,10);    //Wellcome to Primathon.             


//Another Example:--
// function sayHi(xyz){
//     console.log('Hi', xyz);
// }
// let name= "ram"
// const myName = 'Primathon';
// sayHi(myName); // Hi Primathon   //yaha se my name argument kaa value xyz parameter pe pass hogaa aur my name argument ke a/c print hoga.
// sayHi(name);  //Hi ram           //yaha se name argument kaa value xyz parameter pe pass hogaa aur name argument ke a/c print hoga.
//matlab last wala sayHi[calling function] ke () me jo argument pass karenge usi ke according function kaa parameters[xyz] regulate hoga.

//Other case:--
// function sayHi(name) {           //name ke jagah upar jaise xyz bhi le sakte.
//     console.log('Hi', name);
// }
// const myName = 'Primathon';
// sayHi(myName); // Hi Primathon
// sayHi('Primathn'); // Hi Primathon
// sayHi(1234567); // Hi 1234567
// sayHi(); // Hi undefined
//clear hai.

//Test Question Check:--

// function myfn(){
//     var x =10;
//     console.log(x);
// }  // Ye galat code hai without calling fun not working.

// let x = 13;
// if(true){
//     let x = "fun";
//     console.log(x);
// }
// console.log(x); //output: fun 13

// const x = 20;
// console.log(x);
// x = 10; //output: 20 type error

// if (true) {
//     let x=10;
//     console.log(x);
// } //output: 10

// console.log(a);
// let a =10; //output: reference error //no hoisting & hoisting is not this.

// b = 25;
// var b 
// console.log(b); //Output: 25 //Here hoisting takes place and in this way hoisting takes place. 


//Function with Ternary Operator[?] & Object:--

//For Ternary Operator Clearification:--[https://youtu.be/kBdZBbWZ2a4 :after 3:15]
// function output(object)
// {
// 	var place=object ? object.place : "Italy";  //ternary Operator[?] means agar ? se pahle wala part true/fullfill hai to ? ke baad waala write
// 	return "clean:"+ place;                     //hoga otherwise : ke baad me jo diya hoga wo write hoga.
// }
// console.log(output({place:"India"}));  //Output: clean:India   
// //For clean:Italy:--
// function output(object)
// {
// 	var place=object ? object.place : "Italy";  //ternary Operator[?] means agar ? se pahle wala part true/fullfill hai to ? ke baad waala write
// 	return "clean:"+ place;                     //hoga otherwise : ke baad me jo diya hoga wo write hoga.
// }
// console.log(output()); //Output: clean:Italy
//Note:-Matab upar dono case dekhne se ye pata chalta hai kii, ? ke pahle[Place=object] condition kaa kehna hai kii agar object fn parameter me
//Place define hai to usko print karo otw naya palce Italy print karo[naya place italy ko declare object me {? ke baad [object.place:"Italy"]}]
//aise hii kiya jaata hai yahi tarikaa hai.[condition kehta var place object keliye hai to sahi nahi to object ke .place me italy daal do]
//.place se yaha direct var place ko delare kiya jo raha hai, ternary operator[?] me aisa hii tarika hai.


//Now functions:--
// function sayHiAdvance(name, age) {
//     console.log('Hi', name, 'you are', age, 'years old');
// }
// sayHiAdvance(); // Hi undefined you are undefined years old
// //in case of following:--
// sayHiAdvance(23); // Hi 23 you are undefined years old
// sayHiAdvance(23, 'Primathon'); // Hi 23 you are Primathon years old
// sayHiAdvance('Primathon', 23); // Hi Primathon you are 23 years old
// sayHiAdvance('Primathon', 23, 67); // Hi Primathon you are 23 years old //In this case 67 ignore ho jaayega [teen value & two parameters].
// sayHiAdvance(43,'Primathon', 23, 67); //Hi 43 you are Primathon years old //In this case 23 & 67 both are ignored.
// const temp = sayHiAdvance('Primathon', 23); // Hi Primathon you are 23 years old  //yaha variable ke andar function ko call kiye hai.
// console.log(temp); // undefined
//Note:--Function me arugumnet me jis according parameter ke liye value diya rahega usi according lega, parameters name wagare matter nahi karta, 
//wo kuch bhi ho sakta hai[bas first argument first parameter, second argument second parameter, kuch iss tarah hota].


// function sayHelloAdvanceAdvance(name) {
//     return 'Hello ' + name;    //Hello return karaega function ko yaha se.
// }
// console.log(sayHelloAdvanceAdvance()); // Hello undefined
// const helloThere = sayHelloAdvanceAdvance('Primathon'); //yaha sayHelloAdvanceAdvance fun ko helloThere variable me daale aur usme parameter ke
// console.log(helloThere); // Hello Primathon                         //liye argument bhi pass kiye Primathon joki name keliye defined hoga.

// sayHelloAdvanceAdvance('Primathon'); //is case me kuch naa print hoga jabtak console naa lagaayenge print naa hoga.
// console.log(sayHelloAdvanceAdvance('Primathon')); //Output:--Hello Primathon //Yha aayegaa.


//Complicated Examples:--
// H/W - Please run this code using node and explain the output:--
// function printPattern1(n) {
//     console.log('For n = ', n);
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             console.log('* ');    //process.stdout.write('* '); //this one is nothing but another way to print anything.
//         }
//         console.log(); //iss console se empty line break/Print hogaa, so don'worry by ignoring this please understand. 
//     }
// }
// printPattern1(1);

// printPattern1(2);               
// printPattern1(3);                      //nothing try to understand, it's very simple.
// printPattern1(4);
// printPattern1(5);

//note:--[console.log(); kaa use empty line break keliye kiya jaata hai.]
// console.log("hgkjvnhkjld");
// // console.log();
// console.log("265468465");


//Now Creating a SumRange Function:--[5ka...1+2+3+4+5=15]
// function sumrange(num){
// let sum = 0
// for(i=0;i<=num;i++){
// sum=sum+i
// }
// console.log(sum);
// }
// sumrange(5);
//Yha num kaa value hai 5, islye pahle 5 ke according condition rakh ke loop chalegaa, sum kaa value i ke madad se sum me store hoga aur phir
//console print karega sum kaa kaa value, aur bahar me fun call kiye argument 5 deke.



//JavaScript Function In Four Ways:--

//1.By Function Declaration:--
// function square(x){
//     return x*x
// }
// console.log(square(5));

//2.By Function Expression:--
// const square = function(x){
//     return x*x
// }
// console.log(square(5));   // Iss case me argument ko var ke through pass kiya jaata hai.

//3.By Arrow Function Expression:--
// const square = (x) => {       //Function ke jagah => code me changing hota iss case me.
//     return x*x
// }
// console.log(square(5));

//4.By Concise Arrow Function Expression:--
// const square = x => x*x
// console.log(square(5));

//Note:--
//1 & 3 method jaidatar use karte qki aasaan aur short code bhi hai, Haalaanki 4 sabse chota hai but {} naa hone ke kaaran sirf ek statement hii 
//pass kara sakte isliye jaidatar use nahi karte.


//Test Question:--
// var x=0;  
// for(x;x<10;x++);  
// console.log(x);  
//Output:-- 10

// var count =0;  
// while (count <10)  
// {  
//      console.log(count);  
//      count++;  
// }  
//Output:-- 0123456789

// var a=0;
// for(a;a<5;a++);  //yaha isi line me loop ; ke kaaran close ho raha next line console se koi behas nahi, loop bas a kaa value change kar degaa.
// console.log(a);                  //loop ke kaaran a kaa value 5 ho gaya so 5 print karega yaha.                [*****]
//Output:-- 5

// var size=5;
// var a=5;
// var size=4;
// for(var j=size;j>=0;j--)
// {
// 	console.log(a);
// 	a=a-2;
// }
//Output:-- 531-1-3


//Program to find HCF of Two number:--
// const number1 = 60
// const number2 = 72
// let HCF;
// for(let i=1; i<=number2; i++){
//     if(number1 % i == 0 && number2 % i == 0){  //statement keh raha kii agar num1 aur i kaa modulas[remainder] o hai to aur num2 aur i kaa modulas 
//         HCF = i;                               //0 hai to to i kaa value hcf me ho, otw increment kar agla ko check karo.
//     }
// }
// console.log(HCF);  //12


//Program to write fibbonaaci of n=5:--[Matlab 5 fibbonaaci likhna hai, aur fibonacci ke case me 2 fibonaaci pahle se decide rehta hai,n1=0,n2=1]
// const num = 5                          //aur agala number hota hai pichla do number kaa sum[n3=1],aur tab [n4=2],[n5=3] ye hua 5 fibbo. n=5 kaa  
// let n1 = 0
// let n2 = 1           //due to pre decided we declare n1 = 0 and n2 =1;
// let nextterm;
// for(i=1;i<=num;i++){
// console.log(n1);
// nextterm=n1+n2         //fibonaaci kaa concept yaha khatam hua.[pichla do term n1+n2 so yaha 0+1] next term kaa value store karne keliye ye term.
// n1=n2             //Sara khela, nextterm se naya mumber banaye, phir nextterm ko n2 me paas kiye, aur yaha n1 print ho raha to n1 ko update kiye.
// n2=nextterm           //nextterm me bana/store kiya value n2 me kar diye taaki/qki console n2 ko karwaaye. 
// }
// see copy and try to understand by case1, 2 ,3 iss tarah.


//Math.floor:--
// let num = 15;
// res = Math.floor(num/10);   //Yaha output 1.5 aana chahye lakin Math.floor ke kaaran .5 hata ke 1 aaya, qki Math.floor lagane se . ke baad wala
// console.log(res);  //Output: 1                                                                       //ignore/hat jaata hai.parseInt() ke tarah.
// //parseInt():--
// console.log(parseInt(5.456));

//Math.ceil:--
// let num = 15
// res = Math.ceil(num/10)     //Yaha output 1.5 aana chahye lakin Math.ceil ke kaaran .5 hata ke 2 aaya, qki Math.ceil lagane se . ke baad wala
// console.log(res);  //Output: 2                              //ignore karke aage badha ke print deta hai.[theek floor{piche aake} kaa ulta ceil]


//In this case of function:--
// function sum(){
//     res = a*b
//     console.log(res);
// }
// sum(10,20)    //Inthis case Output will be comes as error "a & b is not defined"


// Recursion in function:--[baar baar ek hii function repeat hona recursion kehlata hai,It is a type of call backfunction because here also a 
// function countDown(count) {                       //function is paaed as an argument in a function.]
//     console.log(count);
//     if (count == 0) {
//         return;                                        //[otw see lacture 20 april from 47:20 (2bar dekho)]
//     }
//     setTimeout(() => { countDown(count - 1) }, 1000);//yaha ek arrow function settimeout call hua jisme phir se countdown function call hua,jime 
// }                       //[count-1,yaani 4,3,2,1,0] baari baari se argument banke if condion check karke excutute hua, aur lastly if condition
// countDown(5);  // 5 4 3 2 1 0                     //true hua yaani count kaa value 0 paass hua settime out function ke through,then return&ends.
//Yaha Output small interval of time leke print karega qki 311 nbr statement excute hua aur usme 1000 matlab 1sec kaa time interval lagega.
//311 nbr statement me [() => { countDown(count-1) }] kaa matlab hua ek function belong karao joki countdown hai (count-1 values)argument ke saath
//Yha function loop ke tarah behave kar kar raha ya loop kaa kaam function kar raha.


//Sum of digits of a number:--[This one is also recursion.]
// The last digit of the num is added with a recursive call of “digitSum(num/10)” and the recursive call is terminated once the num variable is 0.
// let number = 3467;
// function digitSum(num) {
//     if (num == 0) {
//         return num;
//     }
//     return num % 10 + digitSum(Math.floor(num / 10));  //yaha digitsum me argument ke roop me num/10 hone ke baad usko math.floor se . baad wala 
// }                                     //hatake use as an argument pass kiya gaya. [pahle num/10 ke baad 346.7 tha math.floor ke kaaran num = 346 ]
// console.log(digitSum(number));   //Output: 20
//num%10[modulus] se number (pahla baar 7 modulas aaya{sheshfal}) joki num me store hua, phir digitsum function baar baar call hone ke kaaran
//loop ke tarah behave hua aur modulus[num%10] se pahle 7 phir 6,4,3 aate gaya aur num me add hote gaya %10[modulus of 10 ke kaaran.]
//return me num dega modulus of 10[sheshfal pahla baar 7] + yaani aur digitsum ko call karega jisme num ko divide karke baad chila chala hua value
//[math.floor ke kaaran] argument rahega.


//complicated Array terms in function:--
// let arr = [2,[3,12,24],17,[54,[24,3],8]];
// console.log(arr[0]);// 2
// console.log(arr[1]);// [ 3, 12, 24 ]
// console.log(arr[1][1]);// 12
// console.log(arr[2]);//17
// console.log(arr[3][1]);//  [ 24, 3 ]
// console.log(arr[3][1][1]);// 3


//Program to Factorial of a number[5kafactorial=1*2*3*4*5=120]:--                   [*******]
// function factorial(i) {
//     if (i > 1) {                                    //yaha pe 4 hua qki factorial(i-1)yaani(5-1)yaani(4)//aur *i yaani *5 qki i kaa value 5 hai.
//         return factorial(i - 1) * i; //ye line execute hoga tab aise hoga => //factorial(4)*5=>//ab yaha fir se factorial call hoga with argument
//     }                            //value 4[i=4] aur side me *me 5 bhi rahega, condition check hoga true niklega isliye phir se ruturn factorial
//     return 1;                 //wala line excute hoga kuch iss tarah => //factorial(3)*4*5(qki 5 side me tha aur rahega,aur aage *4 bhi rahega)
// }                          //yaani agala baar excute hoke =>factorial(2)*3*4*5 phir =>factoral(1)*2*3*4*5 => ab aage return factoral wala line 
// console.log(factorial(5));//excute nahi hoga qki factorial(1)yaha i=1 kaa jab condition check hoga tab to false ho jaayega isliye return 1 wala 
                          //line execute hoga aur ab aa jaayega 1 aur aage baaki kaa side value yaani =>1*2*3*4*5 joki = hoga 120 ke, aur 120 ho
                //jaayegaa function factorial (sabse upar wala) kaa value jaaoki console ho jaayega.          


