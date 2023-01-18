// Description:

// You are working at a lower league football stadium and you've been tasked with automating the scoreboard.

// The referee will shout out the score, you have already set up the voice recognition module which turns the ref's voice into a string, but the spoken score needs to be converted into a pair for the scoreboard!

// e.g. "The score is four nil" should return [4,0]

// Either teams score has a range of 0-9, and the ref won't say the same string every time e.g.

// "new score: two three"
  
// "two two"
  
// "Arsenal just conceded another goal, two nil"

// Note:

// Please return an array

// Please rate and enjoy!
function scoreboard(string) {
    // code here!
    var score = [];
  
    var referee = ['nil', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  
    var number = [0,1,2,3,4,5,6,7,8,9]
  
    var strSplit = string.split(' ')
    
    for(var i = 0; i < strSplit.length; i ++) {
      for(var j = 0; j < referee.length; j ++) {
        if(referee[j] === strSplit[i]) {
          score.push(number[j]);
        }
      }
    }
    return score;
  }