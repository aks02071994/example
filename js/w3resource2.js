//  21 .  Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

// let str = 'pyankit';
// function sentence(str){
//     let str1;
//    if(str.substring(0,2)==='py'){
//        return str;
//    }
//    else{
//     return 'py'+str;

//    }
// }console.log(sentence(str));

//  22 .  Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

// //  let str = 'Naseem';
// function removeChar(str, charposition){
//     let str1;
//     let str2;
//       str1 = str.substring(0, charposition);
//       str2 = str.substring(charposition+1, str.length);
//       return (str1+str2);
// }
// console.log(removeChar('naseem',3));
// console.log(removeChar('ankit', 4));
// console.log(removeChar('asif', 1));

//output : nasem , anki , aif

//  23 .  Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.

// let str4;
// let str1;
// let str2;
// let str3;
// function changePosition(str){
//     str1 = str.charAt(0);
//     str2 = str.substring(1,str.length-1);
//     str3 = str.charAt(str.length-1);
//     str4 = str3 + str2 +  str1;
//     return str4;

// }
// console.log(changePosition('abcdz'));

// output: zbcda

//  24.  Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.

// function changePosition(str){
//     let str1;
//     let str2;
//     str1 = str.charAt(0);
//     str2 = str1 + str + str1;
//     return str2;

// }
// console.log(changePosition('ankit'));

// output: aankita

//  25.  Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.

// let num = 81
// function multiple(num){
//     if(num%3===0 || num%7===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }console.log(multiple(41));
// console.log(multiple(21));

// output: false
//         true

//  26.  Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.

// function newStr(str){
//     let str1;
//     str1 = str.substring(str.length-3);
//     strNew = str1 + str + str1;
//     return strNew
// }
// console.log(newStr('ankite'));

//output:  iteankiteite

//  27.  Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.

// function checkStr(str){
//     if(str.substring(0,4)==='java'){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(checkStr('javaScript'));
// console.log(checkStr('Ankit'));

// output: true;
//         false;

//  28.  Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.

// function checkInt(num1,num2){
//        if(num1>50 && num1<99 || num2>50 && num2<99){
//            return true;
//        }
//        else{
//            return false;
//        }
// }
// console.log(checkInt(60,80));
// console.log(checkInt(60,120));
// console.log(checkInt(95,76));
// console.log(checkInt(100,80));

// output: true
//         true
//         true
//         true

//  29.  Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range

// function checkInt(n1,n2,n3){
//     if(n1>50&&n1<99||n2>50&&n2<99||n3>50&&n3<99){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(checkInt(20,44,120));
// console.log(checkInt(55,70,90));

// output: false;
//         true;

// 30. Write a JavaScript program to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.

// function cutStr(str){
//     let str1;
//     let str2;
//     str1 = str.substring(4,10);
//     if(str1==='script'){
//           str2 = str.substring(0,4);
//           return str2;
//     }
//     else{
//         return str;
//     }
// }
// console.log(cutStr('javascript'));
// console.log(cutStr('ankitsingh'));

//output: java
//        ankitsingh

// 31. Write a JavaScript program to find the largest of three given integers.

// let array = [40,50,53,96,100,120,43,35];
// function maxNum(arr){
//     let max=0;
//     for(let i=0; i<=arr.length; i++){
//         if(arr[i]>max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(maxNum(array));

//output: 120;

// 32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

// function nearest(n1,n2){
//     if(n1!==n2){
//         x = Math.abs(n1-100);
//         y = Math.abs(n2-100)

//     if(x>y){
//         return n2;

//     }
//      if(x<y){
//         return n1;
//     }
// }
//     else{
//         return false;
//     }
// }
// console.log(nearest(90,99));
// console.log(nearest(-90,-89));
// console.log(nearest(110,108));
// console.log(nearest(110,110));
// console.log(nearest(90,90));

//output: 99
//       -89
//        108
//        false
//        false;

//  33.  Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

// function range(n1,n2){
//     if(n1>=40&&n1<=60&&n2>=40&&n2<=60 || n1>=70&&n1<=100&&n2>=70&&n2<=100){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(range(70,60));
// console.log(range(56,41));
// console.log(range(70,99));
// console.log(range(49,81));

//output:  false
//         true
//         true
//         false;

// 34. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.

// function maxNum(n1,n2){
//     if(n1>=40&&n1<=60&&n2>=40&&n2<=60&&n1>n2){
//         return n1;
//     }
//     else if(n1>=40&&n1<=60&&n2>=40&&n2<=60&&n2>n1){
//         return n2;
//     }
//     else{
//         return false;
//     }
// }
// console.log(maxNum(40,60));
// console.log(maxNum(50,43));
// console.log(maxNum(70,43));

//output: 60
//        50
//       false

// 35. Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.

// function checkInt(str){
//     let str1;
//         str1 = str.substring(2,3)
//     if(str1==='i'){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(checkInt('ankit'));
// console.log(checkInt('anil'));
// console.log(checkInt('align'));
// console.log(checkInt('equipment'));

//output: false
//        true
//        true
//        false

// 36. Write a JavaScript program to check whether the last digit of the three given positive integers is same.

// function last_digit(x, y, z)
// {
//   if ((x > 0) && y > 0 && z > 0 && x % 10 === y % 10 && y % 10 === z % 10 && x % 10 === z % 10)
//     {
//      return true ;
//    }
//   else
//     return false;
// }

// console.log(last_digit(21, 31, 401));
// console.log(last_digit(-20, 30, 400));
// console.log(last_digit(20, -30, 400));
// console.log(last_digit(20, 30, -400));

// output: true
//         false
//         false
//         false;

//  37.  Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.

// function newStr(str){
//     let str1;
//     let str2;
//     if(str.length>=3){
//         str1 = str.substring(0,3).toLowerCase();
//         str2 = str.substring(3,str.length);
//         return str1+str2;
//     }
//     else{
//         return str.toUpperCase();
//     }
// }
// console.log(newStr('ANKIT'));
// console.log(newStr('an'));
// console.log(newStr('ANKITSINGH'));
// console.log(newStr('ANKit'));

//output: ankIT
//        AN
//        ankITSINGH
//        ankit;

//-------------------------------------------------------------

//  38.  Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade and total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.

// function exam_status(totmarks,is_exam)
//   {
//   if (is_exam) {
//     return totmarks >= 90;
//   }
//  return (totmarks >= 89 && totmarks <= 100);
//  }

// console.log(exam_status("78", " "));
// console.log(exam_status("89", "true "));
// console.log(exam_status("99", "true "));

//output: false
//        false
//        true;

//----------------------------------------------------------

// 39. Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

// function sum(x,y){
//     let add;
//     add = x + y;
//     if(add>50&&add<80){
//         return 65;
//     }
//     else{
//         return 80;
//     }
// }
// console.log(sum(40,30));
// console.log(sum(40,10));
// console.log(sum(30,50));
// console.log(sum(20,45));
// console.log(sum(44,30));

//output: 65
//        80
//        80
//        65
//        65;

//------------------------------------------------------------

//  40.  Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.

// function checkInt(n1,n2){
//     let nb ;
//     let ns;
//     if(n1>n2){
//         nb = n1;
//         ns = n2
//     }
//     else{
//         nb = n2;
//         ns = n1;
//     }

//     if(n1===8||n2===8||n1+n2===8||nb-ns===8){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(checkInt(8,10));
// console.log(checkInt(10,18));

//------------------------------------------------------------

// 41. Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.

// function checkInt(n1,n2,n3){
//     if(n1===n2&&n2===n3){
//         return 30;
//     }
//      if(n1===n2|| n2===n3 || n3===n1){
//         return 40;
//     }
//     else{
//         return 20;
//     }
// }
// console.log(checkInt(20,20,20));
// console.log(checkInt(20,20,30));
// console.log(checkInt(20,30,40));
// console.log(checkInt(44,44,44));

//output: 30
//        40
//        20
//        30;

//------------------------------------------------------------

//  42.  Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.  Go to the editor
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

// function order(n1,n2,n3){
//     if(n2>n1&&n3>n2){
//         return 'Strict';
//     }
//     if(n3>n2){
//         return 'Soft';
//     }
//     else{
//         return 'No';
//     }
// }
// console.log(order(10, 15, 31));
// console.log(order(24, 22, 31));
// console.log(order(22, 22, 40));
// console.log(order(22, 42, 35));

//output: Strict
//        Soft
//        Soft
//        No ;

//-------------------------------------------------------------

// 43. Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

// function checkRightMost(n1,n2,n3){
//     if(n1%10===n2%10 || n2%10===n3%10 || n3%10===n1%10){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(checkRightMost(22,32,42));
// console.log(checkRightMost(20,82,62));
// console.log(checkRightMost(26,36,32));
// console.log(checkRightMost(22,36,40));

//output: true
//        true
//        true
//        false ;

//---------------------------------------------------------

// 44. Write a JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others.

// function findNum(n1,n2,n3){
//     if((n1>=20 && (n1<n2||n1<n3)) || (n2>=20 && (n2<n1||n2<n3)) ||(n3>=20 && (n3<n1||n3<n2))){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(findNum(10, 24, 20));
// console.log(findNum(23, 45, 10));
// console.log(findNum(23, 23, 10));
// console.log(findNum(21, 66, 75));

//output : true
//         true
//         false
//         true ;

//---------------------------------------------------------

// 45. Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.

// function checkInt(n1,n2){
//     let nm;
//     let ns;
//     if(n1>n2){
//         nm = n1;
//         ns = n2;
//     }
//     else{
//         nm = n2;
//         ns = n1;

//     }
//     if(n1===15 || n2===15 || n1+n2===15 || nm-ns===15){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(checkInt(10,25));
// console.log(checkInt(15,25));
// console.log(checkInt(65,45));
// console.log(checkInt(100,55));

// output: true
//         true
//         false
//         false ;

//-----------------------------------------------------------

//  46.  Write a JavaScript program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11.

// function multiple(n1,n2){
//     if(n1>0 && n2>0){

//         if(n1%7===0 ||n1%11===0 ||n2%7===0 || n2%11===0){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
//     else{
//         return 'Question is not correct';
//     }

// }
// console.log(multiple(60,-71));
// console.log(multiple(23,70));
// console.log(multiple(-44,14));
// console.log(multiple(62,121));
// console.log(multiple(65,24));

//output: Question is not correct
//        true
//        Question is not correct
//        true
//        false ;

//------------------------------------------------------------

//  47.  Write a JavaScript program to check whether a given number is presents in the range 40..10000.

// function checkNum(num){
//     if(num>=40 && num<=10000){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(checkNum(35));
// console.log(checkNum(1000));
// console.log(checkNum(10003));
// console.log(checkNum(2345));
// console.log(checkNum(80));

// output: false
//         true
//         false
//         true
//         true ;

//------------------------------------------------------------

//  48.  Write a JavaScript program to reverse a given string.

// function reverseStr(str){
//     let str1;
//     for(let i=str.length-1; i>=0; i--){
//         str1 = str[i];
//         console.log(str1);
//     }
// }
// reverseStr('ankit');

//     OR     //

// function reverseStr(str){
//    let str1;
//     str1 = str.split('').reverse().join('');
//     return str1;
// }
// console.log(reverseStr('ankit'));

// output: tikna;

//----------------------------------------------------------

//  49.49.          (SOLVE NHI HUA HAI)       Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

// function nextAlpha(str){
//     let str1;
//     for(let i=0; i<str.length; i++){
//         for(let j=a; j<=z; j++){
//             if(str[i]===str[j]){
//                 strNew = str[j+1];
//             }
//         }
//     }
//     return strNew;
// }
// console.log(nextAlpha('ankit'))

//-------------------------------------------------------------

//  50.  Write a JavaScript program to capitalize the first letter of each word of a given string.

// let strr = 'this is nice to see you';
// function firstLetter(str){
//     let str1;
//     let str2;
//     let result = [];
//      str1 = str.split(' ');
//      for(let i=0; i<str1.length; i++){
//          str2 = str1[i].replace(str1[i][0],str1[i][0].toUpperCase());
//            result.push(str2);
//      }
//      return result.join(' ');
//     }
// console.log(firstLetter(strr));

//output: This Is Nice To See You

//----------------------------------------------------------

//  51.  Write a JavaScript program to convert a given number to hours and minutes.

// function time(num){
//     let hours = Math.floor(num/60);
//     let minutes = num%60;
//     return hours + ' Hours ' + ' : ' + minutes + 'minutes';
// }
// console.log(time(360));
// console.log(time(365));
// console.log(time(500));
// console.log(time(820));
// console.log(time(2000));

//output: 6 Hours  : 0minutes
//        6 Hours  : 5minutes
//        8 Hours  : 20minutes
//        13 Hours  : 40minutes
//        33 Hours  : 20minutes ;

//----------------------------------------------------------

//  52.  Write a JavaScript program to convert the letters of a given string in alphabetical order.

// let strr = 'ankitsingh'
// function order(str){
//     let str1;
//     str1 = str.split('').sort().join('');
//     return str1

// }console.log(order(strr));

//output: aghiiknnst

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// let names = ['Ankit Singh','Naseem Sidhiqui','Asif Ali','Prateek Singh'];
// function lastNames(arr){

//    let arrNew = [];

//    for(let i=0; i<arr.length; i++){
//     //    let lastName;
//     //  lastName = arr[i].split(' ');
//      arrNew.push(arr[i].split(' ')[arr[i].split(' ').length-1])

//     }return arrNew;
// }console.log(lastNames(['Ankit Singh','Naseem Sidhiqui','Asif Ali','Prateek Singh']));

//output: [ 'Singh', 'Sidhiqui', 'Ali', 'Singh' ]

//-------------------------------------------------------------

// function firstLetter(str) {
//   let arr = str.split(" ");
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//       let str1 = arr[i].split("");

//       let str2 = "";

//     for (let j = 0; j < str1.length; j++) {
//       if (str1[j] === str1[j].toUpperCase()) {
//         str2 = str2 + str1[j].toLowerCase();
//       } else {
//         str2 = str2 + str1[j].toUpperCase();
//       }
//     }
//     result.push(str2);
//                                                      // str2='';
//   }
//   return result.join(" ");
// }
// console.log(firstLetter("weLCoMee tO tHIs javaScRipt gUIde"));

//-------------------------------------------------------------

// let arrr = [2, -3, 15, 8, 9];

// function pair(arr) {
//   let finalResult = [];
//   for (let i = 0; i < arr.length; i++) {

//     // let arr1;
//     for (let j = 0; j < arr.length; j++) {
//         let result = [];
//       if (arr[i] + arr[j] >= 10) {
//         //    arr1 = arr[i](arr[j]);
//         result.push(arr[i]);
//         result.push(arr[j]);
//         finalResult.push(result);
//       }
//     }

//   }
//   return finalResult;
// }
// console.log(pair(arrr));

//--------------------------------------------------------------

// let strr= 'this is a laptop'
// function vowels(str){
//       let count = 0;
//      for(let i=0; i<str.length; i++){
//          if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u'){
//                      count = count + 1;
//          }
//      }
// return count;
// }
// console.log(vowels(strr));

//-----------------------------------------------------------

// let strr = "this is a ugly laptop but very good to use";
// function vowels(str) {
//   let vow = "aeiou";
//   let str3 = [];
//   for (let i = 0; i < vow.length; i++) {
//     let strNew = [];
//     let count = 0;
//     let str1;
//     for (let j = 0; j < str.length; j++) {
//       if (vow[i] === str[j]) {
//         str1 = str[j];
//         count++;
//       }
//     }
//     strNew.push(str1 , count);
//     str3.push(strNew);
//   }
//   return str3;
// }
// console.log(vowels(strr));

//-------------------------------------------------------------

// let strr = "madam this is level of water";
// function palindrome(str) {
//   let arr1 = str.split(" ");
//   // let count=0;
//   let result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] === arr1[i].split("").reverse().join("")) {
//       let arr2 = arr1[i];
//       result.push(arr2);
//     }
//   }
//   return result;
// }
// console.log(palindrome(strr));

//---------------------------------------------------------------------------------------------------------------------------------

//  54.  Write a JavaScript program to count the number of vowels in a given string.

// let strr = "this is a home where we live";
// function vowels(str) {
//   let vowel = "aeiou";
//   let count = 0;
//   for (let i = 0; i < vowel.length; i++) {
//     for (let j = 0; j < str.length; j++) {
//       if (vowel[i] === str[j]) {
//         count += 1;
//       }
//     }
// }
// return count;
// }
// console.log(vowels(strr));

//output: 10;

//--------------------------------------------------------------

// 55. Write a JavaScript program to check whether a given string contains equal number of p's and t's.

// let strr = "pinokpaprtrtot";
// function checkAlpha(str) {
//   let alpha = "pt";
//   let countP = 0;
//   let countT = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === alpha[0]) {
//       countP += 1;
//     }
//     if (str[i] === alpha[1]) {
//       countT += 1;
//     }
//   }
//   if (countP === countT) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkAlpha(strr));



// let arrr = [3,6,2,8,7,9];
//            [2,6,3,8,7,9]
//           [6,2,3,8,7,9]
//           [6,3,2,8,7,9]
//           [8,3,2,6,7,9]
//           [8,6,2,3,7,9]
//           [8,6,3,2,7,9]
//           [8,7,3,2,6,9]
//           [8,7,6,2,3,9]
//           [8,7,6,3,2,9]
//          // ------
//           [9,8,7,6,3,2]


// let arrr = [3,6,2,8,7,9];
// function sortingNum(arr){

//     let arr1 = 0;
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length; j++){
//             console.log(arr[i],arr[j]);
//             if(arr[i]>arr[j]){
//                     arr1 = arr[i];
//                     arr[i] = arr[j];
//                     arr[j] = arr1; 
                  
//             }
//         }
//       }
//       return arr;
// }
// console.log(sortingNum(arrr));


// let strr = 'abc'
// function repeatStr(str){
//     let str1 = str.split('');
//     let str2 = str1;
//     let len = str2.length;
//     for(let i=0; i<len; i++){
//         str1[str1.length] = str2[i];
    
//         // if(str1.length===str2){
//             break;
//         // }
//     }
//     return str;
// }
// console.log(repeatStr(strr));



// let arrr1 = [1,4,7,3];
// let arrr2 = [4,6,1,12];
// var unique = [];
// for(var i = 0; i < arrr1.length; i++){
    //     var found = false;
    
    //     for(var j = 0; j < arrr2.length; j++){ // j < is missed;
    //      if(arrr1[i] === arrr2[j]){
        //       found = true;
        //       break; 
        //     }
        //    }
        //    if(found === false){
            //    unique.push(arrr1[i]);
            //   }
            // }
            // console.log(unique)



            strr = 'Welcome to this Javascript Guide!';

function reverseStr(str){
    let arr = str.split(' ');
    // console.log(arr)
    let arr1;
    for(let i=0; i<arr.length; i++){
         arr1 = arr[i].split('');
         console.log(arr1)

        // for(let j=arr1.length-1; j>0; j--){
            // console.log(arr[j])
        // }
    }
}
reverseStr(strr)