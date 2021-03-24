const { count } = require("console");
const lib = require("./lib");

const odds_for_disease = 0.0001;
const odds_for_false_positive = 0.02;

function test_roll_dice_with_odds(runs, odds){
  expected_value = runs * odds;
  var count = 0;
  for (i=0; i<runs; i++){
    disease = lib.roll_dice_with_odds(odds);
    if (disease) count++;
  }
  console.log("\ncount is: %i expected %i, runs: %d with odds: %f", count, expected_value, runs, odds);
  console.log("error is %f", Math.abs(expected_value - count)/ runs)

}
test_roll_dice_with_odds(10, 0.4);
test_roll_dice_with_odds(1000, 0.4);
test_roll_dice_with_odds(100000, 0.4);
test_roll_dice_with_odds(100000, odds_for_false_positive);
test_roll_dice_with_odds(100000, odds_for_disease);
test_roll_dice_with_odds(10000000, odds_for_disease);

