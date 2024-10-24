"use strict"

//this java script belonging to select list exercise

//get html elements into variables
let meatsSelect = document.getElementById("meatsSelect");

let option1 = document.createElement("option");
option1.value = "1";
option1.innerText = "Steak";
meatsSelect.appendChild(option1);

let option2 = document.createElement("option");
option2.value = "2";
option2.innerText = "Lamb";
meatsSelect.appendChild(option2);