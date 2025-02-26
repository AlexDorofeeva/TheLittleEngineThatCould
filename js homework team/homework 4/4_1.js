// 1.	Задача с интервью*

// У вас есть массив со скобками 
// Количество элементов и последовательность может быть разной.
// Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
// Решение должно работать для всех массивов внизу.

// Первая последовательность: [ '(', ')', '(', ')', ')']
// Вторая последовательность:  ['(', ')', '(', ')', '{', '(', '}', ')', 2, 'a']
// Еще: ['(', ')', '(', '(', '(', ')', '}', '(', ')', ')']


// ====================================================================================================================================================
// Name: Pavel Sht
let arr = [ '(', ')', '(', ')', ')']
// let arr = ['(', ')', '(', ')', '{', '(', '}', ')', 2, 'a']
// let arr = ['(', ')', '(', '(', '(', ')', '}', '(', ')', ')']

let parenthesesCounter = 0;
let bracketsCounter = 0;
let braceCounter = 0;

for (let i=0; i < arr.length; i++){
  switch(arr.length[i]){
    case '(':
      parenthesesCounter++;
      break;
    case ')':
      parenthesesCounter--;
      break;
    case '[':
      bracketsCounter++;
      break;
    case ']':
      bracketsCounter--;
      break;
    case '{':
      braceCounter++;
      break;
    case '}':
      braceCounter--;
      break;
  }
}


if (parenthesesCounter === braceCounter === bracketsCounter === 0){
  console.log('У каждой скобки есть закрывающая пара')
}else{
  console.log('Не у всех скобок есть закрывающие пары')
}











// ====================================================================================================================================================
// Name: Slava

// const arr = [ '(', ')', '(', ')', ')'];
// const arr = ['(', ')', '(', ')', '{', '(', '}', ')', 2, 'a'];
// const arr = ['(', ')', '(', '(', '(', ')', '}', '(', ')', ')'];

// let count1 = 0;
// let count2 = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === '(') count1++;
//   if (arr[i] === ')') count1--;
//   if (arr[i] === '{') count2++;
//   if (arr[i] === '}') count2--;  
// }

// if (count1 === 0 && count2 === 0) {
//   console.log('у каждой скобки есть соответствующая пара');
// }

// if (count1 != 0) {
//   console.log('у круглой скобки нет соответствующей пары');
// }


// if (count1 != 0) {
//   console.log('у фигурной скобки нет соответствующей пары');
// }

// if (count1 != 0) {
//   console.log('у фигурной скобки нет соответствующей пары');
// }
// ====================================================================================================================================================
// Name: Mart

/*
Hello, my name is Mart
*/
let i = 0;
while (true) {
    i++
    console.log("my name is Mart" +i);
    
}


// ====================================================================================================================================================
// Name: Deniz

hello