// 2.	Найти самое маленькое число из массива [4, 81, 3, -12, 99, 14]

// 3.	Найти самое большое число из массива [4, 81, 3, -12, 99, 14]

// 4.	Найти сумму всех элементов массива [[1, 2], [3, 4, 5], [6, 7, 8]]


// ====================================================================================================================================================
// Name: Alex


// 2

let arr  = [4, 81, 3, -12, 99, 14];
console.log(Math.min(...arr));
// 3

console.log(Math.max(...arr));

// 4
let a = [[1, 2], [3, 4, 5], [6, 7, 8]] ;
let sum = 0;
a.forEach(x => {
    sum += x;
});
console.log(sum);

// ====================================================================================================================================================

// Name: Alina

2.//
const numbers = [4, 81, 3, -12, 99, 14];
const minNumber = Math.min(...numbers);
console.log(minNumber);

3.//

const numbers = [4, 81, 3, -12, 99, 14];
const maxNumber = Math.max(...numbers);
console.log(maxNumber); 

4.//

const nestedArray = [[1, 2], [3, 4, 5], [6, 7, 8]];
const sum = nestedArray.flat().reduce((acc, num) => acc + num, 0);
console.log(sum);

============================================================================================================

// Name: Maria

// 2.	Найти самое маленькое число из массива [4, 81, 3, -12, 99, 14]
const array = [4, 81, 3, -12, 99, 14];
let min = Number.MAX_SAFE_INTEGER; // 9007199254740991
if (array && array.length !== 0) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < min) {
      min = array[i]; 
    }
  }
  console.log('Самое маленькое число из массива' + min);
} else {
  console.log('Произошла какая-то ошибка');
}

// 3.	Найти самое большое число из массива [4, 81, 3, -12, 99, 14]
const array = [4, 81, 3, -12, 99, 14];
let max = Number.MIN_SAFE_INTEGER;
if (array && array.length !== 0) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  console.log('Самое большое число ' + max);
} else {
  console.log('Произошла какая-то ошибка, попробуйте еще раз');
}

// 4.	Найти сумму всех элементов массива [[1, 2], [3, 4, 5], [6, 7, 8]]
const array = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8],
];
let sum = 0;

const newArray = array.flat();
for (let i = 0; i < newArray.length; i += 1) {
  sum = newArray[i] + sum;
}
console.log(sum);