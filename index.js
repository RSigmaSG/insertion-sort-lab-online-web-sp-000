function findMinAndRemove(array){
  var min = array[0]
  var minIndex = 0
  for (var i = 1; i < array.length; i++)
  {
    if (min > array[i])
    {
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return min
}

function selectionSort(array){
  
  let newMin;
  let sorted = [];
  while (array.length != 0) {
    newMin = minAndRemove(array);
    sorted.push(newMin);
  }
  return sorted;
}
