// 1.	Write a program to count the sum of digits in
// a number
// input:123
// Output:6
////////////////////////     ONE     //////////////////////////////
          ///// final answare /////
//   function getSum(num) {
//     return String(num).split('').reduce((x, y) => {
//         return x + Number(y);
//       }, 0);
//   }
// var arr=prompt("Enter an array");
  
//   console.log(getSum(arr));






////////////////////////////////
// function sumArr(arr)
// {
//     var sum=0;
//     for(var i=0;i<arr.length;i++)
//     {
//         sum=arr[i]+sum;
//     }
//     return sum;
// }
// var arr=prompt("Enter an array");
// var array = arr.split("");
// console.log(array);
// var arrOfNum=parseInt(array);
// console.log(arrOfNum);
//  var total=sumArr(arrOfNum);
// console.log(parseInt(total));
// console.log(arr);
    // var array = arr.split("");
    // console.log(parseInt(array));
    // console.log(array);
// document.write(total);
// var arr=[1,2,3];




/////////////////////////////////////

// 2.	Write a  program to reverse any input
// Input:123
// Output:321

////////////////////////     TWO     //////////////////////////////

          ///// final answare /////
var arr = prompt ("Enter any input");
var array = arr.split("");
console.log(array);
var reversed = array.reverse();
console.log('reversed array:', reversed);

////////////////////////////////////////
// var arr = [1,2,3];
// console.log(arr);

// var reversed = arr.reverse();
// console.log('reversed arr:', reversed);

/////////////////////////////////////



// 3.	Write a  to check an integer is a palindrome or not.
//  An input  is a palindrome when it reads the same forward
//   as backward
// Input: 123
// Output: no
// Input: 111
// Output: yes

////////////////////////     THREE     //////////////////////////////


// var arr1 = prompt("Enter elements");
// let arr2 = prompt("Enter second element");
// let arr3 = prompt("Enter third element");
// var arr =[arr1,arr2,arr3];


// var reversed = arr.reverse();

// if (arr==reversed){
//     document.write("yes");
// }
// else {
//     document.write("no");
// }



/////////////////////////////////////
// 4.	Given a number N and a list A of N numbers. Determine if the number X exists in
//  array A or not and print its position (0- index)
// Input N: 3
// Input list: 3 0 1
// Input x: 0
// Output: 1
// Another input
// Input N: 5
// Input list: 1 3 0 4 5
// Input X: 10
// Output: -1 because there isn’t exists



////////////////////////     FOUR     //////////////////////////////


// var x= prompt("enter a number");
// var n=prompt("Enter a number");
// var arr = prompt("Enter an array");
// var x =prompt("Enter a number to search");
// if (arr.includes(x))
// {
//     console.log("true");
// } else {
//     console.log("false");
// }

// console.log(arr.includes(x));







/////////////////////////////////////

// 5.	Given a list of numbers, write a program to remove element from a list
//  based on the index
// Input N:4 
// Input list: 1 2 3 4
// Input index:2
// Output:1 2 4


////////////////////////     FIVE     //////////////////////////////

// var arr = [1,2,3,4,5]; //
// console.log(arr);

// const index = prompt("enter the index");
// if (index > -1) {
//   arr.splice(index); 
// }
// console.log(arr);

/////////////////////////////////////

// 6.	Write a Python program to get a string made of the first 2 and the last 2 chars from 
// a given a string. If the string length is less than 2, return instead the empty string
// Input: itiaswan
// Output: Itan


////////////////////////////////////////////////////
// var arr = prompt("Enter an array");
// var arr2;
// arr2.slice(arr1); 
// console.log(arr2);
// var arr =['i','t','i',' ','a','s','w','a','n'];
// var arr2=[];
/////////////////////////////////////////////////////

////////////////////////     SIX     //////////////////////////////

// var x = 'iti aswan';
// var y = x.slice(0, 2);
// var z = x.slice(-2);

// var arr=[y+z];
// console.log(arr);

// function arraystring(){
//     var x = prompt("Enter a string");

//     if(x.length>2)
//     {
//         console.log("Error");
//     } else {
//         var y=arxr.slice(0, 2);
//         var z = x.slice(-2);
//     }

//     var arr=[y+z];
//     console.log(arr);
// }





// call func.


// var y = x.slice(0, 2);
// console.log(y);
// console.log(z); 







/////////////////////////////////////
// 7.	You are required to enter a word that consists of x and y that denote the number of Zs 
// and Os respectively. The input word is considered similar to word zoo if (2*x=y). Determine 
// if the entered word is similar to word zoo. For example, words such as zzoooo and zzzoooooo 
// are similar to word zoo but not the words such as zzooo and zzzooooo.
// Input: zzzoooooo
// Output: yes
// Input: zzoo
// Output: no


// let str = prompt("input!");
// let z = 0;
// while (str[z] === 'z') {
//   z++;
// }

// let o = z;
// while (str[o] === 'o') {
//   o++;
// }

// console.log(z * 2 === o - z ? "yes" : "no");









