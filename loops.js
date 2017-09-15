function forLoop(array) {
  for(var i=0; i<25; i++)
  {
    if(i===i)
    {
      array.push("I am 1 strange loop.")
    }
    else {
      array.push("I am ${i} strange loops.")
    }
  }
  return array
}

function doWhileLoop(array) {
  while(array.length != 0)
  {
    array.pop()
  }
  return array
}