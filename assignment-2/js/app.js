//prompts
var name = prompt("faizan");
console.log(name);
var question = "Your species?";
var defaultAnswer = "human";
var spec = prompt(question, defaultAnswer);
console.log(spec);
var age = +prompt("age");
console.log(age);
var numberOfCats = prompt("How many cats?");
var tooManyCats = numberOfCats + 1;
console.log(tooManyCats);
var window = window.prompt("massage");
console.log(window);
var num1 = prompt("Enter Number One");
var num2 = prompt("Enter Number Two");
console.log(num1 + num2);
var num1 = prompt("Enter Number One");
var num2 = prompt("Enter Number Two");
console.log(num1 - num2);

//Comparsion Operators
//with examples
//1 == both values are equal                             10==10  true
//2 >= greater and equals to                             10 >=10 /  15 >= 10  true
//3 <= lesser than and equals to                         10 <= 11  / 9 <= 9  true
//4 != value is not equals to                            10 != 11  true
//5 ===boths values equals with datatype + value         8 === 8  true
//7 <  check only lesser than value                      10 < 11  true
//6 >  check only greater than value                     15 > 10  true

//20 != 20  false
//60 <= 50  false
//20 >= 30  false
//20 != 20  false

//if statment

var age = +prompt("your age");

if (age == 20) {
  alert("allowed");
}

if (age === "20") {
  alert("allowed");
}

if (age >= 20) {
  alert("allowed");
}

if (age <= 20) {
  alert("allowed");
}

if (age < 20) {
  alert("allowed");
}

if (age > 20) {
  alert("allowed");
}

if (age != 20) {
  alert("allowed");
}

//if else
var month = prompt("month"); 
if (month === "september") {
  alert("Correct!");
} else {
  alert("Wrong answer");
}

 var percentage = +prompt("Your Percentage");

if (percentage >= 80) {
   alert("A1 grade");
 } else if (percentage >= 70) {
   alert("A grade");
 } else if (percentage >= 60) {
   alert("B grade");
 } else if (percentage >= 50) {
   alert("C grade");
 } else if (percentage >= 40) {
   alert("D grade");
 } else if (percentage >= 35) {
   alert("E grade");
 } else {
   alert("Failed");
 }

 //logical operators

var num1 = "september"; 
var num2 = "march";
var num3 = "december";


if(num1=="september" 
 && num2=="march" 
 && num3=="december"){
    alert("Success");
 }
 else{
    alert("Try again");
}


 if(num1=="nun" 
 || num2 == "march" 
 || num3 == "september"){
    alert("access");
 }else{
    alert("deny");
 }
