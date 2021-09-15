'use strict';
/*
*************************CODING TASK*********************************
1. Create variables to represent scores of exams for Matt and Simon and set values   80 and 45;
2. Create variable to set the lower limit for passing an exam and assign to it value as 51;
3. Write the condition in if statement, which will check if both students have passed an exam and log the result in console;
4. Use else if statement in order to check if one of the students has passed an exam and log the result in console;
5. Use else statement in order to display in console that both students have failed;
6. In case of passing the exam by one of the students, find out which one was that and display in console as an additional information the student name and his points
7. Test all the possible cases (a. both students passed; b. Matt passed and Simon failed; c. Simon passed and Matt failed; d. both students failed).
*/

// SOLUTION:
// 1.
const scoreMatt = 80;
const scoreSimon = 50;

// 2.
const lowerLimit = 51;

// 3. 4. 5.
// if (scoreMatt > lowerLimit && scoreSimon > lowerLimit) {
//   console.log("Both students have passed the exam");
// } else if (scoreMatt > lowerLimit || scoreSimon > lowerLimit) {
//   console.log("One of the students has passed the exam");
// } else if (scoreMatt <= lowerLimit && scoreSimon <= lowerLimit) {
//   console.log("Both Students have failed");
// }

// 6. 7.
const whichOnePassed = function () {
  if (scoreMatt > scoreSimon) {
    console.log(`Matt passed (score: ${scoreMatt}) and Simon failed`);
  } else {
    console.log(`Simon passed (score: ${scoreSimon}) and Matt failed`);
  }
};

if (scoreMatt >= lowerLimit && scoreSimon >= lowerLimit) {
  console.log('Both students have passed the exam');
} else if (scoreMatt >= lowerLimit || scoreSimon >= lowerLimit) {
  console.log('One of the students has passed the exam');
  whichOnePassed();
} else if (scoreMatt < lowerLimit && scoreSimon < lowerLimit) {
  console.log('Both Students have failed');
}
