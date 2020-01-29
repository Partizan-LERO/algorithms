function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    
    for(let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
      	min = j;
      }
      if (min !== i) {
            let c = arr[i];
            arr[i] = arr[min];
            arr[min] = c;
      }
    }
  }
  return arr;
}

console.log(selectionSort([9, 5, 3, 7, 8, 15, 11]));
