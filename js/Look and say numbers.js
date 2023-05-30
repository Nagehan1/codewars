// There exists a sequence of numbers that follows the pattern

//           1
//          11
//          21
//         1211
//        111221
//        312211
//       13112221
//      1113213211
//           .
//           .
//           .
// Starting with "1" the following lines are produced by "saying what you see", so that line two is "one one", line three is "two one(s)", line four is "one two one one".

// Write a function that given a starting value as a string, returns the appropriate sequence as a list. The starting value can have any number of digits. The termination condition is a defined by the maximum number of iterations, also supplied as an argument.

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
  function lookAndSaySequence(s, n){
    while(--n) {
      s=s.replace(/(.)\1*/g,(m)=>m.length+m[0])
    }
    return s;

    

    
  }

