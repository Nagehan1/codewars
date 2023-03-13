// const flatten = (array) => [].concat(...array);

function flatten(arr) {
  return arr.reduce((flatArr, subArr) => flatArr.concat(subArr), []);
}
