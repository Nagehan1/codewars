



function iTri(s){
  let distance = 140.6;
  if (s == 0) return 'Starting Line... Good Luck!';
  if (s <= 2.4) return {'Swim':`${(distance - s).toFixed(2)} to go!`};
  if (s <= 114.4) return {'Bike':`${(distance - s).toFixed(2)} to go!`};
  if (s <= 130.6) return {'Run':`${(distance - s).toFixed(2)} to go!`};
  if (s <= 140.6) return {'Run':'Nearly there!'};
  return "You're done! Stop running!"
}