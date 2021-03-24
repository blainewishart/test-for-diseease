


// odds are expressed as a decimal between 0 and 1.0, including 0 but not including 1.0
// test #1: if we run roll_dice_with_odds(0.3) 100 thousand times, and sum the results, we should get a number close to 30,000. 
//    Since this function returns booleans only, we will need to count the number of true results.
// test #3: if we run function(0.3) 1 million times, and sum the results, we should get a number close to 300,000
//    Since this function returns booleans only, we will need to count the number of true results.

function roll_dice_with_odds(odds){
  if (Math.random()<=odds){
    return true;
  }
  else return false;
}
module.exports = { roll_dice_with_odds }