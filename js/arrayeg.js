// let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
// let removed = myFish.splice(2,0,'drum');
// console.log(myFish)



// let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
// // let removed = myFish.splice(2,0,'drum','guitar');
// // console.log(myFish);

                        //  OR


// function myFunction(myFish){
//  let removed = myFish.splice(2,0,'drum','guitar');
//  return myFish;
// }
// console.log(myFunction(myFish));



// let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
// function myFunction(myFish){
//     let removed = myFish.splice(3,2);
//     return myFish;
// }
// console.log(myFunction(myFish));



// let myFish = ['angel', 'clown', 'drum', 'sturgeon'];
// function myFunction(myFish){
//     let removed = myFish.splice(2,1,'trumpet');
//     return myFish;
// }
// console.log(myFunction(myFish));



// let myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
// function myFunction(myFish){
//     let removed = myFish.splice(0,2,'parrot','anemone','blue');
//     return myFish;
// }
// console.log(myFunction(myFish));



// let myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
// function myFunction(myFish){
//     let removed = myFish.splice(2,2);
//     return myFish;
// }
// console.log(myFunction(myFish));



// let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
// function myFunction(myFish){
//     let removed = myFish.splice(-2,2);
//     return myFish;
// }
// console.log(myFunction(myFish));



// const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
// function myFunction(cities){
//      let removed = cities.splice(1,1);
//      return cities;
// }
// console.log(myFunction(cities));


    
    // function double(number) {
    //     return number * 2;
    //   }
    //   const numbers = [5, 2, 7, 6];
    //   const doubled = numbers.map(double);
    //   console.log(doubled);  // [ 10, 4, 14, 12 ]

   
   
    // function isLong(city) {
    //     return city.length > 8;
    //   }
    //   const cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
    //   const longer = cities.filter(isLong);
    //   console.log(longer);
  


//   const cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];

//   function space(city){
//       return city.length > 8;
//   }
//   const longer = cities.filter(space);
//   console.log(longer);



// const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
//        const cities = data.split(',');
//        console.log(cities);
    //    console.log(cities.length);
    //    console.log(data.length);
    //    console.log(cities[0]);
    //    console.log(cities[2]);
    // console.log(cities[cities.length-1]);



    // const cities =['Manchester','London','Liverpool','Birmingham','Leeds','Carlisle']
    //   const data = cities.join(',');
    //   console.log(data);
    // console.log(data.length);


    
    // const products = [
    //     'Underpants:6.99',
    //     'Socks:5.99',
    //     'T-shirt:14.99',
    //     'Trousers:31.99',
    //     'Shoes:23.99',
    //   ];
    
    
    //   for( const product of products){
    //      const subArray = product.split(':');
    //      const name = subArray[0];
    //      const price = Number(subArray[1]);
    //      const total = `${name} - $${price}`;
    //      console.log(total);
    //  }
      


// const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
//                   'GNF576746573fhdg4737dh4;Greenfield',
//                   'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//                   'SYB4f65hf75f736463;Stalybridge',
//                   'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];
//                 // MAN : Manchester Piccadilly




// for(const station of stations){
//     const code = station.slice(0,3);
//     const semicolom = station.split(';');
//     const name = semicolom[1];
//     const result = `${code} : ${name}`;
//     console.log(result); 
// }



// const products = [
//     'Underpants:6.99',
//     'Socks:5.99',
//     'T-shirt:14.99',
//     'Trousers:31.99',
//     'Shoes:23.99',
//   ];

//   function bill(products){
//       let result = [];
//       for(const product of products){
//           const subArray = product.split(':');
//           const name = subArray[0];
//           const price = subArray[1];
//           const total = `${name} - $${price}`;
//            result = result.push(total)        
//       }                                       
//     return result;
//   }
// console.log(bill(products));
  

                          //  OR  //


// function bill(products){

//           for(const product of products){
//               const subArray = product.split(':');
//               const name = subArray[0];
//               const price = subArray[1];
//               const total = `${name} - $${price}`;
//                 console.log(total);
//           }
//       }
//     bill(products);



// let cheese = 'no';
// if (cheese) {
//   console.log('Yay! Cheese available for making cheese on toast.');
// } else {
//   console.log('No cheese on toast for you today.');
// }



// let shoppingDone = true;
// let childsAllowance;

// if (shoppingDone) { // don't need to explicitly specify '===true'
//     console.log('yay! i done it');
//   childsAllowance = 10;
// } else {
//     console.log('no');
//   childsAllowance = 5;
// }
// console.log(childsAllowance); 



  