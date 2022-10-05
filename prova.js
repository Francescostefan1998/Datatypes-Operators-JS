let isMale = "Yes";
let gendermale = "male";
let genderfemale = "female";
let gender = isMale.toLocaleLowerCase === "yes" ? gendermale : genderfemale;
console.log(gender);

let firstintegers = 4;
let secondintegers = 4;
let firstn = firstintegers === 8
let secondn = secondintegers === 8
console.log(firstn);
console.log(secondn);
let subtraction = (firstintegers - secondintegers) === 8
let summ = (firstintegers + secondintegers) === 8
console.log(subtraction);
console.log(summ);
let situation = firstn || secondn || subtraction || summ
console.log(situation);