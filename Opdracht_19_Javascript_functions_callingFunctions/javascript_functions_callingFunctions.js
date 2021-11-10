console.log("Javascript and Node are working");

/*
// FUNCTION 1> Hey kiddo
//create a function that has one parameter: the age
//this function should return true if the age is >= 18, false in all other cases
//think of a good name for the function and the parameter

const adult = 18; //parameter age

const greetKiddo = function (age) {
  if (age >= adult) {
    console.log("You are above 18");
    console.log("first true");
    return true;
  } else {
    console.log("You are under 18");
  }
};

//greetKiddo(20); // this turns on the microwave :)

//create a second function that has one parameter: the age
//think of a good name for the function and the parameter
//this second function uses (calls) the first function, giving it the age, to check if we get an adult age
//if it's an adult the second function should return "Hello there"
//if it's not an adult it should return "Hey kiddo"
//use console.log to display the return value of the second function

//experiment so you're sure your function works

const greetKiddo2 = function (age2) {
  greetKiddo(age2);
  if (age2 >= adult) {
    console.log("Hello there");
    console.log("second true");
    return true;
  } else {
    console.log("Hey kiddo");
  }
};

greetKiddo2(25); // this turns on the microwave :)

*/

// FUNCTION 2> VAT calculations

/*
VAT exercise 1
First let's write a function that takes the base price and the VAT percentage and returns the price including VAT.
 You must do the calculation of the VAT amount in a separate function. So, in the spirit of the lesson: 
 we have a main function that does the main calculation and another function that we call from this main function.
*/

let baseprice = 0;
const vat21 = 1.21;
const vat9 = 1.9;
let totalVat = 0;
let vatAmount21 = 21;
let vatAmount9 = 9;
let vatAmount = 0;
let vatPercentage = 0;

const calcPrice = function (baseprice) {
  if (baseprice > 10) {
    totalVat = baseprice * vat21;
    vatAmount = 1.21;
    vatPercentage = 21;

    console.log(totalVat);
  } else {
    totalVat = baseprice * vat21;
    console.log(totalVat);
    vatAmount = vatAmount9;
    vatAmount = 1.9;
    vatPercentage = 9;
  }
};

calcPrice(1000);

/*
VAT exercise 2
In this exercise we're going to calculate the base price and VAT amount. The main function you make should take the amount including VAT and the VAT percentage. 
The return value should be an array with two elements: base price and VAT amount.
 Again: make sure you use two functions, where the main one calls another function to do part of the calculation.
*/

let finalArray = [baseprice, vatAmount];

const calcBasePriceAndVat = function ([baseprice, vatAmount, vatPercentage]) {
  calcPrice();
  finalArray = [baseprice, vatAmount];
  console.log(baseprice);
  console.log(vatAmount);
  console.log(vatPercentage);
  console.log(finalArray);
  return finalArray;
};

calcBasePriceAndVat([1000, 1.21, 21]);
