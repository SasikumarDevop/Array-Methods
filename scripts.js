// let arr=[11,12,13,14,15]
// let result=[];
// for(var i=0; i<=arr.length-1; i++){
        
//     result.push(arr[i]*2)
// }
// console.log(result)

// using map in annonyomus function
/*let fruits=["apple","mangoe","orange"]
let result=fruits.map(function(key){
    return key+"s"
})
console.log(result)
*/

// using map in arrow function

/*let result1=fruits.map((key)=>key+"s")
console.log(result1)*/

//Filter

// normal method

/*let arr=[11,12,13,14,15]
let result=[];
for( var i=0; i<=arr.length-1; i++)
{
    if(arr[i]%2===0)
        {
            result.push(arr[i])
        }
    
}console.log(result)
*/

//using filter in normal function

/*let array=[11,12,13,14,15,16];
function even(key){
    return key%2===0
}
const result=array.filter(even)
console.log(result)
*/

//using filter in annoymous function

/*let arr=[11,12,13,14,15,16]
const result=arr.filter(function(key){
    return key%2===0
})
console.log(result)
*/

//using filter in arrow function
/*
let arr=[1,2,3,4,5,6]
const result=arr.filter((value)=>value%2===0)
console.log(result)
*/

//Task
// using normal for loop method
/*let number=[1,2,3,4,5,6,7,8]
const result=[];
for(var i=0; i<=number.length-1; i=i+1)
{
    if(number[i]>3)
    {
        result.push(number[i])
    }
}console.log(result)
*/

//using filter in normal function

/*let number=[1,2,3,4,5,6,7,8]
function big(key){
 return key>3
}
const result=number.filter(big)
console.log(result)
*/

// using filter in arrow function

/*
let number=[1,2,3,4,5,6,7,8]
const result=number.filter((key)=>key>3)
console.log(result)
*/

// using filter in annonyomus function

/*
let number=[1,2,3,4,5,6,7,8]
const result=number.filter(function(value) {
    return value>3
})
console.log(result)
*/

//Reduce

// normal method to find the maximum value in the given array
/*
let arr=[1,2,3,8,4,5]
let max=0;
for (let i=0; i<arr.length; i=i+1)
{
    if(arr[i]>max)
    {
        max=arr[i]
    }
}
console.log(max)
*/

// Normal method, sum of array
/*
let arr=[1,2,3,4,5]
let sum=0;
for(let i=0; i<arr.length; i=i+1)
{
    sum=sum+arr[i]
}
console.log(sum);
*/

// Normal method,Multiply of the array
/*
let arr=[1,2,3,4,5]
let sum=1;
for(let i=0; i<arr.length; i=i+1)
{
    sum=sum*arr[i]
}
console.log(sum);
*/

//Multiply of array using reduce
/*
let arr=[1,2,3,4,5]
const result=arr.reduce((mul,i)=>{
    return mul*i
})
console.log(result)
*/

// Find the greatest number in array using reduce method

/*let arr=[1,2,3,10,4,5,9]
let max=0;
const result=arr.reduce((ini,i)=>{
   if(i>max)
    max=i
    return max
})
console.log(result)
*/

// Rotate and Arry by K times.

//rotate an array by k times
const arr = [1,2,3,4,5]
const k =3;
function rotate(arr,k){
     for(let i=0;i<k;i++){
         arr.push(arr[i])
     }
     for(let i=0;i<k;i++){
        arr.shift()
     }
     return arr
}
console.log(rotate(arr,k));

