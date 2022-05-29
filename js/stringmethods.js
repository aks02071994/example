//  3.  includes()    //

//  let str = 'javascript is a great language.';
// let str1 = str.includes('is a great');
// console.log(str1);

// output:  true       // { it gives true or false}

//  4.  startsWith()   //

//   let str = 'javascript is a great language.';
//   let str1 = str.startsWith('javasc');
//   console.log(str1);

//output:  true

//  5.  endsWith()   //

//   let str = 'javascript is a great language.';
//   let str1 = str.endsWith('.');
//   console.log(str1);

//output:  true

//  6.  Search()   //

//   let str = 'javascript is a great language.';
//   let str1 = str.search('a');
//   console.log(str1);

//output:  1    {it gives the first comes letter or words index in the string}

//  7.   Match     //

//  let str = 'javascript is a is great language.';
//  let str1 = str.match(/is/g);
//  console.log(str1);

//-------------------------------------------------------------

//Extracting String Parts : 3 methods for extracting

// 1. slice(start,end)
// 2. substring(start,end)
// 3. substr(start,length)

//  1.  Slice Method  : 

// ## slice() method is used to extract the part of string and return the extracted part in a new string.

//   ##   slice(start,end)

// ##  first parameter is a start position from which we want to extract the string

// ##  second parameter is a end position and is the position at which we end the new string length but the position we take in end parameter is not included in the new string.

// let strr = "Apple, Banana, Kiwi";
// function sliceMethod(str){
//     let str1;
//     str1 = str.slice(0,5);
//  return str1;

// }
//  console.log(sliceMethod(strr));

//output: Apple;

//  ##  when parameter is negative then we take position from the end and we take index from 1 (not from 0)

// let strr = "Apple, Banana, Kiwi";
// function sliceMethod(str){
//     let str1;
//     str1 = str.slice(-12,-6);
//     return str1;
// }
// console.log(sliceMethod(strr));

//output: Banana

// ##  slice method does not change the original string.

// ## if we omit the second value(end value) then it will slice out the rest of the string.

//  let str = "Apple, Banana, Kiwi";
//  let part = str.slice(7);
// console.log(part);

//output: Banana, Kiwi
//--------------------------------------------------------------

// 2.  substring method : 

// ##  substring is similar to slice() method.

// ##  the difference between them is the negative valves count from back in slice() but in substring we can not take the negative values. When we put negative value in substring then it does not works.

// let str = "Apple, Banana, Kiwi";
// let str1 = str.substring(7,13);
// console.log(str1);

//  output: Banana

//--------------------------------------------------------------

// 3.  substr method :

// ##  substr() is also similar to the slice () mthod.

//  ##  substr(start,length)  the main difference between slice() and substr() is the second parameter because the second parameter in substr() is the length. length specify the length of the substr of string.

// let str = "Apple, Banana, Kiwi";
// let str1 = str.substr(7,6);
// console.log(str1);

//output: Banana

//  ##  if parameter is negative then it takes position from the end of the string.

// let str = "Apple, Banana, Kiwi";
// let part = str.substr(-4);
// console.log(part);

//output: Kiwi

//--------------------------------------------------------------

//  4.  replace method :  

// ##  it is used to replace a specified value with another value in a string .

//   Syntax   :    string.replace(searchValue,newValue);

// let str = "Apple, Banana, Kiwi";
// let str1 = str.replace('Kiwi','Mango');
// console.log(str1);

//output: Apple, Banana, Mango

// ##  replace method does not change the string

// console.log(str);

//output: Apple, Banana, Kiwi

//  ##  replace method replaces only the first match.

// let str = "Apple, Banana, Kiwi, Banana";
// let str1 = str.replace("Banana", "Mango");
// console.log(str1);

// output: Apple, Mango, Kiwi, Banana

// ##  if replace all the matches then we use regular expression(likw /g flag set).

// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace(/Microsoft/g, "W3Schools");
// console.log(newText);

//output: Please visit W3Schools and W3Schools!

//---------------------------------------------------------------

//  5.  toLowerCase()   //

//   let str = 'JavaScript Is A GREAT langUAGE.';
//     var str1 = str.toLowerCase();
//     console.log(str1);

// output:  javascript is a great language.   //  {it is use to convert all the string into lower letters}

//--------------------------------------------------------------

//  6 .  toUpperCase()   //

//   let str = 'javascript is a great language.';
//   let str1 = str.toUpperCase();
//   console.log(str1);

// output:  JAVASCRIPT IS A GREAT LANGUAGE.

//---------------------------------------------------------------

//  7.   concat() method

// ## concat() method is used to add the two strings.

// ##  Syntax : string1.concat(string2,string3,....,stringX);

// let str1 = 'Hello';
// let str2 = 'World';
// let str3 = str1.concat(' ', str2);
// console.log(str3);

//output: Hello World

//  ##  plus operater (+) is similar to the concat() method .both are similar and both concat the string.

// let str1 = 'Hello';
//     let str2 = 'World';
//     let str3 = str1 + ' ' + str2;
// console.log(str3);

//output: Hello World

// ##  Note :  All string methods return a new string. they dont't modify the original string. or we can say that strings are immutable means strings cannot be changed, only replaced.

//--------------------------------------------------------------

//  8. trim() method :

// ##  trim method is used to remove the white space from both sides of the string.

// let str1 = "      Hello World!      ";
// let str2 = str1.trim(); 
// console.log(str1);
// console.log(str2);

//output:       Hello World!      
//        Hello World!

//--------------------------------------------------------------

//  9.   
