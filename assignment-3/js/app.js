var username = prompt("enter your name")

var totalmarks = 100;
var obtainmarks = 0;

var q1 = prompt("what is this?")
var q2 = prompt("what is my name?")
var q3 = prompt("day")
var q4 = prompt("drink")
var q5 = prompt("color")
var q6 = prompt("ice cream")
var q7 = prompt("sport")
var q8 = prompt("game")
var q9 = prompt("laptop")
var q10 = prompt("actor")

if (q1 == apple) {
  obtainmarks = obtainmarks + 10
}
else {
  totalmarks = totalmarks - 5
}

if (q2 == faizan) {
  obtainmarks = obtainmarks + 10
}
else {
  totalmarks = totalmarks - 5
}

if (q3 == sunday) {
  obtainmarks = obtainmarks + 10
}
else {
  totalmarks = totalmarks - 5
}

if (q4 == dew) {
  obtainmarks = obtainmarks + 10
}
else {
  totalmarks = totalmarks - 5
}

if (q5 == black) {
  obtainmarks = obtainmarks + 10
}
else {
  totalmarks = totalmarks - 5
}

if (q6 == chocolate) {
  obtainmarks = obtainmarks + 10
}
else {
  totalmarks = totalmarks - 5
}

if (q7 == circket) {
  obtainmarks = obtainmarks + 10
}
else {
  totalmarks = totalmarks - 5
}

if (q8 == pubg) {
  obtainmarks = obtainmarks + 10
}
else {
  totalmarks = totalmarks - 5
}

if (q9 == hp) {
  obtainmarks = obtainmarks + 10
}
else {
  totalmarks = totalmarks - 5
}

if (q10 == jhonny) {
  obtainmarks = obtainmarks + 10
}
else {
  totalmarks = totalmarks - 5
}

//percentage
var percentage = (obtainmarks / totalmarks) * 100
if
  (percentage >= 80) {
  console.log(username,"A+ GRADE")
}
else if
  (percentage >= 60){
  console.log("B GRADE")
}
else if
(percentage >= 50){
  console.log("C GRADE")
}
else if
(percentage >= 40){
  console.log("D GRADE")
}
else if
(percentage >= 30){
  console.log("E GRADE")
}
else 
{
  console.log("FAIL")
} 