const lib = require("./lib");

const odds_for_disease = 0.0001;   //disease which affects 1 in 10,000 people
const odds_for_false_positive = 0.02;

// disease which affects 1 in 10,000 people
// 2% false positive rate or 200 in 10,000 people
// report and validate result
function sim_test_people(run_people){
  console.log("\nsim_test_people with %i people", run_people);
  expected_disease_count = run_people * odds_for_disease;
  expected_false_positive_count = run_people * odds_for_false_positive;
  disease_count = 0;
  false_positive_count = 0;
  for (i=1; i<= run_people; i++){
    // simulate for the ith person
    patientID = i;
    // we are only interested in positive tests
    positive_test = lib.roll_dice_with_odds(odds_for_false_positive);
    //if the test is positive, compute chance that ith person has disease
    has_disease = lib.roll_dice_with_odds(odds_for_disease);


    if ((positive_test == true ) && (has_disease == false)){
      false_positive_count++;
        //positive test and ith person really has disease
      }
    if (has_disease == true){
      disease_count++;
      }
    }

  
  //console.log("has_disease %b is and positive_test is %b", has_disease, positive_test)

  console.log("expected false_positive %i for %i people", expected_false_positive_count, run_people);
  console.log("expected disease count of %i for %i people", expected_disease_count, run_people);

  console.log("false_positive is %f and true positive is %f", false_positive_count, disease_count);

  console.log("chance a positive test reflects real disease is %i disease count in %i false positives", 
    disease_count, false_positive_count );
  console.log("chance of disease on positive test %f ", disease_count / false_positive_count);
  console.log("chance of disease on positive test %f as a percentage", ((disease_count / false_positive_count)*100));

  //console.log("real disease: ", true_positive);
}


//sim_test_people(10000);

sim_test_people(10000 * 10000);





