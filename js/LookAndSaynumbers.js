function lookAndSay(data,len){
  // Populate result list with the look and say numbers
  // data:  starting number set
  // len:   sequence length
  

  let result = [data];
  for (let i = 1; i < len; i++) {
    let current = result[result.length - 1];
    let next = '';
    let count = 1;
    for (let j = 1; j < current.length; j++) {
      if (current[j] === current[j - 1]) {
        count++;
      } else {
        next += count + current[j - 1];
        count = 1;
      }
    }
    next += count + current[current.length - 1];
    result.push(next);
  }
  return result;
}

