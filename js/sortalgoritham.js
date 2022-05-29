let arrr = [3,6,2,8,7,9];
function sortingNum(arr){

    let arr1 = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            // console.log(arr[i],arr[j]);
            if(arr[j]>arr[i]){
                    arr1 = arr[i];
                    arr[i] = arr[j];
                    arr[j] = arr1; 
                  
            }
        }
      }
      return arr;
}
console.log(sortingNum(arrr));

 