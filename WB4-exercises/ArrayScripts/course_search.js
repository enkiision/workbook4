"use strict"

let courses = [ //we know this is an array because of the [] this becomes an array[] of objects{}
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ];
  
 // {A} START we didn't start with this lets keep practicing for loops10/23 @ 11:17am

   for (const course of courses) {
    if (course.CourseId === "PROG200") {
      console.log(`The PROG200 course starts:  ${course.StartDate}`);
    }
  }

  // ************When does the PROG200 course start?************
  //  / {A}

 //let courseIds = [] // []signify we want an array of objects // not necessary for question 1 not necessary at all
//let StartDate = [] not necessary at all
   
   //StartDate.push ("11/22/22")
   // for>if>log out example
  // courseId.push ("PROG200") // how to label this as one----> you would be ading more for and ifs but creating a loop to condense all together. This wasn't what the rest of the questions were asking. will provide an optional copy to practice advance work on /copy_course_search.js

// **********What is the title of the PROJ500 course?*************
for (const course of courses) {
    if (course.CourseId === "PROJ500") {
      console.log(`The title of the PROJ500 course is ${course.Title}`);
    }
  }


// ************* REVIEW ME AND ANNOTATE + TEST What are the titles of the courses that cost $50 or less?***********
for (const course of courses) {
    if (Number(course.Fee) <= 50) {
      console.log(`Inexpensive course: ${course.Title}`);
    }
  }

// REVIEW ME AND ANNOTATE + TEST ************What classes meet in "Classroom 1"?********* 
let inexpensiveCourseTitles = [];

for (const course of courses) {
  if (Number(course.Fee) <= 50) {
    inexpensiveCourseTitles.push(course);
  }
}
console.log("Inexpensive course list: ",inexpensiveCourseTitles);
