let numbb = [13, 15, 20, 88, 17, 70, 21, 12, 23, 24, 1,11,9];

function numbers(arr) {
  let finalReturn = [];
  let evenNum = [];
  let oddNum = [];
  let primeNum = [];
  

  for (let i = 0; i < arr.length; i++) {
      let arr1;
      let arr2;
      if (arr[i] % 2 === 0) {
          arr1 = arr[i] + " " + "even number";
          evenNum.push(arr1);
        }
        else{
            arr2 = arr[i];
            let arr3;
            let arr4;
      for (let j = 3; j < arr2; j++) {
        if (arr2 % j === 0) {
          arr3 = arr2 + " " + "odd number";
          oddNum.push(arr3);
          break;
        } else {
          arr4 = arr2 + " " + "prime number";
          primeNum.push(arr4);
          break;
        }
      }
      
    }
}
finalReturn.push(evenNum);
finalReturn.push(oddNum);
finalReturn.push(primeNum);
  return finalReturn;
}
console.log(numbers(numbb));









