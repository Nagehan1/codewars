// Oh no, Timmy's filter doesn't seem to be working?

var FilterNumbers = function(str) {
  return str.split('').filter(c =>c.match(/[a-zA-Z]/g)).join('');
}