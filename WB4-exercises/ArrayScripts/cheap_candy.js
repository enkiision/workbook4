"use strict"

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Sour Patch Kids", price: 3.00},
    {product: "Skittles", price: 2.89},
    // TODO: fill the array with 10 candies of various
    // price ranges
   ];

   // Which candies costs less than $4.00? 1.a and 1.b 2 different ways to solve

   //easy quick solution 1.a
// for (const product of products) {
//     if (product.price < 4){
//         console.log(product);
        
//     }
//     }
 //end of 1.a
    console.log("--------------Get Cheap Candies----------------------");

    //using a function, more reusable 1.b
    function getCheapCandies(candies, price) {
      let cheapCandies = [];
    
      for (const candy of candies) {
        if (candy.price <= price) {
          cheapCandies.push(candy);
        }
      }
    
      return cheapCandies;
    }
    
    let cheapCandies = getCheapCandies(products, 3);
    console.log(cheapCandies);
// end of 1.b

   // Which candies has "M&M" its name?

   // Do we carry "Swedish Fish"?