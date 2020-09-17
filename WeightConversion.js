"use strict"
/*
  Title: WeightConversion
  Author: Brittny Eaddy
  Date: 7/18/2020
  Purpose: Provide function to perform a calculation converting
    pounds to kilograms and display the results in a table.
*/

/*
  setup adds functionality to change units on button click.
*/
function setup() {
  document.getElementById("pounds").onclick = function ()
  {setUnits("kilograms");};
  document.getElementById("kilograms").onclick = function ()
  {setUnits("pounds");};
}

/*
  setUnits takes in the unit parameter representing weight and
  updates the label element to reflect that unit.
*/
function setUnits(unit) {
  var label = document.getElementById("label");
  label.innerHTML = unit;
}

/*
  convert determines if the kilograms button is selected and using
  the value of the temperature element to call the appropriate
  function for conversion.
*/
function convert() {
  var kilogramsButton = document.getElementById("kilograms");
  var weight = document.getElementById("weight");
    
  if (kilogramsButton.checked) {
    convertToKilograms(weight.value);
  } else {
    convertToPounds(weight.value);
  }
}

/*
  convertToKilograms takes in weight in pounds and converts it to 
  pounds, updating the answer element with the entered weight and
  its equivalent in pounds.
*/
function convertToKilograms(weightInPounds) {
  var kilogramsWeight = weightInPounds * 0.45359237;
  document.getElementById("answer").innerHTML =
  weightInPounds +
    " pounds converts to " + kilogramsWeight.toFixed(1) +
    " kilograms";
}

/*
  convertToPounds takes in weight in kilograms and converts it to
  kilograms, updating the answer element with the entered weight
  and its equivalent in kilograms.
*/
function convertToPounds(weightInKilograms) {
  var poundsWeight = weightInKilograms / 0.45359237;
  document.getElementById("answer").innerHTML =
  weightInKilograms +
    " kilograms converts to " + poundsWeight.toFixed(1) +
    " pounds";
}