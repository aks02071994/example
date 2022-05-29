
// let  names= {
//     name : 'Ankit singh',
//     age : 27,
//     mobile : 8320759514,
//     city : 'Deoria',
//     state : 'u.p.'
// } 
// for(let key in names){
//     console.log(names[key]);
// }



let arr = [{ name : 'Ankit singh',
    age : 28,
    mobile : 8320759514,
    city : 'Deoria',
    pin : 274001},
    { name : 'Naseem Parvej',
    age : 30,
    mobile : 8320759514,
    city : 'Deoria',
    pin : 274002},
    { name : 'Asif Ali',
    age : 40,
    mobile : 8320759514,
    city : 'Deoria',
    pin : 274003},
    { name : 'Deepak Shukhala',
    age : 40,
    mobile : 8320759514,
    city : 'Deoria',
    pin : 274004},
    { name : 'Amit singh',
    age : 28,
    mobile : 8320759514,
    city : 'Deoria',
    pin : 274005}  
]


let sum;
let name1;
let name2;
let names= [];
for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i].age===arr[j].age){
            sum = arr[i].pin + arr[j].pin;
            name1 = arr[i].name + ' - ' + arr[j].name ; 
            names.push(sum + ' - ' + name1)
        }
        
    }
}console.log(names);




// for(let i=0; i<arr.length; i++){
//     if(arr[i].age >30 && arr[i].age<40){
//         console.log(arr[i].mobile,arr[i].age)
//     }
// }

