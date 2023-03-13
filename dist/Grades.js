"use strict";
1;
// 1st Practice 
let UrduMarks = 59;
let EngMarks = 59;
let Avg = (UrduMarks + EngMarks) / 2;
// if else condition
if (Avg >= 80)
    console.log("Grade A+");
if (Avg <= 79 && Avg >= 70)
    console.log("Grade A");
if (Avg <= 69 && Avg >= 60)
    console.log("Grade B");
if (Avg <= 59)
    console.log("Failed");
// Second Practice;
let urdu = 59;
let english = 59;
let result = (urdu + english) / 2;
if (result >= 80)
    console.log("Your Grade is A");
else if (result >= 70 && result < 80)
    console.log("Your Grade is B");
else if (result >= 60 && result < 70)
    console.log("Your Grade is C");
else if (result < 60)
    console.log("You are Failed");
