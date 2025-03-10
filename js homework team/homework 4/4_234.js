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

// ====================================================================================================================================================

// Name: Slava

// 2 Найти самое маленькое число из массива
const arr = [4, 81, 3, -12, 99, 14];

let min = Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log('min =', min);

// 3 Найти самое большое число из массива
const arr = [4, 81, 3, -12, 99, 14];

let max = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log('min =', max);

// 4 Найти сумму всех элементов массива
const arr = [[1, 2], [3, 4, 5], [6, 7, 8]];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
}

console.log(sum);

// ====================================================================================================================================================
// Name: Mart

// const arr = [4, 81, 3, -12, 99, 14]
// console.log(Math.min(...arr));
// const arr2 = [4, 81, 3, -12, 99, 14]
// console.log(Math.max(...arr2));
// const arr3 = [[1, 2], [3, 4, 5], [6, 7, 8]]
// let sum = 0;
// for (let i = 0; i < arr3.length; i++) {
//     const arr4 = arr3[i];
//     for (let j = 0; j < arr4.length; j++) {
//         // console.log(sum);
//         sum+=arr4[j]
//     }
    
// }
// ====================================================================================================================================================
