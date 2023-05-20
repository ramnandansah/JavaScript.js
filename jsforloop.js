//{JAVASCRIPT LOOP}:--
//- With a loop we can automate and repeat indefinitely a block of code, for how many times we want it to run. 
//- A JavaScript for loop executes a block of code as long as a specified condition is true.
//- In javascript with the help of loop we can repeat a block of code, for how many times we want to run.

// let message = "welcome to primathon."
// console.log(message);
// console.log(message);
// console.log(message);
// console.log(message);
// console.log(message);

// console.log("2x1=2")
// console.log("2x2=4")
// console.log("2x3=6")
// console.log("2x4=8")
// console.log("2x5=10")

//for (initializer; condition; updateExpression) {    
// for loop body
//   }
//if condition true then go to body,then come for udate expresssion[i++], then again check condition. if true then go to body otw loop terminates.

//Example1:--
// for(i=1;i<=10;i++){
// console.log(2*i)
// }
//Example2:--
// let message="welcome to primathon."
// for(i=1;i<5;i++){
// console.log(message)
// }

// let message="welcome to primathon."
// for(i=1;i>5;i++){
//  console.log(message)
// }
//here because i=1, condition i>5 is  false do loop terminates and no output print.[try to understand it<s simple you can understand.]

// let message="welcome to primathon."
//  for(i=1;i<5;i++){
//  console.log(message)
//  }
// console.log("loop teminated.")
//{} ke bahar hone ke kaaran  loop terminate hua isliye 4 times nahi print hua.

// let message="welcome to primathon."
//   for(i=1;i<5;i++)
//   console.log(message)
//   console.log("loop teminated.")
//here we conclude that loop is only for next statement/console.
//yaha pe for loop kaa body sirf 17 line hii hai, islie yaha pe 2nd console loop se independent hai aur wo console ko follow kar 1baar print krega

// let message="welcome to primathon."
//  for(i=1;i<5;i++){
//  console.log(message)
// console.log("loop teminated.")
//  }
//yaha body me dono console hai isliye dono print hoga pura body 4baar print hogaa.

// let message=("welcome to primathon academy")
// for(i=1;i<5;i++);   // ; ke kaaran yahi pe for loop kaa statement close ho gaya body me enter kar hii nahi paaya. isliye loop not works.
// console.log (message)
// console.log ("loop terminated")

// let message="welcome to primathon."
//   for(i=1;i<5;i++){
//     ;   //{}[loop area] ke andar ye ek line/statement hai joki ; ke kaaran empty hai, so loop excutes next statement of body.
//   console.log(message)
//   console.log("loop teminated.")
//   }

// let message=("welcome to primathon.")
// for(i=1;i<5;i=i+2){
//     console.log(message)
// }
//yaha i me +2 karke condition check karayega jitna true utna baat console message. so here condition 2 times true possible.
// let message=("welcome to primathon.")
// for(i=1;i<5;i=i+5){
//     console.log(message)
// }
//yaha i me +5 karke condition check karayega jitna true utna baat console message. so here condition 1 times true possible.

//Examples:--
//Example 1:-- Display a Text Five Times
// Program to display text 5 times
// const n = 5;
// for (let i = 1; i <= n; i++) {     // looping from i = 1 to 5
//  console.log(`I love JavaScript.`);
// }
// Output:
// I love JavaScript.
// I love JavaScript.
// I love JavaScript.
// I love JavaScript.
// I love JavaScript.

// let message=("welcome to primathon")
// for(;;)
// console.log(message)
//here we keep condition empty and empty condition is true, and by default empty condition is infinite so here infinite times msg. prints.
//And stop infinite times excuted program by ctrl+c.
// let message=("welcome to primathon")
// for(i=1;;i++)
// console.log(message)

// let message=("welcome to primathon")
// for(i=1;;i++){
// console.log(message)
// console.log(i)
// console.log("i="+i)
// console.log("i = "+ i)
// }
//yaha i kaa value change hote rahegaa qki i kaa value defined hai aur increement ke kaarn change ho raha.

// let message="welcome to primathon"
// let i=0
// for(;i<5;i++){   //for loop kaa syntax(;;) complete karna jaruri hai, kunch naa diye to sahi[qki default hoga] lakin space galat hai.
//     console.log(i)
//     console.log("message")
// } 

// let message="welcome to primathon"
//  for(;i<5;i++){   // here i is not defined so error. and also i is under loop area.
//      console.log(i)
//      console.log("message")
//  } 

// let message=("welcome to primathon")
// for(;;){
//     console.log(message) //ye infinitely jab khatam hogaa tab independent console i print karegaa , joki infite hang karega lakin khatam nahi
//     console.log("message") //message ke saath ye[""] lagake galti kar diye, isliye sirf 
// }
//     console.log(i)         //hoga qki infinite tab tak print hoga jab tak memory me space rahegaa.

// let message=("welcome to primathon")
//  for(i=1;;i++)
//  console.log(i)
//here i defined but condition empty and empty condition is true and by default infinite.

//console.log("i") // in this case i is printed.
//console.log(i) // in this case error happens and said i is not defined.

// let message=("welcome to primathon.")
// let i
// for(;i<5;i++){
// console.log(message)//no output due to no initialiser value.
// }
// console.log("i = "+ i)//here output is undefined.


//Example 2: Display Numbers from 1 to 5
// Program to display numbers from 1 to 5
// const n = 5;
// for(let i=1; i<=n; i++){ // looping from i = 1 to 5, in each iteration, i is increased by 1
//  console.log(i); // printing the value of i
// }
// Output:
// 1
// 2
// 3
// 4
// 5
//yaha const n=5, ko mat dekho, sidha for loop dekh ke samjho condition wala case me value ke jagah n assign kiya aur upar n kaa value assign hua.

//Example in which loop terminates:--
// let n=5;
// for(i=10;i<n;i++){
// console.log(i);
// }
//here i=10 and according to condition[i<5 hona chahye] so here condition false and in a for loop if condition is false then loop terminates.

//complex examples:--
// let n = 5;
// for(let i=10, j=1, k=0; j<n;j++){
//     console.log(i);
//     console.log(k);
// }
//yaha 4 baar i kaa value[10] print hogaa qki j ke according loop codition follow hogaa aur j=1 se initialize hai, aur 5 se chota hona chahye, 
//aur yaha condition ke according 4 possible conditions true honge joki [1,2,3,4] hai. 
//Aur usi tarah 4 baar saath saath k kaa value[0] bhi print hoga. 
// let n = 5;
// for(let i=10, j=1, k=0; j<n;j++,i--,k--){
//     console.log(i);
//     console.log(k);
// }
//yaha jab loop kaa upadate expression part run karegaa to puraa update expession part ko complete karega, jisme j ko badhana aur 1 aur kk ko 
//ghatana bhi include hai.[update expression bole to 3rd paat of loop {;j++,i--,k--}]
// let n = 5;
// for(let i=10, j=1, k=0; j<n,i>10;j++,i--,k--){
//     console.log(i);
//     console.log(k);
// }
//yaha loop kaa 2nd part kaa 2nd[i>10] execute hote samay condition ko false kar diya isliye loop terminate ho gaya.
//we conclude that in a loop more than one initializer condition and update expression may be present.
// for(i=10;i=11;i++){
//     console.log(i)
// }
//iss type se loop use karna invalid hai joki infinite dega.
//for(initializer;condition;update-expression)//Agar condition false loop terminate agar true then go to body/console then update and again check.


//Example 3: loop that has no initializer expression
// let j = 1;
// for (; j < 10; j += 2) {
//  console.log(j);
// }
// Output:
// 1
// 3
// 5
// 7
// 9

//Example 4: loop without the condition example
// for (let j = 1; ; j += 2) {  //body yaha se       //aur is statement me 3rd part [j += 2] kaa matlab [j=j+2] hai.{j++/j+1 or j+2}
//  console.log(j);
//   if (j > 10) {   //iss loop kaa condition empty hai to true hoga aur by defult empty infinite hota isliye loop codition infinite time body 
//   break;          //execute karayega, lakin body kaa ye if condition har baar check hoga aur jab if kaa condition[j>10] yaani jaise hii 11
//   }               //hogaa if kaa body excute ho jaayegaa aur break work kar jaayegaa.
// }// yaha tak body. 
// Output:--
// 1
// 3
// 5
// 7
// 9
// 11

// let j = 1;
// for (;;) {
//  if (j > 10) {   //yaha jaise hii 10 se bara value execute hogaa, if ka body loop terminate/break kar degaa.
//  break;
//  }                                           //jiske kaaran 11 print naa ho paaya.
//  console.log(j);
//  j += 2; }   //yaha jaise hii 9 kaa increment+2 se hogaa 11 banake update karke phir aayega waise hii upar yaani if block me
// Output:
// 1
// 3
// 5
// 7
// 9
//Support:--
// let j = 1;
// for(;;){
//      console.log(j);
// }

//Mistakable:--
// for(i=0;i<5;i++);  //due to semi column[;] this statement closes here so in further next block/statement there is no interferance of loop.
// console.log("welcome to primathon.")

//Example 5: loop without the loop body
// let sum = 0;
// for (let i = 0; i <= 9; i++, sum += i);
// console.log(sum);
//Output:
//55

//Example 6: Infinite loop:--
//- In the above program, the condition is always true which will then run the code for infinite times.
// Infinite for loop;--
// for(let i = 1; i > 0; i++) {
//  console.log(i)
// } 
//- If the test condition in a for loop is always true, it runs forever (until memory is full). 

//Q1 - What is the output?
// for (let i = 0; i <= 5; i=i+1) {
//     console.log(i);
//     console.log(i+1);
//     console.log(i-2);
//     }
//sir ke bataye hue step by step samjh koi dikat naa hai. 

//In another condition:-- 
// let i;     //i=6 after loop executed.
// for (i = 0; i <= 5; i=i+1) {   //yaha i=i+1 ka matlab i++ hai simple, to 5 tak i ka value 6 baar/condition me print ho jaayega[012345].
//     console.log(i);            //ab aage jaise hii i kaa value 5 print hone ke baad loop ke updateExpression part me pahuchega to update
// }                              //hoke 6 ho jaayega, phir is i=6 value ko loop kaa 2nd part condition [i<=5] check karke false declare kar loop
// console.log(i+1);//output:-7              //terminate kar dega, tab i=6 bahar wala/iss line kaa console ke saath execute hoga aur i=7 ho jaayega.
// console.log(i-2);//i=6 to i-2=4 hogaa iska output.

//Q2 - What is the output?
// for (let i = 5; i > 0; --i) {
//  console.log(i);
// }
// for (let i = 5; i > 0; i--) {
//     console.log(i);
// }
//yaha ghategaa qki --i hai, same concept hai i++/++i aur --i/i-- keliye. sab ek hii chattta battta hai.

//Q3 - What is the output?
// for (let i = 1; i < 6; i++) {
//  console.log(i + 5, i);
// }
//it's to simple think and learn.

//Q4 - What is the output?
// for (let i = 1; i < 6; i++) {
//  console.log("* * * * *");
// }
//here also no problem,it's too easy.

//Q9- What is the output?
// for (let j = 1; j < 6; j++) {
//  console.log(
//  String.fromCharCode(64 + j),
//  String.fromCharCode(64 + j),
//  String.fromCharCode(64 + j),
//  String.fromCharCode(64 + j),
//  String.fromCharCode(64 + j)
//  );
// }
//both are same:--
// for (let j = 1; j < 6; j++){
//     console.log(
//     String.fromCharCode(64 + j),String.fromCharCode(64 + j),String.fromCharCode(64 + j),String.fromCharCode(64 + j),String.fromCharCode(64 + j));
// }
//64+j yaani 65 kaa string value ascii value me A hai, aur 5 baar String.fromCharCode(64 + j), kiye isliye 5 baar print hogaa.
//64+j yaani 66, phir 67, 68, 69 tak qki har baar j++ ke karan j me +1 add ho raha value 1 se 2 phir 3, 4, 5 iss tarah change hote jaayegaa.
//aur paach paanch baar alag alag value print hoga. 
//same:--
//Q9- What is the output?
// for (let j = 1; j < 6; j++) {
//  console.log(String.fromCharCode(64 + j));
// } 
//total 5 baar yaani 5 tak yaani jabtak 6 se chota ho tabtak print karayegaa 64+j(1) if 65=[A] karke, jaha j kaa value j++ ke kaaran change hogaa.
// for (let j = 1; j < 4; j++) {
//     console.log(String.fromCharCode(64 + j),String.fromCharCode(64 + j));
//    } 
//yaha console ke andar 2 baar String.fromCharCode(64 + j) call kiye isliye 2 2 baar AA BB CC karke print karayega.
//Aur teen baar hii hogaa qki 4 se chota aur yadi 1 se initialize kiye hai to sirf 3 condition hi true honge.[joki 1,2,3 hai]


//Q10 - What is the output?
// for (let j = 5, k = 1, l = 2, m = 3, n = 4, x = 5; j > 0; ) {   //loop kaa 3rd part empty hai isliye loop kaa aage ko dono part hi sambhalega.
//  console.log(x, x - 1 + k, x - 2 + l, x - 3 + m, x - 4 + n);  // console kaa kaam yahi aur isi statement tak hai ; ke kaaran
//  j = j - 1;           // yaha se statement sab print nahi hogaa qki console nahi hai but function hai aur hogaa 
//  k = 0;                 // isliye yaha se value change ho gaya
//  l = 0;                 // see related scr.srt. if not clear. otw lacture of 10april 37:00 se clear kar.
//  m = 0;
//  n = 0; 
// }
//1st condition j=5 jab true hua tab jab 1st console print hua tab k,l,m,n kaa value 0 ho gaya aur j ka 5 se 4, isi tarah j kaa value ghatte 
//ghatte jab 0 ho jaayega [j=1 ke condition me 0[j-1=1-1] hoga] tab loop terminate ho jaayega.

//Q11- What is the output?
// for (let j = 5; j > 0; j = j - 1) {
// if (j === 5) {   //ye ek hii baar follow karegaa qki j==5 ek condition me true hogaa joki pahla condition rahega.
//  console.log(5, 5, 5, 5, 5);
//  } else {         //Phir ye condition ko follow karegaa qki loop kaa 3rd part update expression j--/j-1 karke j=4 kar diya.
//  console.log(5, 4, 3, 2, 1);     //Aur 4, 3, 2, 1 ke case me yaani total 4 baar ye console print hoga.
//  }
// }
//It's Very Simle try to understand, you must able to understand.

//Create a loop that runs through each item in the fruits array:--
// let fruits = ["Apple", "Banana", "Orange"];
// for (x of fruits) {
//   console.log(x);
// }
//Remember it is process for printing an array thorogh loop.


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


