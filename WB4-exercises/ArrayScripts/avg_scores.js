"use strict"; //https://github.com/craigmckeachie/fall2024-workbook4/blob/main/exercises/avg_scores.js

let myScores = [90, 88, 82, 75, 90, 98, 100];

let sumOfAllScores = 0;
for (const score of myScores) {
  console.log(score);
  sumOfAllScores = sumOfAllScores + score;
}
//console.log(sumOfAllScores);
//lines 5-10 establishes the loop and sums the numbers after displaying them.90-100 listed diagonally with the sum of 623 at the bottom

function getAverage(scores) {
  let sumOfAllScores = 0;
  for (const score of myScores) {
    sumOfAllScores = sumOfAllScores + score;
  }

  let averageScore = sumOfAllScores / myScores.length;
  //console.log(averageScore);
  return averageScore;
}

let averageScore = sumOfAllScores + score;
console.log(averageScore);

//*********** */ line 10 console.log is commented out because our end goal is the average
let yourScores = [80, 100, 95, 90, 90, 100, 100];

//b4 starting functions define what logs and variables EX: let myAverage etc

function getAverage(scores) {} //establish the function and what we want the function to do... the average!// this goes between the scores and the formulas

//the array is labled scores not myScores, so this can be referenced to, Generic name. this way we can apply myAverageScore and ourAverageScore

//getAverage(myScore) //no emmet abbreveation for average

let myAverageScore = getAverage(myScore);

console.log(myAverageScore);

let yourAverageScore = getAverage(yourAverageScoremyScores);
console.log(yourAverageScore);

//return (getAverage = myScores/7) //only return when INSIDE a function
//     console.log(return);

for (let position = 0; position < list.length; position++) {
  const item = list[position];
  console.log(item);
}

//^^^ this for part is for testing and confirming the loops
