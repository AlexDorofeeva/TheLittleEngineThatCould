// 6.	Переделайте задачку с улиткой используя циклы
// Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, 
// а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползет до вершины стены.


// ====================================================================================================================================================
// Name: Pavel Sht

const heightWall = 5;
const climbPerDay = 3;
const slidePerNight = 2;

let result = 0;
let day = 1;

while (result < (heightWall - climbPerDay)){
    day++;
    result = result + climbPerDay - slidePerNight;
}
console.log(`Улитка подниметься за ${day} дня`)














// // ====================================================================================================================================================
// // Name: Alina

// let wall = 5; // Высота 
// let climbPerDay = 3; // Улитка поднимается за день
// let slidePerNight = 2; // Улитка сползает за ночь

// for (let position = 0, days = 1; ; days++) {
//     position += climbPerDay; // Улитка ползёт вверх

//     if (position >= wall) { // Если достигла 5 метров, то выводим ответ. Если нет, то производим следующее действие ниже
//         console.log(days);
//         break;
//     } 

//     position -= slidePerNight; // Улитка сползает вниз ночью

    
// }

// // ====================================================================================================================================================
// // Name: Slava

// let wallHeight = 5;
// let dayUpDistance = 3;
// let nightDownDistance =2;
// let days = 0;
// let distance = 0;

// for (let i = 0; i < wallHeight; i++) {
//     days++;
//     distance += dayUpDistance;
//     if (distance < wallHeight) {
//         distance -= nightDownDistance;
//     } else {
//         console.log(days);
//         break;
//     }
// }

// // ====================================================================================================================================================
// // Name: 

