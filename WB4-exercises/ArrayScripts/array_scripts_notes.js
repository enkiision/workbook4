"use strict"
//i=count. 


{let kids = ["Natalie", "Brittany", "Zachary"]; //multiple values in a single variable
    for(let i = 0; i < kids.length; i++) //NotedA: Best practice for storing the length of an array in a variable to use as loop. Keeps JS engine from having to recalculate each time throuhout the array.>> Noted C
    for(let i = 0; i < 3; i++) // Noted B: Subscripts are 0 based. N=0, B=1, Z=2 ===3 indexes
console.log(kids[i]);// call to display Noted A: this presents the outpout with a listed set of values in order.
console.log(kids); //Noted B
}

//Noted C
let kids = ["Natalie", "Brittany", "Zachary"];
let numKids = kids.length;
for(let i = 0; i < numKids; i++) {
 console.log(kids[i]);
}
//Noted C ^^^^^
//arrays can store numbers ("log,list,counted,"etc), dates ("important, coming up, specific name") objects ("menu, bakery,hardware store") EX: let menu  = [{item: "Hamburger", price: 6.95}]

let menu = [ //example from book, referenced above. Page 2-13 pg 27
    {item: "Hamburger", price: 6.95},
    {item: "Cheeseburger", price: 7.95},
    {item: "Hot dog", price: 4.95}
    ];
console.log(menu);
   //output includes {item: "Hamburger", price: 6.95}, 

   let ourKids = getKids();
   function getKids() {
    let kids = ["Natalie", "Brittany", "Zachary"];
    return kids;
   }
console.log(getKids);//passing the array to a function

function displayKids(kids) {
    let numKids = kids.length;
    for(let i = 0; i < numKids; i++) {
    console.log(kids[i]);
    }
   }
   displayKids(ourKids);  //returns the array from a function

   // let student = {}; //object, single thing arrary-students demo
let students = ["Gurgot", "Melina", "Kameron", "Timothy", "Christopher"]; //array, list, many things

// console.log(students[4]);

for (let index = 0; index < 5; index = index + 1) {
  console.log(students[index]);
}
console.log("-------------");

for (let i = 0; i < students.length; i++) {
  let studentName = students[i];
  console.log(studentName);
}
//array-student-objects demo

let students = [
  { first: "Gurgot", hairColor: "black" },
  { first: "Melina", hairColor: "black" },
  { first: "Kameron", hairColor: "black" },
  { first: "Timothy", hairColor: "black" },
  { first: "Christoper", hairColor: "black" },
];


for (let i = 0; i < students.length; i++) {
  const student = students[i];
  console.log(student.first, student.hairColor);
}

//array subset introducing push. Lines 84-88, line 93 and line 97 can be // out as they specifically push the drinks categorey out

let menuItems = [
  { id: 1, item: "Tacos", category: "Meal", price: 12.29 },
  { id: 2, item: "Burger", category: "Meal", price: 7.29 },
  { id: 3, item: "Salad", category: "Meal", price: 8.29 },
  { id: 4, item: "Ice tea", category: "Drink", price: 2.19 },
  { id: 5, item: "Coke", category: "Drink", price: 2.29 },
];

let drinks = [];
drinks.push("Margharita");
drinks.push("Water")
drinks.push("Diet Coke")
console.log(drinks);

for (const menuItem of menuItems) {
  if (menuItem.category == "Drink") {
    console.log(menuItem);
    drinks.push(menuItem);
  }
}

console.log(drinks);
