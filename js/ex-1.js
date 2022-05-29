// let arr1=[1,25,3,4,9,76,5,53,26];
// let arr2=[26,53,1,4,3,5];
// for (let i = 0; i < arr1.length; i++) {
// if (arr2.includes(arr1[i])) {
//    arr1.splice(i,1);
//    i--;
// }
   
// } console.log(arr1);

//------------------------------------------------------
// let arr1=[1,25,3,4,9,76,5,53];
// let arr2=[53,1,4,3];
// for (let i = 0; i < arr1.length; i++) {
// for (let j = 0; j < arr2.length; j++) {
// if (arr1[i]===arr2[j]) {
//     arr1.splice(i,1)
// }
    
// // }
// // } console.log(arr1);




// //----------------------------------------------
// function prime(num) {
//     for (let i = 2; i < num/2; i++) {
//         if (num%i==0 && num!=i) {
//             return false;
//         }
        
//     }
//     return true;
// }
// function primeNum(a,b) {
    
//     let arr=[]
//     for (let i = a; i <=b; i++) {
        
//       if (prime(i)==true) {
//           arr.push(i)
//       }
         
      
//     }
//      return arr;
    
// }

// console.log(primeNum(10,29));
// ///[ 11, 13, 17, 19, 23, 29 ]

//----------------------------------------

// let str="abcd";
// let str2='';
// let arr;
// arr=str.split('')

// for (let  i= 0;  i< arr.length; i++) {
//     if (arr[i]==='a') {
//         arr[i]='b';
    
//     }
//     else if (arr[i]==='b') {
//         arr[i]="a";
        
//     }
//     str2=str2+arr[i]
// }
// console.log(str2);
//-----------------------------------------------


// function avrg(arr) {
//     let total=0;
//     let average;
//     let newVal=[];
// for (let i = 0; i < arr.length; i++) {
//     total=total+arr[i];
//    average=total/arr.length;
//    newVal.push(arr[i]/average);
// }

// return newVal ;

// }
// console.log(avrg([2,3,4,5,6]));

///-------------------------------------------------

// function result(x,y) {
//    for (let i = x; i <=y; i++) {
//        let value='';
//     if (i%2===0) {
//         value+="a";
//     }   else{
//         value+="b";
//     }
    
//     if (i%3===0) {
//         value+="c";
//     }
//     if (i%5===0) {
//         value+="d";
//     }   
//     console.log(i, value);

//    }

// }result(15,30)


// let array = [10,24,12,76,54,34,90,65];
// function secmax(arr){
//     let arrMax = [];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>arrMax){
//             secMax = arrMax;

//         }
//     }return arrMax;
// }
// console.log(secmax(array));