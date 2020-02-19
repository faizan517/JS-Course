var arr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  ["Abc"],
  ["Xyz"],
  ["Etc"],
  ["..."]
];

var string = [];
var number = [];
var boolean = [];
var object = [];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "string") {
    string.push(arr[i]);
  } else if (typeof arr[i] === "number") {
    number.push(arr[i]);
  } else if (typeof arr[i] === "boolean") {
    boolean.push(arr[i]);
  } else if (typeof arr[i] === "object") {
    object.push(arr[i]);
  }
}

console.log(string);
console.log(number);
console.log(boolean);
console.log(object);