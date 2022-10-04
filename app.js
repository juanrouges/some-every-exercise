// ==================================================
// >>>>>>>>>>>>>>>>>>>> Some <<<<<<<<<<<<<<<<<<<<<<<<
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
const numsRowOne = [1,2,2,2,2,2,4];
const numsRowTwo = [2,2,2,2,2,4];
console.log(hasOddNumber(numsRowOne));
console.log(hasOddNumber(numsRowTwo));
function hasOddNumber(arr) {
  const validation = arr.some(function(value, index) {
    return value % 2 !== 0;
  })
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
  const validation = [...num.toString()].some(function(value, index) {
    return value === '0';
  })
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
const luckyNums = [1,3,5,7];
const unLuckyNums = [1,2,3,5,7];
console.log(hasOnlyOddNumbers(luckyNums));
console.log(hasOnlyOddNumbers(unLuckyNums));
function hasOnlyOddNumbers(array) {
  const validation = array.some(function(value, index, array) {
    return value % 2 === 0;
  })
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
console.log(hasNoDuplicates([1,2,3,1]));
console.log(hasNoDuplicates([1,2,3]));
function hasNoDuplicates(arr) {
  const validator = arr.every(function(v, k) {
     return 
  })
}

function hasNoDuplicates(arr){
  return arr.every(function(val){
    return arr.indexOf(val) === arr.lastIndexOf(val);
  });
}
