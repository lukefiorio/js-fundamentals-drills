/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray;

doubleArray = function(arr) {
  for (var i=0; i<arr.length; i++) {
    arr[i] = arr[i]*2;
  }
  return arr;
}
console.log(doubleArray([1,2,3]));

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Number}
 */
var sumArrays;

// making this global just in case I need it later;
function add(a,b) {
  return a+b;
}

sumArrays = function(arr1,arr2) {
  var sum1 = arr1.reduce(add);
  var sum2 = arr2.reduce(add);
  return sum1+sum2;
}
console.log(sumArrays([1,2,3],[11,12,13,14,15]));

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount;

stringCount = function(str) {
  return str.length;
}
console.log(stringCount('testing...'));


/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength;
arrayLength = function(arr) {
  return arr.length;
}
console.log(arrayLength([1,2]));

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll;

countAll = function(arr) {
  return arr.reduce(add);
}

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings;

countStrings = function (arr) {
  var strLenArr = [];
  for (var i=0;i<arr.length;i++) {
    strLenArr.push(arr[i].length);
  }
  return strLenArr;
}
console.log(countStrings(['str1','longer string','1','dunzo']));


/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {Array}
 * @return {Number}
 */
var countAllStrings;

countAllStrings = function(arr) {
  return countStrings(arr).reduce(add);
}
console.log(countAllStrings(['str1','longer string','1','dunzo']));

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray;

convertToArray = function(obj) {
  var valueArr = [];
  for (var i in obj) {
    valueArr.push(obj[i]);
  }
  return valueArr;
}

var testObj1 = {
  key1: 'test',
  key2: [1,2],
  key3: 5,
  key4: undefined
}
var testObj2 = {
  key21: 'eating',
  key22: [0,2],
  key23: null,
  key24: 7
}
var testObj3 = {
  key1: ['open','sesame'],
  key2: 3,
  key3: [0,-1],
  key4: 'silly'
}

console.log(convertToArray(testObj1));

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize;

objectSize = function(obj) {
  return convertToArray(obj).length;
}
console.log(objectSize(testObj1));

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Array}
 */
var createZeroFilledArray;

createZeroFilledArray = function(num) {
  var zeroArr = [];
  for (i=0; i<num; i++) {
    zeroArr.push(0);
  }
  return zeroArr;
}
console.log(createZeroFilledArray(5));

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray;

poppedArray = function(arr) {
  arr.pop()
  return arr;
}
console.log(poppedArray([1,2,3,4]));

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString;

splitString = function(str) {
  return str.split('');
}
console.log(splitString('testing...'));

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {Array}
 * @return {Number}
 */
var lengthOfLast;

lengthOfLast = function(arr) {
  return countStrings(arr)[arr.length-1];
}
console.log(lengthOfLast(['str1','longer string','1','dunzo']));

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen;

sumBelowTen = function(arr) {
  for (var i=0;i<arr.length;i++) {
    if (arr[i]>=10) {
      arr[i]=0;
    }
  }
  return arr.reduce(add);
}
console.log(sumBelowTen([1,2,3,10,11,12,-3]));

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {Array}
 * @return {Number}
 */
var moreThanTenLetters;

function cntItemsAboveVal(arr,num) {
  var cnt = 0;
  for (var i=0;i<arr.length;i++) {
    if (arr[i]>num) {
      cnt++;
    }
  }
  return cnt;
}

moreThanTenLetters = function(arr) {
  var strLenArr = countStrings(arr);
  return cntItemsAboveVal(strLenArr,10);
}
console.log(moreThanTenLetters(['really long string','shorter string','tiny','short']));


/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll;

multiplyAll = function(arr) {
  var prod = 1;
  for (var i=0;i<arr.length;i++) {
    prod*=arr[i];
  }
  return prod;
}
console.log(multiplyAll([2,3,-1,4]));

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {Array}
 * @return {Number}
 */
var sumAllPositive;

sumAllPositive = function(arr) {
  for (var i=0;i<arr.length;i++) {
    if (arr[i]<0) {
      arr[i]=0;
    }
  }
  return arr.reduce(add);
}
console.log(sumAllPositive([1,2,3,10,11,-5,-3]));

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree;

stringCountBelowThree = function(arr) {
  var strLenArr = countStrings(arr);
  var cntLenOver3 = cntItemsAboveVal(strLenArr,3);
  return strLenArr.length-cntLenOver3;
}
console.log(stringCountBelowThree(['long','too','one','2','11']));

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects;

countObjects = function(arr) {
  return arr.length;
}
console.log(countObjects([testObj1,testObj2,testObj3]));


/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys;

getObjectKeys = function(obj) {
  var keyArr = [];
  for (var i in obj) {
    keyArr.push(i);
  }
  return keyArr;
}

console.log(getObjectKeys(testObj1));

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues;

getObjectValues = function(arr) {
  return convertToArray(arr);
}

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject;

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObjectReverse;

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject;

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse;

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys;

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues;

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys;

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray;

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject;

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject;

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples;

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues;

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts;

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums;

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys;

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap;

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Object}
 */
var frequencyMap;

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Object}
 */
var tupleConvertToObject;


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays,
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
}
