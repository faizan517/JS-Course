//Question 1


var students = ["Ali", "Faizan", "Sami", "Saad"];
var obtainedMarks = [100, 200, 300, 400];
var totalMarks = 500;

var percent = (obtainedMarks[0] / totalMarks) * 100;
var grade1 ;
if (percent >= 80) {
  grade1 = "A+";
} else if (percent >= 70) {
  grade1 = "A";
} else if (percent >= 60) {
  grade1 = "B";
} else if (percent >= 50) {
  grade1 = "C";
} else if (percent >= 40) {
  grade1 = "D";
} else {
  grade1 = "F";
}

console.log(
  "score of" +
    " " +
    students[0] +
    " " +
    "is" +
    " " +
    obtainedMarks[0] +
    " " +
    "percentage is" +
    " " +
    percent +
    " " +
    "Grade is" +
    " " +
    grade1
)
var percent = (obtainedMarks[1] / totalMarks) * 100;
var grade ;
if (percent >= 80) {
  grade2 = "A+";
} else if (percent >= 70) {
  grade2 = "A";
} else if (percent >= 60) {
  grade2 = "B";
} else if (percent >= 50) {
  grade2 = "C";
} else if (percent >= 40) {
  grade2 = "D";
} else {
  grade2 = "Fail";
}
console.log(
  "score of" +
    " " +
    students[1] +
    " " +
    "is" +
    " " +
    obtainedMarks[1] +
    " " +
    "percentage is" +
    " " +
    percent +
    " " +
    "Grade is" +
    " " +
    grade2
)

var percent = (obtainedMarks[2] / totalMarks) * 100;
var grade3 ;
if (percent >= 80) {
  grade3 = "A+";
} else if (percent >= 70) {
  grade3 = "A";
} else if (percent >= 60) {
  grade3 = "B";
} else if (percent >= 50) {
  grade3 = "C";
} else if (percent >= 40) {
  grade3 = "D";
} else {
  grade3 = "Fail";
}
console.log(
  "score of" +
    " " +
    students[2] +
    " " +
    "is" +
    " " +
    obtainedMarks[2] +
    " " +
    "percentage is" +
    " " +
    percent +
    " " +
    "Grade is" +
    " " +
    grade3
)

var percent = (obtainedMarks[3] / totalMarks) * 100;
var grade4 ;
if (percent >= 80) {
  grade4 = "A+";
} else if (percent >= 70) {
  grade4 = "A";
} else if (percent >= 60) {
  grade4 = "B";
} else if (percent >= 50) {
  grade4 = "C";
} else if (percent >= 40) {
  grade4 = "D";
} else {
  grade4 = "F";
}
console.log(
  "score of" +
    " " +
    students[3] +
    " " +
    "is" +
    " " +
    obtainedMarks[3] +
    " " +
    "percentage is" +
    " " +
    percent +
    " " +
    "Grade is" +
    " " +
    grade4
)


//Question 3


var table = +prompt("table") ;
var howManyTimes = +prompt("howManyTime")
for(var i=1; i<=howManyTimes; i++){
console.log(table + " " + " X " + " " + i + " " + " = " + " " + (table*i))
}


//Question 2


//var color = ["red","blue","black"]
//console.log(color);
//var addColor = prompt("what color you want to add at beginning")
//color.unshift(addColor)
//console.log(color);
//var colorRemove = prompt("what color you want to add at end")
//color.push(colorRemove)
//console.log(color);
//color.unshift("orange","gray");
// console.log(color)
//color.push("orrange","black");
//console.log(color);
//color.shift()
// console.log(color);
//color.pop()
//console.log(color);
//var colorInIndex = prompt("which index you want to add color")
//color.splice(colorInIndex ,0, "gray");
//console.log(color);
//var delColorIndex = prompt("Type your desire index to del color in list");
//var delColorCount = prompt("How many colors would you like to delete in this list");
// color.splice(delColorIndex,delColorCount);
// console.log(color)