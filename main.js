/*It's pretty straightforward. Your goal is to create a function that removes the first and last characters
of a string. You're given one parameter, the original string.
You don't have to worry with strings with less than two characters.*/
function removeStr(newString){
    console.log(`${newString.slice(1,-1)}`);
}
removeStr("Hello");

/*Complete the square sum function so that it squares each number passed into 
it and then sums the results together.*/
function squareSum(...num) {
    let sum=0
    for( let i = 0; i < num.length; i++) {
        sum+=num[i]**2;
    }
    return `${sum}`
}
console.log(squareSum(3,4,5));

/*Given an array of integers your solution should find the smallest integer. */
let array=[44,66,87,56,99,89,53]
console.log(Math.min(...array));

/*Create a function that checks if a number n is divisible
 by two numbers x AND y. All inputs are positive, non-zero numbers */
function div(...num){
let x=4;
let y=2;
if ( (num % x == 0) && (num% y == 0) ){
    console.log("true")}
    else{
        console.log("false")
}
}
div("100");

/*Your classmates asked you to copy some
paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0. */
function paperwork(n,m) {
if((n < 0 ) || (m < 0)){
    return 0;
} 
    else{
        sum=n*m;
        return `${sum}`;
}
}
console.log(paperwork(5,7));

/*Given an array of integers, return a new array with each value doubled.*/
function duplicateArray(arra) {
    let newArray=[];
    
    for (let i = 0; i < arra.length; i++) {
        let result=arra[i]*2
        newArray.push(result)}
    
console.log(`[${arra}] [${newArray}]`);
}
duplicateArray([4,5,6,7,8,9,10,11,12])

/*Make a function that will return a greeting statement that uses an input; 
your program should return, "Hello, <name> how are you doing today?". */
function sayHello(name){
    return `Hello ${name} how are you doing today?`
}
let result= sayHello("Zeinab");
console.log(result);

/*Clock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time since midnight in milliseconds. */
function mid(s,m,h){
    let seconds= s * 1000;
    let minutes= m * 60000;
    let hours= h * 3600000;
    return `${seconds + minutes + hours}`;
}
console.log(mid(60,59,11));

/*Given an array of integers.
Return an array, where the first element is the count of positives
numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array. */

function countPositivesSumNegatives(item) {
    let sumOfPositive = 0 
    let sumOfNegative = 0
    for (let i = 0; i < item.length; i++){
        if(item[i]> 0) {
            sumOfPositive+=item[i];
        }
        if(item[i] < 0) {
            sumOfNegative += item[i]
        } 
        else if(item[i]===0 || item[i]===null) {
            return [];
        }
    }
    console.log(`${sumOfPositive},${sumOfNegative}`);
}
countPositivesSumNegatives([1,2,3,4,5,6,7,8,9,-4,-3,-11,,21,23,3,-9,-8,-7]);


/*Implement a function which convert the given boolean value into its string representation.
Note: Only valid inputs will be given.
 */
function bool(str){
    let result=str.toString();
    if (str===result) {
        console.log("true")}
        else{
            console.log("false")
    }
    }
    bool("Zeinab")
    bool(12333)
