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

<<<<<<< HEAD:js homework team/homework 4/4_234.js




// ====================================================================================================================================================
// Name: 
=======
const nestedArray = [[1, 2], [3, 4, 5], [6, 7, 8]];
const sum = nestedArray.flat().reduce((acc, num) => acc + num, 0);
console.log(sum);
>>>>>>> Alina:js homework team/4.(2,3,4).js
