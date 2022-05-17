// console.log(40);


// let str = Number("1234");
// str = Number("123a4");
// str = Number(true);
// str = Number([1,2,3,4,5,6,7,8,9]);
// console.log(str, typeof str);
    


     //       Console, Log, Errors, Assert, Clear, Time       //




// console.time('My Code Took');
// console.log('Hello World');
// console.log(10+20);
// console.log(20*100);
// console.log('This is a String');
// console.log(100%3);
// console.log(true);
// console.log(false);
// console.log([1,2,3,4,5,6,7]);
// console.log({Name: 'Ankit' ,Marks: 88});
// console.table({Name: 'Ankit' ,Marks: 88});
// console.table({ Name: 'Ankit', Age: 28, Subject: 'Math', Marks: 90  });
// console.warn('This is a warning');
// // console.clear();
// console.timeEnd('My Code Took');
// console.error('This is a Error');
// console.assert(120<100, 'Mark>100 is not possible' );

  

                          //   var,  const,  let   //



// var name= 'Ankit';
// name = 'Naseem';
// name = 'Prateek'
// var subject;
// subject = 'Math';
// marks = 90;
// console.log(name, subject, marks);



// const myName = 'Ankit';
// myName = 'Naseem';               // not possible//
//  console.log(myName);            //const value will not change//


// const name;
// name = 'Ankit';         // we can not write   const name;//
// console.log(name);      // we always use const   const name= 'Ankit'; //
 


               //    Primitive And Reference Data type    //


   
      //  1. String  //

// let name= 'Ankit';
//  subject = 'Math.';
//  mark = 90;
// console.log('My Name is ' + name + ' And My Subject is ' + subject  +  ' My Mark is ' + mark + ' in this subject.');
 
// // let myName ;
//   myName = 'Naseem';
//   console.log('My friends name is ' + myName,  ( typeof myName));
//   console.log('My Primitive Data type is ' +  (typeof myName ) + ' Data type.');


      //  2. Numbers   //

      // let marks= 80;
      // console.log(typeof marks);



//  let marks = 98;
//  console.log('Data type is ' + (typeof marks));

//  let num = '33';
//  console.log('Data type is ' + (typeof num));



                  //    Reference Data type    //


//  Array  (Object Data Type)  //


// let arr = [12,23,34,53,24,'26',75,'string',30];
// console.log(arr, typeof arr);



//   Object    //



// let marks = {
//         Ankit: 90,
//         Naseem: 86,
//         Prateek: 99
//       }
//       console.log(marks);
//       console.table(marks);

  //   Date type   //


  // let date = new Date();
// console.log(date);



//    function type    //

 

// function nam() {
// }
// console.log(typeof nam);



             //       String  properties methods and template      //



//   const name = 'Ankit';
//   const greeting ='Good Morning';
//   console.log(greeting +' '+ name)
//   console.log(greeting, name)



// let str1 = 'My name is Ankit Singh ';
// let str2 = 'I am a frontanate Developer';

// let str = str1.concat(str2);
// console.log(str);
// // console.log(str.length);
// // console.log(str1.toLowerCase());
// // console.log(str2.toUpperCase());
// // console.log(str.toLowerCase());

// console.log(str.indexOf('I'));
// console.log(str.lastIndexOf('r'));
// console.log(str.charAt(49));
// console.log(str.endsWith('oper'));
// console.log(str.includes('Dev'));
// console.log(str.substring(11,49))



// let str1 = 'This is not a Playground';
//     str2 = ' its a Home.';

// // let str = str1 + ' '+ str2 ;
// let str = str1.concat(str2);
// console.log(str);

// console.log(str.indexOf('not'));
// console.log(str.lastIndexOf('e'));
// console.log(str.charAt(34));
// console.log(str.substring(1,34));
// console.log(str.slice(-5));
// console.log(str.slice(0,24));
// console.log(str.split(' ')); 
// console.log(str.split('i'));

// console.log(str.replace('This', 'It'));
 
// let fruit1 = 'Apple';
// let fruit2 = 'Orange';
// let myHtml = `Hello ${name} 
//             <h1>This is a class of Template</h1>
//             <p>I like ${fruit1} than ${fruit2}`;

//             document.body.innerHTML = myHtml;



// let name = 'Ankit';
// let age = 28;
// let locatio = 'Deoria';
// let address = `My name is ${name}
//                My age is ${age} and
//                I belongs to ${locatio}.`;

//      document.body.innerHTML = address;              

 

                       //         Function         //



//     function myFunction(name, thank){
//           console.log(`Happy Birthday ${name}
//            How I wish I ciuld fly to you right now and be with you
//            on this special day of yours. But remember,my good wishes
//            are always there with you. ${thank} `);

//            return 'Reply Me';
//     } 
//     let name = 'Ankit Singh';
//     let thank = 'Thanky very much' 
    
//       let val = myFunction(name, thank);                  

//     console.log(val);



// function news(subject, marks){

//       console.log(`This is inform that your marks ${marks} in your favoute subject ${subject}. `);
     
//       return 'You Pass with a High numbers'
// }
// let subject = 'Math';
// let marks = 90;
// console.log(news(subject, marks));


//  let num = 15
//       for(let i=0; i<=num; i++){
            
//             if(i%2===0){
//                   console.log(i + ' is even')
//             }
//             else{
//                   console.log(i + ' is odd')
//             }
//       }
      
// let num = 15;
// function myFunction(num) {
//     for (i = 0; i<=num; i++){
//           if(i%2===0){
//                 console.log(i + 'is even');
//           }
//           else{
//                 console.log(i + 'is odd')
//           }
      
//     }      
// }
// myFunction(20);
    

      
      
      // let num =10
      // function myFunction(num){
            //       for (let i=1; i<=10; i++){
                  //             console.log(i);
                  //       }
                  // }
                  // myFunction(num)
                  
                  
                  
                  // let arr= [[1,2],
                  //            [3,4],
                  //            [5,6]];
                  // function printArray(arr){
//       for (let i=0; i<arr.length;i++){
//             for (let j=0; j<arr[0].length;j++){
//                   console.log(arr[i][j]);
//             }
//       }
// }
// printArray(arr) // output: 1,2,3,4,5,6


//  let arr= [[1,2],
//            [3,4],
//            [5,6]];
// newArr = arr.flat();
// console.log(newArr);



// let arr = [8 , 9 , 15 , 16 ,27 ,21 , 26];
// function myFunction(arr){
//       for (let i = 0; i<=arr.length; i++){
//             if(arr[i]%2===0){
//                   console.log(arr[i] + 'is even');
//             }
//             else if(arr[i]%3===0){
//                    console.log(arr[i] + 'is odd');
//             }
            
//       }
// }
// myFunction([8 , 9 , 15 , 16 ,27 ,21 , 26, 12]);



// let arr = [];
// function myFunction(arr){

//       for (let i =0; i<=arr.length;i++){
//             if (arr[i]%2===0){
//                   console.log(arr[i] + ' is even number');
//             }
//             else if (arr[i]%3===0){
//                   console.log(arr[i] + ' is odd number')
//             }
           
//       }
// }
// myFunction([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])


// let arr = [12,19,26,97,98,112,115,11111110]
// function printEven(arr){
//       for (i=0;i<arr.length;i++){
//             if (arr[i]%2===0){
//                   console.log(arr[i] + ' is a even number');
//             }
            
//       }
// }
// printEven(arr)



// let arr1 = [1,2,3,4,5,];
// let arr2 = [6,7,8,9,10];
// let arr = arr1.concat(arr2);
// let val = 0;
  
// for (i=0;i<arr.length;i++){
//        val = val + arr[i];
//       }
//       console.log(val);



      // let arr1 = [1,2,3,4,5,];
      // let arr2 = [6,7,8,9,10];
      // function myFunction(arr1,arr2){
             
      //       let arr = arr1.concat(arr2);
      //       let val= 0;
      //       for(i=0;i<arr.length;i++){
      //             val = val+arr[i];
      //       }
      //       console.log(val);
      // }
      // myFunction(arr1,arr2)



      // function deleteElement(arr, ele) {
      //       for (var i=0;i<arr.length;i++){
      //         if(arr[i]==ele){
      //           arr.splice(i,1); //Delete element from array
      //         }
      //       }
      //       return arr;
      //     }
      //     var arr = [23,56,4,78,5,63,45,210,56];
      //     arr = deleteElement(arr, 56)
          
      //     console.log(arr); //[23, 4, 78, 5, 63, 45, 210] 



//       var arr = [23,56,4,78,5,63,45,210,56,23];
//     function deleteElement(arr, ele){
//            for (i=0;i<arr.length;i++){
//                  if(arr[i]===ele){
//                        arr.splice(i,1)
//                  }
            
//            }
//            return arr;
//     }
//     arr = deleteElement(arr, 23&&56)
//      console.log(deleteElement(arr, 23,56))
     

console.log(40)