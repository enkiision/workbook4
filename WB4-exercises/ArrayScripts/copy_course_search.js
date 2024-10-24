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

for (let index = 0; index < courses.length; index++) {
    const course = courses[index];
    console.log(course);
}
// {A}

   //console.log(courses);
   let courseIds = [] // []signify we want an array of objects
   let StartDate = []
   
   StartDate.push ("11/22/22")

   // let>push>log out example
   courseId.push ("PROG200")
   //console.log(courseId); //outputs: [ 'PROG100' ]
   courseId.push ("PROG100") // originally courseId.push ("PROG100") how to label this as one----> you would be ading more for and ifs but creating a loop to condense all together. This wasn't what the rest of the questions were asking. will provide an optional copy to practice advance work on
   courseId.push ("PROG300")
   courseId.push ("PROG400")
   courseId.push ("PROG500")

   //console.log(courseId + " starts on " + StartDate); // this is how to answer question 1 Outputs:PROG200 starts on 11/22/22
  
   //let courseId = []
  // console.log(courseId)


   let title = []


   //Title.push


   //console.log(courses.CourseId.StartDate);
// When does the PROG200 course start? Answered completed line 62. not fully complete will repeat correction below
// When does the PROG200 course start?
for (const course of courses) { //we skipped the for if. Still looking for a way to specify the specfic course
    if (course.CourseId === "PROG200") {
        console.log(courseId + " starts on " + StartDate);
    }
 }

// What is the title of the PROJ500 course?
for (const course of courses) {
    if (course.Fee <= 50) {
        console.log("Inexpensive course: ${course.Title}");
    }
}


// What are the titles of the courses that cost $50 or less?
// What classes meet in "Classroom 1"?