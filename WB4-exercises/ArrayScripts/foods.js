"use strict" //completed
//"tuna sushi", price: 8.00, "eel onigiri" price: 4.00, "steak burrito", price: 17.00
let takeouts = [ //holding a list of items
    {item:"tuna sushi", price: 8.00}, 
    {item:"eel onigiri", price: 4.00}, 
    {item:"steak burrito", price: 17.00}
];
//pushing items onto the array //look at craig github
//let prices = []; prices.

//console.log(price);

// a for loops job is to go through a loop and pull something out and ask what is to be done, Hence the output showing the totals after the curly braces.
//console.log(takeout); shows  { item: 'tuna sushi', price: 8 },
let subtotal = 0; //establish a subtotal starting place

for (let i = 0; i < takeouts.length; i++){ //list
    const takeout = takeouts [i];  // take out is the singular thins whereas takeouts is the list
    // this is subscript, this is declaring that i is takeout and we are acknowledging that this is an object no changes. we want takeout(S) instead of takeout because theres multiple takeout items
    subtotal = takeout.price + subtotal;
    console.log(takeout);
    console.log(subtotal);
}
let tax = subtotal * 0.08
let total = subtotal + tax
let tip = total * 0.18
console.log("Subtotal: $" + subtotal);
console.log("Tax: $" + tax);
console.log("Total: $" + total);
console.log("18% Tip $" + tip);
console.log( "Grand Total w/ 18% Tip $" + tip);

    
// ASSIGNMENT: code to loop through the array and add up the price o everything and print out as a subtotal. Also display the tax ont the total, assume 8% and an 18% tip along with the total due.