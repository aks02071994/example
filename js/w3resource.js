// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7


// var a=3;
// var b=4;
// var c=5;
// var s = (a + b + c)/2;
// var area = Math.sqrt(s*((s-a)*(s-b)*(s-c)));
// console.log(area.toFixed(2));

//------------------------------------------------------------------

                       //     Revision     //






// let add=0;
// function sum(num){
//     for(let i=1; i<=num; i++){
//         add += i;
//     }
//     return add;
// }
// console.log(sum(10));



// function divisi(num){
//     for(let i=1; i<=num; i++){
//         if(num%i===0){
//             console.log(i);
//         }
//     }
// }
// divisi(21);



// function factorial(num){
//     let multi =1;
//     for (let i=1; i<=num; i++){
//         multi =multi*i;
//     }
//     console.log(multi);
// }
// factorial(4);




// function factorial(num){
//     let multi =1;
//     for (let i=1; i<=num; i++){
//         multi =multi*i;
//     }
//     return multi;
// }
// console.log(factorial(4));



//  function myFunction(num){
//         for(let i=1; i<=(num*2-1); i++){
//             if(i<=num){
//                       console.log(i);
//             }
//              else{
//                    console.log(num-(i-num)); 
//             }
//         }
//     }
//     myFunction(4);


//------------------------------------------------------------

// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
  
// const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
// console.log(shopping);

// const num1 = 10;
// const num2 = 50;
// console.log(9 * num1);
// console.log(num1 ** 3);
// console.log(num2 / num1);

// console.log(5 + 10 * 3);
// console.log(num2 % 9 * num1);
// console.log(num2 + num1 / 8 + 2);



// let x = 3; // x contains the value 3
// let y = 4; // y contains the value 4
// x *= y; // x now contains the value 12
// console.log(x);


// const string = 'The revolution will not be televised.';
// console.log(string);



// const browserType = 'mozilla';

// if (browserType.startsWith('zilla')) {
//   console.log('Found zilla!');
// } else {
//   console.log('No zilla here!');
// }

// const browserType = 'mozilla';

// if (browserType.endsWith('zilla')) {
//   console.log('Found zilla!');
// } else {
//   console.log('No zilla here!');
// }
// console.log(browserType.endsWith('zilla'));
// console.log(browserType.startsWith('zilla'));



// const browserType = 'mozilla';
// const updated = browserType.replace('moz','van');

// console.log(updated);      // "vanilla"
// console.log(browserType);  // "mozilla"


//--------------------------------------------------------------


//  6.  Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar./



// function checkLeapYear(year){
//     if((year%4===0)&&(year%100!==0)||(year%400===0)){
//         console.log(year + ' is a leap year');
//     }
//     else{
//         console.log(year + ' is not a leap year');
//     }
// }
// checkLeapYear(1100);



// 7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.



//    let startYear = 2014;
//    let endYear = 2050;
// function firstSunday(){
//     for(let currentYear=startYear;currentYear<=endYear;currentYear++){
//         let result = new Date(currentYear,0,1);
//         if(result.getDay()===0){
//             console.log(currentYear);
//         }
//     }
// }firstSunday();



// today=new Date();
// var cmas=new Date(today.getFullYear(), 11, 25);
// if (today.getMonth()==11 && today.getDate()>25) 
// {
// cmas.setFullYear(cmas.getFullYear()+1); 
// }  
// var one_day=1000*60*60*24;
// console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+
// " days left until Christmas!");



// 15. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return square the absolute difference.



// function myFunction(num){
//     if(num<=13){
//         console.log(13-num);           
//     }
//     else if(num>13){
//         console.log((num-13)**2);      
//     }
// }
// myFunction(13);



// Write a JavaScript program to get the difference between a given number and 50, if the number is less than 50 return double the absolute difference.



// function difference(num){
//     if(num>=50 ){
//         return num-50;
//     }
//     else{
//         return (50-num)*2;
//     }
// }
// console.log(difference(50));
// console.log(difference(100));
// console.log(difference(20));
// console.log(difference(45));
// console.log(difference(60));



// 16. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.



// function sum(num1,num2){
//     if(num1===num2){
//         return (num1+num2)*3;
//     }
//     else{
//         return num1+num2;
//     }
// }
// console.log(sum(10,10));
// console.log(sum(10,100));
// console.log(sum(60,50));
// console.log(sum(20,20));
// console.log(sum(80,70));



//  17.  Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.



// function difference(num){
//     if(num>19){
//         return (num-19)*3;
//     }
//     else{
//         return 19-num;
//     }
// }
// console.log(difference(19));
// console.log(difference(10));
// console.log(difference(13));
// console.log(difference(29));
// console.log(difference(25));



// 18. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.



// function sum(num1,num2){
//         if(num1===50 || num2===50 || num1+num2===50){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(sum(25,25));
// console.log(sum(50,25));
// console.log(sum(50,50));
// console.log(sum(25,24));
// console.log(sum(31,19));
// console.log(sum(20,33));



                            //   or    //

// function test50(x, y) 
// {
//   return ((x == 50 || y == 50) || (x + y == 50));
// }
// console.log(test50(50, 50));
// console.log(test50(20, 50));
// console.log(test50(20, 20));
// console.log(test50(20, 30));



// 20. Write a JavaScript program to check from two given integers, whether one is positive and another one is negative. 



// function integers(num1,num2){
//       if( num1>0 && num2<0 || num1<0 && num2>0 ){
//           return true;
//       }
//       else{
//           return false;
//       }
// }
// console.log(integers(1,-2));
// console.log(integers(1,2));
// console.log(integers(-6,6));
// console.log(integers(-10,-2));
// console.log(integers(0,2));

// let a =2;
// a = a+2;
// console.log(a);
// function reverseString(str){
//     let arr2 = str.split('');
//     let arr3 = arr2.reverse();
//     let str1 = arr3.join('');
//     return str1;
//    }


// function reverse(sentence){
//     let arr1= sentence.split(' ');
//     console.log(arr1);
//     let result =[];
//     for(let i=0; i<arr1.length; i++){
//         result.push (reverseString(arr1[i]));
    
//     }
//     console.log(result);
// }
// reverse('Welcome to this Javascript Guide!');



// function integer(num){
//     if(num%1===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }console.log(integer(100.4));



//  function duplicate(arr1){
// //      let arr2 = arr1;
// //      return arr1.concat(arr2);
// let len = arr1.length;

// for(let i=0; i<len; i++){
//     //   arr1[arr1.length]=arr1[i]; 
//     arr1.push(arr1[i]);   

// }
// return arr1;
//  }
//  console.log(duplicate([1, 2, 3, 4, 5]));



// function continuty(num){
//      for(let i=1; i<=(2*num-1); i++){
//         if(i<=num){ 
//         console.log(i);
//     }
//     else{
//         console.log(num-(i-num)); 
//     }
// }
// }
// continuty(5);



//  function myFunction(num){
//         for(let i=1; i<=(num*2-1); i++){
//             if(i<=num){
//                       console.log(i);
//             }
//              else{
//                    console.log(num-(i-num)); 
//             }
//         }
//     }
//     myFunction(4);



// function myFunction(num){
//     for(let i=1; i<=num; i++){
//         if(i%15===0){
//             console.log(i , 'fizzbuzz');
//         }
//         else if(i%3===0){
//             console.log(i, 'fizz');
//         }
//         else if(i%5===0){
//             console.log(i, 'buzz');
//         }
//         else{
//             console.log(i);
//         }
//     }
// }myFunction(100);




// function isAnagram(str1,str2){
//    let arr1 = str1.split('');
//    let arr2 = str2.split('');
   
// if(arr1.length===arr2.length){
//     for(let i=0; i<arr1.length; i++) {

//         if (arr2.includes(arr1[i])) {
//            let indexNum= arr2.indexOf(arr1[i]);
//             arr2.splice(indexNum, 1)
            
//         }
//         else{
//             return false;
//         }
//     }
//     return true;
// }
// else{
//     return false;
// }
// }
// console.log(isAnagram('wolf','flowt'));



// function reverse(str){
//     let arr = str.split(' ');
//      let result = [];
//     for (let i=0; i<arr.length; i++){

//        let arr1 = arr[i].split('').reverse().join('');
//     //   let newSentence = arr1.join(' ');
//     result.push(arr1);
       
//     }
//     console.log(result.reverse().join(' '));
// }
// reverse('Welcome to this Javascript Guide!');



// function firstLetter(str){
//     let arr = str.split(' ');
//     let result = [];
//     for(let i=0; i<arr.length; i++){
        
//      let str1 = arr[i].replace(arr[i][0],arr[i][0].toUpperCase())  
//       result.push(str1);
//     }
//     console.log(result.join(' '));
// }
// firstLetter('welcome to this javascript guide!')



// function alternateLetter(str){
//     let result = [];
//     let arr = str.slice('');
//     let arr1;
//     for(let i=0; i<arr.length; i++){
//         if(i%2===0){
//             arr1= arr[i].toUpperCase();
//         }
//         else{
//           arr1=arr[i].toLowerCase();
//         }
//         result.push(arr1);

//     }
//     console.log(result.join(''));
    
// }
// alternateLetter('elephant');



// function reverse(str){
//     let result = [];
//     let arr1= str.split('');
//     for(let i=(arr1.length)-1; i>=0; i--){
//         result.push(arr1[i])

//     }
// console.log(result.join(''));    
// }
// reverse('Elephant');



// function reverse(str){
    
//     let a='';
    
//     for(let i=str.length-1; i>=0; i--){

//            a = a.concat(str[i]);
//     } 
     
//     console.log(a) ;
    
// }
// reverse('Elephant');



// function hcf(n1,n2){
//     let len ;
//     let lcm;
//     let hcf=1;
//     if(n1>n2){
//         len = n2;
//     }
//     else{
//         len = n1;
//     }
//         for(let i=len; i>=2; i--){
//             if(n1%i===0 && n2%i===0){
                 
//                  hcf=i;
//                  break;
//             }
//             }
//         lcm = (n1*n2)/hcf;
//         console.log('lcm - ',lcm);
//         console.log('hcf - ',hcf);
       
//         }
    // hcf(35,10);


    
//     arr = [24,46,94,21,56,100,80];
//     function sec_max(arr){
//     let max = 0;
//     let secmax = 0;
//         for(let i=0; i<arr.length; i++){
//         if(max<arr[i]){
//               secmax = max;
//                    max = arr[i];          
//         }
//         else if(arr[i]>secmax){
//             secmax=arr[i];
//         }
//     }
//     return max,secmax;
// }
// console.log(sec_max(arr));


let letters = ['b','a','z','f','b','f','z','z'];
function duplicates(arr){
    
    for(let i=0; i<arr.length; i++){
        let count = 1;
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]===arr[j]){
                 count++;
            }

        }
        console.log(arr[i], count);
    }
}
duplicates(letters);