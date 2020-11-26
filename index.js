function findMinAndRemove(array){
  var min = array[0]
  var minIndex = 0
  for (var i = 1; i < array.length; i++)
  {
    if (min > array[i])
    {
      min = array[i]
    }
  }
  array.splice()
  return min
}

function selectionSort(array){
  
  var sorted
  
  for (var i = 0; array.length !== 0 ; i++)
  {
    sorted.push(findMinAndRemove(array))
  }
  
  return sorted
}
