# test-for-diseease

## name of repository is mispelled!!!

1. See code at bottom of test_disease.js to run primative simulation.
  1. note that quality of the calculation improves substantiall with sim_test_people(10000 * 10000); vs sim_test_people(10000 * 100);
  1. I'm concerned that such large runs are required
1. See code at bottom of test_roll_dice.js to see test w/o test framwork illustrating core fuction in lib works as expected.
  1. quality of data improves as expected as runs size goes from 10,000 to 1,000,000
  
  
  
Sorry about the snake_case. Habit.

### what we know
The context of the exercise is important.
The assumption is that we know that the chance of a false positive is 2%. That is a a fact.
Likewise we know that the real rate of disease is 1/10000 or 0.0001. Those are facts. We are not trying to prove them.
And, we know our test catches 99% if cases.

We try to illustrate the non-intuitive reality that for a given positive test, there is only about a 5% chance of real diseaase

### what we try to illustrate
We walk through a set of people trying to illustrate the non-intuitive fact that only small minority (about 5%) of positive tests reflect real disease.
