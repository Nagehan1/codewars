function checkAnagram(x, y) {
  let long1 = x.length;
  let long2 = y.length;
  if(long1 !== long2){
     return false;
  }
  let str1 = x.split('').sort().join('');
  let str2 = y.split('').sort().join('');
  
  if(str1 === str2){
    return true;
  } else { 
    return false;
  }
}
checkAnagram("tin","net")
