//[JAVASCRIPT CONDITIONALS:--]
//● if statement: To specify a block of code to be executed, if a specified condition is true
//● else statement: To specify a block of code to be executed, if the same condition is false.
//● else-if statement: To specify a new condition to test, if the first condition is false.
//● switch statement: To specify many alternative blocks of code to be executed.//

//Example of if Condition:--

// let price = 100;
//if(price>50){
//     console.log("congratulations")
//     console.log("congratulations")
//     console.log("congratulations")
//}
//if(price>500){
//     console.log("congratulations1")
//     console.log("congratulations2")
//     console.log("congratulations3")    
//}
//if(price>500)
//     console.log("congratulations1")
//     console.log("congratulations2")
//     console.log("congratulations3")    
//yaha gaur karne waali baat ye hai kii agar bracket{} se if kaa area limit/target naa kare to if ek console execute karke aglaa console execute
//hone me koi interfare nahi karegaa. isliye yaha congratulations 2&3 print hoga aur hua. 
//Agar if ke baad bracket/boundary/scope/{} naa de to by defualt uska scope aglaa line hota hai.
// if(price>500)
//     ; // ab yaha pe output 123 teeno aayegaa qki hamne if kaa statement console ko call karne se pahle close kar dia hai ; lagake. 
//     console.log("congratulations1")
//     console.log("congratulations2")
//     console.log("congratulations3")  

//Example of else condition:--
// let price = 100
// if(price>50)
//     console.log("congratulations1")
// else
//     console.log("congratulatins2")
// let price = 100

// if(price>500)
//     console.log("congratulations1")
// else
//     console.log("congratulatins2")

// if(price>50){//abhi yaha if[congratulation1] condition follow kar raha hai agar 50 ko 500 kar de to else[congratulation2] conditionfollowkaregaa.
//     console.log("congratulations1")
//     console.log("congratulations1")  
//     console.log("congratulations1")
//     }
// else{
//     console.log("congratulatins2")
//     console.log("congratulatins2")
//     console.log("congratulatins2")
//     }

//Example of else if condition:--
// let price = 100;//[yaha se price varry karenge,]aur yaha hamne conditional js ke throgh ek writing function banayaa hai kii 99 se chota yaa 99 
// if(price<=99){  //ho to 3baar congratulation1 write ho nahi to/otherwise koi bhi other value ho to congratulations2 print ho.(try it chng let).
//     console.log("congratulations1")
//     console.log("congratulations1")  
//     console.log("congratulations1")      //ye kaam sirf *if aur else* condition lagake bhi kiya jaa sakta hai joki niche kiye hai but agar ham 
//     }                                    //koi naya condition rakhna chahe to yaha rakh sakte waha nahi, qki yaha *if aur else if* kaa use 
// else if(price>=100){                     //kiye hai. note:- hamlog else ke saath koi naya condition nahi rakh sakte,
//     console.log("congratulatins2")       //                  naya condition sirf else if ke saath hii rakha jaata hai. 
//     console.log("congratulatins2")
//     console.log("congratulatins2")
//     }
//yaha price>=100 kaa matlab upar wala let price= se hai yaha jo let price kaa value hoga wo nay else if condition ke according hona chahye, joki 
// 100 se bara yaa barabar hona chahye, Tabhi congratulations2 hogaa. Otherwise congratulations1 hogaa.
// let price=110
// if(price<=99){
//     console.log("congratulations1")
//     console.log("congratulations1")  
//     console.log("congratulations1")
//     }                                      //yaha upar jaisa writing function create to kar liye but koi naya condition yaha add nhi kar sakte,
// else{                                      //jabki upar waale me kar sakte qki waha *else if* kaa use kiye, aur yaha *else* kaa.
//     console.log("congratulatins2")                   // aur else ke saath naya condition nahi rakha jaa sakta.
//     console.log("congratulatins2")                   // qki else me by default condition pahle wala kaa hota hai.
//     console.log("congratulatins2")
//     }

// “switch” statements: The switch statement is used to perform different actions based on different conditions.


//● Nested if statements:--
// if(condition)
// {
//  if(condition)         //here more than two conditions can apply. 
//  {
//  statements;
//  }
// }
//example:--
// let sellprice = 500;
// let buyprice = 300
// if(sellprice>500)//condition1
// {
//     if(buyprice>200)//condition2
//     {
//         console.log("BUY_IT")// here nothing happens because condition2 follows but condition1 not.
//     }
// }
// else
// {
//     console.log("DON'T_BUY.")
// }

// let sellprice = 600;
// let buyprice = 300
// if(sellprice>500)//condition1
// {
//     if(buyprice>200)//condition2
//     {
//         console.log("BUY_IT.")//here both[nested] if condition follows so output comes BUT_IT.
//     }
// }

//● Nested if-else:--
// if(condition)
// {
//  statements;
// }
// else
// {                                     //if aur else kaa nested hai yaha pe, concept same hai bas nested ho gaya.
//  if(condition)
//  {
//  statements;
//  }
//  else
//  {
//  statements;
//  }
// }

//Example Of Multi-time used if Condition:--
// let score =85;
// if (score>=90){
//     console.log("A-grade")
// }
// if (score<90&&score>=80){     //This statment says if score is between 80 to 89 then print B-grade.
//     console.log("B-grade")
// }
// if (score<80&&score>=70){    //[&&] this one is "Between" Relational Operator. 
//     console.log("C-grade")
// }
// if (score<70){
//     console.log("Failed")
// }

// if (10 > 5){
//     var outcome = "if block"; 
// }
// console.log("outcome");
//yaha code keh raha hai agar 10 paanch se bara hai to variable outcome ka value if block ho. then hamne console se outcome ka value print 
// karane ko kaha to outcome ka value if block kara diya qki sach me 10 paanch bara hai.

//else statement example:--
// if ("cat" === "dog") {
//     var outcome = "if block";
//     }
// else {
//     var outcome = "else block";
//     }
// console.log(outcome);
//yaha === statement keh raha kii, cat aur dog kaa type aur value equal hai to, outcome=if block print karao otw outcome= else block karao.

//● if else if statement:--
// if (condition1)
// {
//  // do this if condition1 is true
//  // condition 1 statements
//  // then exit if/else if
// }
// else if (condition2)
// {
//  // do this if condition2 is true
//  // condition 2 statements
//  // then exit if/else if
// }
// else if (condition3)
// {
//  // do this if condition3 is true
//  // condition3 statements
//  // then exit if/else if 
// }
//Example of above if else if statement:--
// let score = 85;
// console.log("Calculation of letter grade for score of 85");
// if(score>=90)
// {
//     console.log("A")
// }
// else if (score>=80)
// {
//     console.log("B")
// }
// else if (score>=70)
// {
//     console.log("C")
// }

//Example of Nested if else statement:--
// let situation="isSnowing"
// let temp = -1;
// if (situation=="isRaining"){
//     if(temp>45){
//         console.log("wear light weight rain coat")
//     }
//     else{
//         console.log("wear fleece and rain coat")
//     }
// }
// else if (situation=="isSnowing"){     //===/== lagana jaruri hai qki situation kaa type yaa kam se kam value check karana hoga,then work.
//     if(temp>20){
//         console.log("wear soft shell jacket")
//     }
//     else if (temp>0){                      //==bhi laga sakte aur === bhi qki ==detmines/check only value & === checks both type and value.
//         console.log("wear down jacket")
//     }
//     else{                                  //uchit hai == lagana qki yaha sirf value hii check karana hai,jaha type dependent case ho waha==
//         console.log("wear base layers and down jacket")
//     }
// }
// else {   //iss condition ko follow karne keliye situation kaa value naa israining hona chahye naa issnowing, iscolding/.... then work. 
//     console.log("It is hard to with interesting examples")
// }
//Yha pahle situation check karega aur jo fulfill karegaa then uska temp check kar uske according console print hoga.
//tesra wala condition tab execute hoga jab situation israining yaa issnowing naa rahegaa.


//Switch Statement:--
//● Use the switch statement to select one of many code blocks to be executed.
//Syntax:--
// switch(expression) 
// {
//  case x:
//  // code block
//  break;

//  case y:
//  // code block
//  break;

//  default:
//  // code block
//  break;
// }
//Example:--
// let a = 2;
// switch (a)
// {
//  case 1:        //case is used for value casing, matlab alag alag value rakna -- jiske liye alag alag code define karenge.
//  a = 'one';
//  break;

//  case 2:   
//  a = 'two';
//  break;        //break is used for breaking/terminating/ending the program after result gain.

//  default:
//  a = 'not found';
//  break;        //agar break naa denge to output nahi aayegaa, aur the value is not found bataayega.
// }
// console.log(`The value is ${a}`);
//nothing try to understand it's simple.
//Utilization of switch case:--
// let day = 2;
// switch(day)
// {
//     case 1:
//     day="monday";
//     break;   
    
//     case 2:
//     day="tuesday";
//     break;

//     case 3:
//     day="wednesday";
//     break;

//     case 4:
//     day="thrusday";
//     break;

//     case 5:
//     day="friday";
//     break;

//     case 6:
//     day="satrurday";
//     break;

//     case 7:
//     day="sunday";
//     break;

//     default:
//     day="funday/weekend";
//     break;
// }
// console.log(`Today is ${day}.`)    //yaha `...`[backticks] lagana jaruri hai "..." se kaam nahi chalega is case me.


//question:--
//Write a JavaScript program that accept two integers and display the larger:--
// var num1=10,
// num2=20;
// if(num1>num2){ 
//   console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
//   }   
// else
//   if(num2>num1) {
//   console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
//   }                  
// else
//   {
//    console.log("The values "+ num1+ " and "+num2+ " are equal.");
//   }

// `${num1}` aur "+num1+" ye dono tarika hai defined value write karane kaa.
//example:--
// let num1=10
// let num2=20
// console.log(`${num1}`)
// console.log(`    ${num1}    `)
// console.log(""+num2+"")
// console.log("    "+num2+"    ")       //"+num2+" ye sahi hai.


