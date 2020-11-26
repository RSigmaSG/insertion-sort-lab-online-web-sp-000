function findMinAndRemove(array){
  let min = array[0];
  let minIndex = 0;
  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i];
    if (array[i] < min) {
      min = array[i];
      minIndex = i;
    }
  }
  array.splice(minIndex, 1);
  return min;
}

function selectionSort(array){
  
  let sorted[];
  let newMin;
  
  while (array.length != 0)
  {
    console.log(array)
    newMin = findMinAndRemove(array)
    sorted.push(newMin)
  }
  
  return sorted
}
