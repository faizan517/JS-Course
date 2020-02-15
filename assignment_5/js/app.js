//Question 1

//var Question = prompt("Please enter your name");
//alert("hi," + Question);
//console.log(Question);

//Question 2

/*var table = +prompt("Enter table number");
for (var i = 1; i <= 10; i++)
  if (table == 0) {
    console.log(5 + " " + "X" + " " + i + " " + "=" + " " + 5 * i);
  } else if (table == table) {
    console.log(table + " " + "X" + " " + i + " " + "=" + " " + table * i);
  }*/

//Question 3

//var city = prompt("Enter your city name");
//if (city == "karachi") {
//  alert("Welcome to city of lights");
//} else {
// alert("Welcome");
//}

//Question 4

//var gender = prompt("Your geander?");
//if(gender=="male"){
// alert("Good Morning Sir")
//}
//else if(gender=="female"){
//  alert("Good Morning Ma'am");
//}
//else{
//  alert("Ooops try again");
//}

//Question 5

/*var colorrt = prompt("Color of road traffic signal");
if (colorrt == "red") {
  alert("vehicles must stop");
} else if (colorrt == "yellow") {
  alert("vehicles should get ready to move");
} else if (colorrt == "green") {
  alert("vehicles can move now");
} else {
  alert("try again");
}*/

//Question 6


/*var maxAge = prompt("Enter max age")
var age = prompt("Enter your age");
if (maxAge >=age ) {
  alert("allowed");
} else {
  alert("not allowed");
}*/

var totalMarks = 300;
var subject1 = +prompt("Urdu marks")
var subject2 = +prompt("English marks")
var subject3 = +prompt("Math marks")

var obtainedMarks = (subject1+subject2+subject3)

var percentage =(obtainedMarks/totalMarks)*100;
if(percentage>=80){
  console.log("A-one","Excellent")
}
else if(percentage>=70){
  document.write("A","Good")
}
else if(percentage>=60){
  document.write("B","You need to improve")
}
else {
  document.write("FAIL","sorry")
}
document.write("MARKSHEET")
