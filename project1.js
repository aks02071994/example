// firstcontainer.innerHTML= "This is a new line";


// document.getElementsByTagName('h1')[0].innerHTML= "This is a Good Things";
// document.getElementsByTagName('h1')[0].style.color= "blue";
// document.getElementsByClassName('container')[0].style.color= "red";
// document.getElementsByClassName('container')[1].style.color= "green";
// console.log("Hello World")



// let number= 10;
// function good_as(num) {

//     for(let i=1; i<=num; i++ )
//     if (i %2 === 0) {
//         console.log(i + "="+"even")
//     }
//     else if() {
//         console.log(i + "="+"odd")

//      }

//     }

//      good_as(number)



//  function myFunction(a, b)
// {

//  console.log(a+b)
// }
// myFunction(100,200)

// function input(a,b) {

//     if (a===b) {
//         console.log(true);    

//     }
//     else{
//         console.log(false);

//     }
//  }
// input(5, "5")



// let a= 10;
// console.log(typeof a)



// function output(a){
//     console.log(typeof a)
// }
// output(true)



// let a= "abcd";
// console.log(a[1])



// function myfunction(a, n) {
//     console.log(a[n])

// }
// myfunction("abcd", 1)



// const a =10, b = 5, c = "Hello World";
// console.log(a == 10);
// console.log(b == 5);
// console.log(c == 'Hello world');

// output: true true false
// == / comparison operater
// =  / assignment operater



// const a = 10, b = 'hello world'
// console.log(a != 10);  //false
// console.log(a != 230);  //true
// console.log(b != 'hello world');  //false
// console.log(b != 10);   //true



// let n = 5
// for (let i=0; i<n; i++){
//     console.log("Hello World");
// }

// output: 5 times 'Hello World'



// let num= 5
// for (let i=1; i<=num; i++){
//     console.log(i)
// }

//output: 1 2 3 4 5



// let sum=0
// const  n=10
// for (let i=1; i<=n; i++){
//     sum += i;

// }
// console.log(sum)

// output: 55



// let sum= 0
//    num= 10
//    for(let i = 2; i<=100; i=i+2){
//        sum += i;
//    }
//    console.log(sum)

// output: 30



// let sum= 0
//    num= 10

//    for(let i = 1; i<=num; i=i+2){
//        sum += i  ;   //sum = sum + i
//    }
//    console.log(sum)

//    output: 25



// for(let i = 1; i<=10; i++){

//     if (i%2===0) {
//         console.log(i, "Ankit")
//     }
//     else{
//         console.log(i, "Pratik")

//     }
// 

// for (let i = 1; i <=20; i++) {
//     if (i%6===0) {

//     console.log(i,"Pratik"+"Ankit");
//     }

//     else if (i%2===0) {
//         console.log(i, "Ankit")
//     }
//     else if(i%3===0){
//         console.log(i, "Pratik")

//     }

// }



// let text = "abcdefghijklmnopqrstuvwxyz";
// console.log(text.length);



// var num_1 = 10, num_2 = 20, num_3 = 30, num_4 = 40, num_5 = 50;

// var sum = num_1 + num_2 + num_3 + num_4 + num_5; 

// console.log(sum);

// output: 150;



// let x= 0;
//     y=10
// for(i=1; i<=y; i++){
//   console.log(i)  
//     x +=i;
     
// }
// console.log(x); 

//output: 1,2,3,4,5,6,7,8,9,10;   55;



// function printEven(arr) {
//     for (var i=0;i<arr.length;i++){
//       if(arr[i]%2==0){
//         console.log(arr[i]); //print even number
//       }  
//     }
//   }
//   var arr = [13,23,12,45,22,48,66,100]
  
//   printEven(arr) //12 22 48 66 100




                        //  OR



 /* var arr = [12,20,13,17,28,29,100];  
  
  for(i=0;i<arr.length;i++){

    if(arr[i]%2==0){
        console.log(arr[i]);
    }

  }    */

       

// if (new Date().getHours() > 18) {
//   document.getElementById("demo").innerHTML = "Good Day";
// }



// let a = 358;
// let val = ( a % 2 == 0) ? 'Even Number' : 'Odd Number';
// console.log(val)



              //            Array              //



    //   var arr = ["Ankit","Naseem","Asif","Prateek"];
    //   for (i=0; i<arr.length; i++){
    //       console.log(arr[i]);
    //   }



            //               Array  Method               //



           //    1.    array concat() method    //


    // var arr1 = ["Ankit","is","a","new"];
    // var arr2 = ["program","developer"];
    // var result = arr1.concat(arr2);
    // console.log(result);



    // var arr1 = ["Naseem","completed","his"];
    // var arr2 = ["JavaScript"];
    // var arr3 = ["language","completely",];
    // var result = arr1.concat(arr2,arr3);
    // console.log(result);



           //        2. array copyWithin() method         //


      //  Array.copyWithin(target,start,end)

    //   var arr=["AngularJS","Node.js","JQuery","Bootstrap"] 

    //   var result= arr.copyWithin(1,2,3);
    //   console.log(result);

    //   output: 'AngularJS', 'JQuery', 'JQuery', 'Bootstrap'



    
    //   var arr=["AngularJS","Node.js","JQuery","Bootstrap","JavaScript"] 

    //   var result= arr.copyWithin(0,1,4);
    //   console.log(result);

    //   output:[ 'Node.js', 'JQuery', 'Bootstrap', 'Bootstrap', 'JavaScript' ]



    // var arr=["AngularJS","Node.js","JQuery","Bootstrap","Js","CSS"];    
    // var result= arr.copyWithin(1,2,4);

    // console.log(result);
    
    // output: [ 'AngularJS', 'JQuery', 'Bootstrap', 'Bootstrap', 'Js', 'CSS' ]



            //      3.  array flat() method       //   


        //     var arr = [[1, 2],
        //     [3, 4],
        //     [5, 6]];                     
                                        
        //   var newArr= arr.flat()
        //    console.log(newArr);
       
    //   output:   [ 1, 2, 3, 4, 5, 6 ]    



    // var arr= ['a','b',['c','d']];

    // var newArr= arr.flat();
    // console.log(newArr);

    // output: [ 'a', 'b', 'c', 'd' ]



    // var arr=[90,18,[89,56],[13,20,[67,17]]];

    // var newArr = arr.flat(2);
    // console.log(newArr);

    // output: [ 90, 18, 89, 56, 13, 20, 67, 17 ]   //Something Wrong//



    // var arr=[90,18,[13,20,[67,17,[56,45]]]];

    // var newArr = arr.flat(3);     //  3 array ka depth hai //
    // console.log(newArr);

    // output: [ 90, 18, 13, 20, 67, 17, 56, 45 ]



    // var arr=['Orange','Pineapple','Grapes',['Potato','Tomato','Carrot',['Guava','Litchi']]];

    // var newArr = arr.flat(2);
    // console.log(newArr);

    // output:  ['Orange', 'Pineapple','Grapes', 'Potato','Tomato', 'Carrot','Guava',  'Litchi']


