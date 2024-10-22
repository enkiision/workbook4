"use strict";

let enki = {
  name: "E",
  address: "My Bidness Drive",
  city: "Brooklyn",
  state: "NY",
  zip: "12345",
};

let magnolia = {
    name: "Mag",
    address: "My Bidness Drive",
    city: "Brooklyn",
    state: "NY",
    zip: "54321",
}

function printContact(person) {
  console.log(person.name);
  console.log(person.address);
  console.log(person.city);
  console.log(person.state);
  console.log(person.zip);
  console.log(person); //this is calling all the names.values Cannot escape the curly braces but thats why in the field you'd be doing specific console logs whereas here its just to view over.
}
printContact(enki);
printContact(magnolia);

//access properties by objectName.propertyName ex. console.log ("Employee 1: " + emp.name);
