//  Filtering greeting messages  //

//   1.   how you could test whether the message in each case is a Christmas message.


// const greetings = ['Happy Birthday!',
//                  'Merry Christmas my love',
//                  'A happy Christmas to all the family',
//                  'You\'re all I want for Christmas',
//                  'Get well soon'];

//     function myFunction(greetings){

//         for (let greeting of greetings){
//             if(greeting.includes('Christmas')){
//                 console.log(greeting);
//             }
//         }
//     }  myFunction(greetings); 

 

    //    Fixing capitalization   //

//   2.   we have the names of cities in the United Kingdom, but the capitalization is all messed up. We want you to change them so that they are all lower case, except for a capital first letter.



//   const cities = ['LonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

// function myFunction(cities){
//     for (let city of cities){
//           const lower = city.toLowerCase();
//           const firstLetter = lower.slice(0,1);
//           const capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
//           const result = capitalized;
//           console.log(result);
//         }
         
//     }
//     myFunction(cities);



// II.    
//    const names = ['AnKiT','NAssEM','PRateeK','aSIf','AmiT'];
 
//  function myFunction(names){
//      for(let name of names){
//          const lower = name.toLowerCase();
//          const lastLetter = lower.slice(0,-1);
//          const smallalized = lower.replace(lastLetter,lastLetter.toUpperCase());
//          const finalChange = smallalized;
//          console.log(finalChange);
//      }
//  }
//  myFunction(names);



// the array contains a bunch of strings containing information about train stations in the North of England. The strings are data items that contain the three-letter station code, followed by some machine-readable data, followed by a semicolon, followed by the human-readable station name.



// const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
//                   'GNF576746573fhdg4737dh4;Greenfield',
//                   'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
//                   'SYB4f65hf75f736463;Stalybridge',
//                   'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];
                // MAN : Manchester Piccadilly

                

// function myFunction(stations){
//     for(let station of stations){
//             const code = station.slice(0,3);
//             const semicolam = station.indexOf(';');
//             const name = station.slice(semicolam +1);
//             const result = `${code} : ${name}`;
//             console.log(result);
//     }
// }
// myFunction(stations)



const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
const index = cities.indexOf('Liverpool');
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities);     // [ "Manchester", "Edinburgh", "Carlisle" ]































