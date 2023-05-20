//Javascript Loops(While & Do While):--

//console.log("Javascript Loops(While & Do While)");

//Introduction:--
//● With a loop, we can automate and repeat indefinitely a block of code, for how many times we want it to run. 
//● A JavaScript for loop executes a block of code as long as a specified condition is true

//The syntax of the While loop is:--
// while(condition){
//    bodey of the loop.
// }

// Example 1: Display Numbers from 1 to 5 :--
// let i = 1, n = 5;
// while(i<=n){
// console.log(i);
// i+=1  //iska matlab hua i++
// }
///normal hai clear hai.

//Example 2: Display Odd Numbers between 1 to 10 :--
// let i = 1, n =10
// while(i<=n){
//     console.log(i);
//     i+=2  //iska matlab hua i+2
//     }
//if we use count in the place of i then also work no issue:--
// let count = 1, n =10;
// while(count<=10){
//     console.log(count);
//     count+=2  // count=count+2; matlab count me 2 jorte jaana hai taaki odd declar ho. i ke jagah count use kiye hai.
//     }

//Example 3: Infinite while loop:--
//● If the condition of a loop is always true, the loop runs for infinite times (until thememory is full). For example,
//● In the above program, the condition is always true which will then run the code for infinite times.
//  first initialize the variable.
//  While (true condition apply) {
// body of loop
//    }
//ex:--
// let i=1, n=10;
// while(i>=1){
//     console.log(i);
// }
//in this way we init a infinite while loop.


//do While loop:--
//same as while but here first do the work of body then check while condition. so it is called do while loop.
//1. The body of the loop is executed at first. Then the condition is evaluated.
//2. If the condition evaluates to true, the body of the loop inside the do statement is executed again.
//3. The condition is evaluated once again.
//4. If the condition evaluates to true, the body of the loop inside the do statement is executed again.
//5. This process continues until the condition evaluates to false. Then the loop stops.
//The syntax of the do While loop is:--
//first initialize the variable.
//do {
// body of loop
//} 
//while (condition); //here when condition is false then loop terminates. but 1 time body run in false condition.
//Examples:--
//Example 1: Display Numbers from 1 to 5:--
// let i= 1 , n = 5;
// do{
//     console.log(i);
//     i+=1 //means i++
// }
// while(i<=5);    //for true condition.
//for false condition output is 1 because 1 times already body run which is under do. then while condition check. then loop terminate.
// let i= 1 , n = 5;
// do{
//     console.log(i);
//     i+=1 //means i++
// }
// while(i>=5);   

//Example 2: Display sum of first five natural numbers i.e.1 to 5[1+2+3+4+5=15]:--
// program to display sum of first five natural numbers:--
// initialize the variable:--
// let number = 1;
// const n = 5;
// let sum = 0;
// do {
//  sum = sum + number;     //in first case yaha number = 1 aaya so case 1 me sum 1 ho jaayega aur number 1 to hai hii.
//  number = number + 1;     // number++ // number +=1
//  //console.log(`number is ${number} and sum is ${sum}`);     // ye mechanism hai for understand, jisko hamne print karaya hai. 
// } 
// while (number <= n)    // do...while loop from i = 1 to 5
// console.log(`The sum is ${sum}.`);
//Try to understand step by step it's so simple.


