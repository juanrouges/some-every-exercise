// ==================================================
// >>>>>>>>>>>>>>>> Some & Every <<<<<<<<<<<<<<<<<<<<
// ==================================================
// 1. hasOddNumber
// --------------------------------------------------
// Write a function called hasOddNumber which accepts an
// array and returns true if the array contains at least
// one odd number, otherwise it returns false.
// ++++++++++++++++++++++++++++++++++++++++++++++++++
// hasOddNumber([1,2,2,2,2,2,4]) // true
// hasOddNumber([2,2,2,2,2,4]) // false
// ++++++++++++++++++++++++++++++++++++++++++++++++++
console.log('a:1 ---------------------------------');
const numsRowOne = [1, 2, 2, 2, 2, 2, 4];
const numsRowTwo = [2, 2, 2, 2, 2, 4];
console.log(hasOddNumber(numsRowOne));
console.log(hasOddNumber(numsRowTwo));
function hasOddNumber(arr) {
  const validation = arr.some(function (value, index) {
    return value % 2 !== 0;
  });
  return validation;
}
// --------------------------------------------------
// 2. hasAZero
// --------------------------------------------------
// Write a function called hasAZero which accepts a number
// and returns true if that number contains at least one
// zero. Otherwise, the function should return false
// ++++++++++++++++++++++++++++++++++++++++++++++++++
// hasAZero(33321232131012) // true
// hasAZero(1212121) // false
// ++++++++++++++++++++++++++++++++++++++++++++++++++
console.log('a:2 ---------------------------------');
console.log(hasZero(33321232131012));
console.log(hasZero(1212121));
function hasZero(num) {
  const validation = [...num.toString()].some(function (value, index) {
    return value === '0';
  });
  return validation;
}
// --------------------------------------------------
// 3. hasOnlyOddNumbers
// --------------------------------------------------
// Write a function called hasOnlyOddNumbers which accepts
// an array and returns true if every single number in
// the array is odd. If any of the values in the array
// are not odd, the function should return false.
// ++++++++++++++++++++++++++++++++++++++++++++++++++
// hasOnlyOddNumbers([1,3,5,7]) // true
// hasOnlyOddNumbers([1,2,3,5,7]) // false
// ++++++++++++++++++++++++++++++++++++++++++++++++++
console.log('a:3 ---------------------------------');
const luckyNums = [1, 3, 5, 7];
const unLuckyNums = [1, 2, 3, 5, 7];
console.log(hasOnlyOddNumbers(luckyNums));
console.log(hasOnlyOddNumbers(unLuckyNums));
function hasOnlyOddNumbers(array) {
  const validation = array.some(function (value, index, array) {
    return value % 2 === 0;
  });
  return !validation;
}
// --------------------------------------------------
// 4. hasNoDuplicates
// --------------------------------------------------
// Write a function called hasNoDuplicates which accepts
// an array and returns true if there are no duplicate
// values (more than one element in the array that has
// the same value as another). If there are any
// duplicates, the function should return false.
// ++++++++++++++++++++++++++++++++++++++++++++++++++
// hasNoDuplicates([1,2,3,1]) // false
// hasNoDuplicates([1,2,3]) // true
// ++++++++++++++++++++++++++++++++++++++++++++++++++
console.log('a:4 ---------------------------------');
console.log(hasNoDuplicates([1, 2, 3, 1]));
console.log(hasNoDuplicates([1, 2, 3]));
function hasNoDuplicates(arr) {
  const validator = arr.every(function (v, k) {
    return arr.indexOf(v) === arr.lastIndexOf(v);
  });
  return validator;
}
// --------------------------------------------------
// 5. hasCertainKey
// --------------------------------------------------
// Write a function called hasCertainKey which accepts
// an array of objects and a key, and returns true if
// every single object in the array contains that key.
// Otherwise it should return false.
// ++++++++++++++++++++++++++++++++++++++++++++++++++
// let arr = [
//   {title: "Instructor", first: 'Elie', last:"Schoppik"},
//   {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
//   {title: "Instructor", first: 'Matt', last:"Lane"},
//   {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
// ]

// hasCertainKey(arr,'first') // true
// hasCertainKey(arr,'isCatOwner') // false
// ++++++++++++++++++++++++++++++++++++++++++++++++++
console.log('a:5 ---------------------------------');
let workFriends = [
  { title: 'Instructor', first: 'Elie', last: 'Schoppik' },
  { title: 'Instructor', first: 'Tim', last: 'Garcia', isCatOwner: true },
  { title: 'Instructor', first: 'Matt', last: 'Lane' },
  { title: 'Instructor', first: 'Colt', last: 'Steele', isCatOwner: true },
];
console.log(hasCertainKey(workFriends, 'first'));
console.log(hasCertainKey(workFriends, 'isCatOwner'));
function hasCertainKey(arr, key) {
  return arr.every(function (value, index) {
    return value[key];
  });
}
// --------------------------------------------------
// 6. hasCertainValue
// --------------------------------------------------
// Write a function called hasCertainValue which accepts
// an array of objects and a key, and a value, and
// returns true if every single object in the array
// contains that value for the specific key. Otherwise
// it should return false.
// ++++++++++++++++++++++++++++++++++++++++++++++++++
// let arr = [
//   {title: "Instructor", first: 'Elie', last:"Schoppik"},
//   {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
//   {title: "Instructor", first: 'Matt', last:"Lane"},
//   {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
// ]

// hasCertainValue(arr,'title','Instructor') // true
// hasCertainValue(arr,'first','Elie') // false
// ++++++++++++++++++++++++++++++++++++++++++++++++++
let classMates = [
  { title: 'Instructor', first: 'Elie', last: 'Schoppik' },
  { title: 'Instructor', first: 'Tim', last: 'Garcia', isCatOwner: true },
  { title: 'Instructor', first: 'Matt', last: 'Lane' },
  { title: 'Instructor', first: 'Colt', last: 'Steele', isCatOwner: true },
];
function hasCertainValue(array, key, value) {
  return array.every(function (value) {
    console.log(value);
  });
}
