
exports.min = function min (array) {
  if (typeof(array) === "undefined" || array.length == 0 ){
    return 0  
  }
  return array.sort((a,b) => a-b)[0]
}

exports.max = function max (array) {
  if (typeof(array) === "undefined" || array.length == 0 ){
    return 0  
  }
  return array.sort((a,b) => a-b)[array.length-1];
}

exports.avg = function avg (array) {
  if (typeof(array) === "undefined" || array.length == 0 ){
    return 0  
  } 
  return array.reduce((a,b) => a+b)/(array.length)
}
