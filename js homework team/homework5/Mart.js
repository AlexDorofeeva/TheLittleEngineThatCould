
//  [READY] _______________________ HOME WORCK 5 ____________________________________
{
  /*Материал к прочтению:
  
  Циклы
  https://www.w3schools.com/js/js_loop_while.asp  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while  
  https://learn.javascript.ru/while-for  (секция о цикле “while” и “do…while”)
  */
  /*
  Задачки:
  
  1.	Нарисуйте треугольник с цифрами - вниз
  
  9 8 7 6 5 4 3 2 1 0 1 2 3 4 5 6 7 8 9
    8 7 6 5 4 3 2 1 0 1 2 3 4 5 6 7 8
      7 6 5 4 3 2 1 0 1 2 3 4 5 6 7
        6 5 4 3 2 1 0 1 2 3 4 5 6
          5 4 3 2 1 0 1 2 3 4 5
            4 3 2 1 0 1 2 3 4
              3 2 1 0 1 2 3
                2 1 0 1 2
                  1 0 1
                    0
  */
  // let triangle = '';
  // for (let i = 9; i >= 0; i--) {
  //   let str = ''
  //   for (let j = i; j >= 0; j--) {
  //     str +=j;
  //   }
  //   str = str.padStart(10," ")
  //   for (let j = 1; j <= i; j++) {
  //     str +=j;
  //   }
  //   triangle+=str+'\n'
  // }
  // console.log(triangle);

  /*
  2.	Нарисуйте ромб из цифр (будьте внимательны!)
           1
          121
         12321
        1234321
       123454321
      12345654321
     1234567654321
    123456787654321
   12345678987654321
  1234567890987654321
   12345678987654321
    123456787654321
     1234567654321
      12345654321
       123454321
        1234321
         12321
          121
           1
  
  */
  //Вариант 1
  // console.log(`
  //          1
  //         121
  //        12321
  //       1234321
  //      123454321
  //     12345654321
  //    1234567654321
  //   123456787654321
  //  12345678987654321
  // 1234567890987654321
  //  12345678987654321
  //   123456787654321
  //    1234567654321
  //     12345654321
  //      123454321
  //       1234321
  //        12321
  //         121
  //          1 
  //   `);
  // let n = 15;

  //   // Верхняя часть ромба
  //   for (let i = 1; i <= n; i++) {
  //       let spaces = " ".repeat(n - i); // Отступы слева
  //       let numbers = "";

  //       // Возрастающая часть строки
  //       for (let j = 1; j <= i; j++) {
  //           numbers += j % 10; // Добавляем цифру (остаток от деления на 10 для 0)
  //       }

  //       // Убывающая часть строки
  //       for (let j = i - 1; j >= 1; j--) {
  //           numbers += j % 10;
  //       }

  //       console.log(spaces + numbers);
  //   }

  //   // Нижняя часть ромба
  //   for (let i = n - 1; i >= 1; i--) {
  //       let spaces = " ".repeat(n - i); // Отступы слева
  //       let numbers = "";

  //       // Возрастающая часть строки
  //       for (let j = 1; j <= i; j++) {
  //           numbers += j % 10;
  //       }

  //       // Убывающая часть строки
  //       for (let j = i - 1; j >= 1; j--) {
  //           numbers += j % 10;
  //       }

  //       console.log(spaces + numbers);
  //   }


  // // Вызов функции с высотой ромба (количество строк в верхней части)



  // let arrStr = []
  // for (let i = 1; i < 10; i++) {
  //   arrStr.push(i)

  // }
  // console.log(arrStr);





  // let a = `
  //          1
  //         121
  //        12321
  //       1234321
  //      123454321
  //     12345654321
  //    1234567654321
  //   123456787654321
  //  12345678987654321`

  // console.log(a.split("").reverse().join(""));


  /*
  3.	Сложнее*: Нарисуйте горизонтальный треугольник из цифр
  
  1  
  2 3
  4 5 6
  7 8 9 10
  11 12 13 14 15
  */


  // let lustNum = 0
  // let str2 = ''
  //   for (let i = 0; i <= 5; i++) {
  //     let str = '';
  //     for (let j = 0; j < i; j++) {
  //       lustNum++
  //       str += lustNum
  //     }
  //     // console.log(str);
  //      str2+=str+'\n'
  //   }

  //   console.log(str2);


  /*
  4.	Сложно, на смекалку: Нарисуйте вертикальный треугольник из цифр
  
  
  1
  2 7 
  3 8  12 
  4 9  13 16 
  5 10 14 17 19
  6 11 15 18 20 21
  */


  // let hieght = 6;
  // let str = '';
  // for (let i = 1; i <= hieght /*height */; i++) {
  // let startNum = i;// номер текущая строка
  //  str=startNum // номер текущая строка
  //   for (let j = 1; j < i; j++) {
  //     startNum= Number(startNum +hieght-j)// hieght-1  4 3 2 1
  //     str+= String(startNum)
  //   }
  //   console.log(str);
  // }

  // let str = '';
  // for (let i = 1; i <= 6 /*height */; i++) {
  // // let startNum = i;// номер текущая строка
  //  str=startNum // номер текущая строка
  //   for (let j = 1; j < i; j++) {
  //     startNum= Number(i +6-j)// hieght-1  4 3 2 1
  //     str+= String(i)
  //   }
  //   console.log(str);
  // }


  // // решение GPT
  // function drawVerticalTriangle(rows) {
  //   // let currentNumber = 1;
  //   let result = '';

  //   for (let i = 1; i <= rows; i++) {
  //       let num = i;
  //       let step = rows - 1;
  //       let line = '';

  //       for (let j = 1; j <= i; j++) {
  //           line += num + ' ';
  //           num += step;
  //           step--;
  //       }

  //       result += line.trim() + '\n';
  //   }

  //   return result;
  // }

  // console.log(drawVerticalTriangle(6));

  /*
  5.	Креативное задание 1*
  
  Имеется зашифрованное предложение 
  
  “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”
  
  Мы знаем, что оно означает “You are the best QA ever”.
  Нам нужно придумать программу дешифратор.
  */

  // let encryptedMessadge = 'Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr';
  // let decodedMessadge = '';
  // decodedMessadge = encryptedMessadge.replaceAll('br','')
  // console.log(decodedMessadge);
  // console.log(decodedMessadge == 'You are the best QA ever');


  /*
  
  
  6.	Креативное задание 2* (посложнее)
  
  Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему
  */
  // const alphabet = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я','А', 'Б', 'В', 'Г']
  //   const miniAlphabet= ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я','а', 'б', 'в', 'г'];
  // //coder
  // const step = 4;
  // let messs = 'Это шифр Цезаря. Он заменяет буквы с определенным шагом!';
  // let codedMessadge ='';
  // for (let i = 0; i < messs.length; i++) {
  //   let a = alphabet.indexOf(messs[i]);
  //   let b =  miniAlphabet.indexOf(messs[i]);
  //   a !== -1 ? codedMessadge+=alphabet[a+step] : 
  //   b !== -1 ? codedMessadge+=miniAlphabet[b+step] : codedMessadge+=messs[i];  
  // }
  // console.log(codedMessadge); 
  // //decoder
  // const alphabet2 = alphabet.reverse();
  // const miniAlphabet2= miniAlphabet.reverse();
  // let testStr = codedMessadge;
  // let decodedMessadge ='';
  // for (let i = 0; i < testStr.length; i++) {
  //   let a = alphabet2.indexOf(testStr[i]);
  //   let b =  miniAlphabet2.indexOf(testStr[i]);
  //   a !== -1 ? decodedMessadge+=alphabet2[a+step] : 

  //   b !== -1 ? decodedMessadge+=miniAlphabet2[b+step] : decodedMessadge+=testStr[i];  
  // }
  // console.log(decodedMessadge); 




  /*
  7.	Какой результат работы кода и почему? Выберите один ответ.
    Варианты ответов:
  a.	Цикл будет выполняться, но пропустит элементы массива.
  b.	Цикл завершится с ошибкой, так как "for...in" не предназначен для работы с массивами.
  c.	Цикл выполнится успешно, перебирая все элементы массива.
  d.	Цикл выполнится успешно, но пропустит первый элемент массива.
    */
  //   let myArray = ["apple", "banana", "orange"];
  // for (let index in myArray) {
  //     console.log(myArray[index]);
  // }
  /*
  
  
  // Поиск самого популярного фильма
  // const movies = [ "Интерстеллар", "Мстители", "Интерстеллар", "Начало", "Мстители", "Матрица", "Интерстеллар" ]
  // Массив с любимыми фильмами от пользователей. Программа должна напечатать, какой фильм был выбран чаще всего.
  
  const movies = ["Интерстеллар", "Мстители", "Интерстеллар", "Начало", "Мстители", "Матрица", "Интерстеллар", "Начало", "Начало", "Начало",];
  const uniqueArray = ['Интерстеллар', 'Мстители', 'Начало', 'Матрица']
  
  
  // let indexPopularFilm = 0;
  // let a = 0;
  
  // for (let i = 0; i < uniqueArray.length; i++) {
  
  //     let countFilm = 0;
  
  //     for (let j = 0; j < movies.length; j++) {
  //         if (uniqueArray[i] == movies[j]) {
  //             countFilm++;
  //         }
  //     }
  
  //     if (countFilm > a) {
  //         a = countFilm;
  //         indexPopularFilm = i;
  //     }
  // }
  // console.log(uniqueArray[indexPopularFilm]);
  */
}
//_______________________ CODEWARS____________________________________
{


  // https://www.codewars.com/kata/5932c94f6aa4d1d786000028 
  // let n = 256;
  // let b = 
  // Math.pow(n, 1/2)-Math.trunc(Math.pow(n, 1/2)) == 0 
  // && Math.pow(n, 1/4)-Math.trunc(Math.pow(n, 1/4)) == 0 
  //  &&  Math.pow(n, 1/8)-Math.trunc(Math.pow(n, 1/8))== 0 ;
  // console.log(b);


  // // https://www.codewars.com/kata/570bcd9715944a2c8e000009 


  // // https://www.codewars.com/kata/5b4e779c578c6a898e0005c5 
  // function drawStairs(n) {
  //   let ladder = ''
  //   for (let i = 0; i < n; i++) {
  //     let str = ''
  //     str+=str.padEnd(" ", i)+"I\n"
  //     ladder+=str
  //   }
  //   return ladder
  // }





  // // https://www.codewars.com/kata/5601409514fc93442500010b 

  // function betterThanAverage(classPoints, yourPoints) {
  //   let sum = 0;
  //    for (let i = 0; i < classPoints.length; i++) {
  //    sum+=classPoints[i]
  //    }
  //    return ((sum+yourPoints)/classPoints.length)>yourPoints ? false : true
  //  }




  // // https://www.codewars.com/kata/5648b12ce68d9daa6b000099 
  // var number = function(busStops){
  //   let count = busStops[0][0];
  //   for (let i = 1; i < busStops.length; i++) {
  //     count+= busStops[i][0]-busStops[i][1]

  //   }
  //   return count
  // }




  // https://www.codewars.com/kata/57a2013acf1fa5bfc4000921 
  // Напишите функцию, которая вычисляет среднее значение чисел в заданном массиве. Примечание: пустые массивы должны возвращать 0.

  // function findAverage(array) {
  //   let res = 0;
  //   let i = 0;
  //   for (const element of array) {
  //     res+=element
  //     i++
  //   }
  //   return array.length ? res/i : 0 ;
  // }
  // console.log(0/1);


  // https://www.codewars.com/kata/58acfe4ae0201e1708000075 
  //ready

  // https://www.codewars.com/kata/5265326f5fda8eb1160004c8 
  //ready
  // https://www.codewars.com/kata/544675c6f971f7399a000e79 
  //ready


  // https://www.codewars.com/kata/572af273a3af3836660014a1 
  //          0(0.1) 1(0.1.2.3) 2(0.1.2.3)
  // let arr = [[1,2,3],[4,5,6],[7,8,9]];
  // let d = "right";
  // let n = 2;

  // switch (d) {
  //     case 'left':
  //       let j1 = 0;
  //       for (const key in arr) {
  //         for (let i = 0; i < n; i++) {
  //           arr.at(-1 + j1).push(arr[key].shift())
  //         }
  //         j++
  //       }
  //       break;
  //     case 'right':
  //       for (let j = -1; j < arr.length-1; j++) {
  //         for (let i = 0; i < n; i++) {
  //           arr.at(j+1).unshift(arr.at(j).pop())
  //         }  
  //       }
  //       break;
  //   }
  // JSON.stringify(arr)
  // for (const key in arr) {
  //   let elem = 0;
  //   for (let i = 0; i < n; i++) {
  //     elem = arr[key].pop()
  //     arr.at(j).unshift(elem)
  //   }  //тык
  //   j--
  // }

  // console.log(JSON.stringify(arr));
  // function infiniteLoop(arr, d, n) {
  //   for (let i = 0; i < n; i++) {
  //     if (d === "left") {
  //       // Remove the first element from the first array
  //       let firstElement = arr[0].shift();

  //       // Rotate elements within each array
  //       for (let j = 0; j < arr.length - 1; j++) {
  //         arr[j].push(arr[j + 1].shift());
  //       }

  //       // Add the initially removed element to the last array
  //       arr[arr.length - 1].push(firstElement);
  //     } else if (d === "right") {
  //       // Remove the last element from the last array
  //       let lastElement = arr[arr.length - 1].pop();

  //       // Rotate elements within each array
  //       for (let j = arr.length - 1; j > 0; j--) {
  //         arr[j].unshift(arr[j - 1].pop());
  //       }

  //       // Add the initially removed element to the first array
  //       arr[0].unshift(lastElement);
  //     }
  //   }

  //   return arr;
  // }

  // function threeInOne(arr){

  //  return arr1 
  // }

  // https://www.codewars.com/kata/572cb264362806af46000793 
  //skip
  // https://www.codewars.com/kata/572df796914b5ba27c000c90 
  //skip
  // https://www.codewars.com/kata/57f24e6a18e9fad8eb000296 

  // let nbPetals = 6;
  // let res = '1'
  // let count = nbPetals < 6 ? nbPetals : nbPetals % 6 === 0 ? 6 : nbPetals % 6



  // console.log(count);

  // switch (count) {

  //   case 1:
  //     res = "I love you"

  //     break;
  //   case 2:
  //     res = "a little"
  //     break;
  //   case 3:
  //     res = "a lot"
  //     break;
  //   case 4:
  //     res = "passionately"
  //     break;
  //   case 5:
  //     res = "madly"
  //     break;
  //   case 6:
  //     res = "not at all"

  //     break;
  //   default:
  //     break;
  // }

  // console.log(res);
  // https://www.codewars.com/kata/56b29582461215098d00000f 
  //     let number = [1, 2, 3, 12];
  //   let newArr = [number[0]];

  // console.log(typeof newArr);
  //       while (newArr.at(-1) < number.at(-1)) {
  //         newArr.push(newArr.at(-1) + 1)
  //       }


  // https://www.codewars.com/kata/5413759479ba273f8100003d 
  // let newArr = []
  // for (let i = array.length; i >=0 ; i++) {
  //   newArr.push(arr.pop())

  // }
  // return
  // https://www.codewars.com/kata/515e271a311df0350d00000f 
  //   let sum = 0;
  // for (const element of numbers) {
  //   sum+= element**2
  // }
  // return sum
  // https://www.codewars.com/kata/5715eaedb436cf5606000381 
  // let sum=0;
  // for (const element of arr) {
  //   element>0 ? sum+=element : sum
  // }
  // return sum


  // https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3 

  // let sum=0;

  // let input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // for (const element of input) {
  //   element % 2 ? 0: console.log(element);

  // }
  // return sum
  // https://www.codewars.com/kata/53dc54212259ed3d4f00071c 
  //check

  // https://www.codewars.com/kata/56f69d9f9400f508fb000ba7 

  // let ar = [];
  // for (let i = 1; i < n; i++) {
  //   ar[i]=i

  // }

  //   // https://www.codewars.com/kata/571d42206414b103dc0006a1 

  //   let ar = [];
  //   for (let i = 1; i < n; i++) {
  //     ar[i]=i

  //   }


}

{//______________________________REVIEW YULIA__________________________________________  
  // let arr = [];
  // let h = 5;
  // for (let i = 0; i < h; i++) {
  // for (let j = 0; j < h; j++) {
  //   i == j ? arr[i][j]=0 : arr[i][j]=1
  //   console.log(arr);
  // }  
  // }
  // console.log(arr);
  let abc = "!@# $%^&* ()_+-=`~ЙЦУК ЕНГШЩЗ ХЪЭЖДЛОРП АВЫФЯЧСМИ ТЬБЮ ,.?/юбь тимсч яфывапрол джэ ъхзщшгнек уцйAB CDEF GHIJKLMNO PQRSTUVW XYZabcd efghi jklmno pq rstuvwxyz01 2345 67 89"



  // // Math.random()
  // // let arr = [1,2,3,4,5]
  // let str = '';
  // let randomLength = Math.random() * abc.length
  // for (let i = 0; i < randomLength; i++) {
  //   let a = Math.random() * abc.length
  //   str += abc[Math.floor(a)]
  // }

  // console.log(str.trim());



  // let day = ["вторник", "Среда", "четверг", "Понедельник", "пятница", "доп выходной", "новый год", "воскресенье"];
  // let dayReal = ['понедельник', 'вторник', "среда", "четверг", "пятница", "суббота", "воскресенье"]
  // let newArr = [];
  // for (const element of day) {

  //   switch (element) {
  // case "o":
  //   break;
  //     case "Понедельник":
  //       let str = '';
  //       let randomLength = Math.random() * day[i].length

  //       for (let i = 0; i < randomLength; i++) {
  //         let a = Math.random() * day[i].length
  //         str +=  day[i][Math.floor(a)]
  //       }

  //       console.log(str.trim());


  //       break;
  //     case "Среда":
  //       let c = Math.random() * 10
  //       console.log(c + " сегодня среда");
  //       break;
  //     default:
  //       break;
  //   }
  // }
  // // console.log(newArr);

  // let a= "asdfasdfasdf";
  // let c= true;
  // do {
  //   console.log("Идет ");
  //   for (let i = 0; i < a.length; i++) {
  //    console.log(a[i]);
  //   }
  //  c=false
  // } while ( a.length < 2);
  // let x = (Math.random());
  // let c = (-x*10)*((-1)**Math.floor(Math.random()*3)) // 0-1   
  // let b ;
  // x > 3 && x < 10 ? b = "yes": b = "nope"
  // // console.log(x);
  // // console.log(c);
  // for (let index = 0; index < 50; index++) {
  //   console.log(Math.floor(Math.random()*1));
  //   console.log((-1) ** (Math.floor(Math.random()*3))  );
  //   console.log("_____________");
  // }
  // let arr = [1, 3, 4]
  // let a = [1,3,4]

  // console.log(...arr, ...a);
  // function rand() {
  //   let a = 0;
  //   if (Math.random() > 0.5) {
  //     a = -1
  //   } else {
  //     a = 1
  //   }
  //   return a
  // }


  // console.log(rand());
}

//_______________________ HOME WORK FROM YULIA ____________________________________

{

  // Исправить ошибки в коде, если они есть (* - написать, что делает этот кусок кода):

  // __________________________
  // console.log("Hi)")

  // ___________________________
  // let string = 9
  // console.log(string)

  // ___________________________

  // /let string = 9567г6г
  // /console.log(string[1])

  // __________________________
  // let string = "dderfref"
  // console.log(string.replace("d",d))

  // ___________________________

  // const ar = 7
  // console.log(ar * 3)
  // ar = 6
  // console.log(`Text ${ar}`)

  // __________________________________
  // if ("test" == "text"){
  //     console.log("true")
  // } else if{
  //     console.log("false")
  // } else if ("test" == "rteest"){
  //     console.log(" it is true")
  // } else{
  //     console.log("text")
  // }
  // ____________________________
  // for (let i = 1; i <= 9; i++) {
  // 	for (let j = 1; j  <= 3; j++) {
  //     console.log("test");
  //   }
  // }

  // _____________________________




  // //r = 0
  // switch (r) {
  //     case 0:
  //         console.log("1")
  //         break
  //     case 2
  //         console.log("2")
  //     default:
  //         console.log("def")
  // }
  // _____________________________________

  // let arr2 = ['12','12','2222']
  // if (arr2[0] === 12){
  //     arr2.shift()
  //     console.log("первый элемент удален")
  // } else if (arr2[1] == 12){
  //     arr2.pop()
  //     console.log("последний элемент удален")
  // } else {
  //     arr2[0] = "string"
  //     console.log("замена на строку")
  // }
  // console.log(arr2)



  //   let pass = "Wedwf%3_g&";
  // let passInsert = 'Wddwf%6_g&';
  // let symbolPassRight = pass.split('');
  // let symbolPassInsert = passInsert.split('');
  // let countErr = 0
  // let symErr = ''
  // for (const i in pass) {
  //   symbolPassRight[i] !== symbolPassInsert[i] ? (countErr++ , symErr+=(symbolPassInsert[i])+",") : 0
  // }
  //   if (countErr > 0) {
  //     console.log(`Вы сделали ${countErr} ошибок, в этих символах ${symErr}`);
  //   } else {
  //     console.log("All okey!!");
  //   }
  // let pass = "Wedwf%3_g&";
  // let passInsert = 'Wdw%3_g&'
  // let mess = pass == passInsert ? 'Good pass' : "Хухупс, вы допустили ошибку"
  // console.log(mess);



  // Задачи:
  // //1// У пользователя сгенерирован пароль (например, Wedwf%3_g&  // можно задать свое значение). При вводе пароля пользователь допустил ошибку. 
  // Нужно сообщить пользователю, что пароль введен правильно при введении правильного пароля либо выдать сообщение об ошибке, если пароль введен неверно

  // //1_1// Сообщение об ошибке включает в себя количество сделанных ошибок



  // //1_2//  Сообщение об ошибке включает в себя количество сделанных ошибок + какие символы были введены неправильно

  // //1_3// Для варианта “1_2” вывод в консоль будет следующим:
  // - номер элемента 1 строки: значение неправильно введенного элемента
  // - номер элемента 2 строки: значение неправильно введенного элемента
  // …
  // - номер элемента 3 строки: значение неправильно введенного элемента


  // Т.е. указание ошибки идет каждый раз с новой строки для каждого элемента строки


  // //1_4// Для условия //1// запросить ввод пароля N -раз (например, N=3, можно задать свое значение). После N-раз введенных попыток выводить сообщение о том, что пользователь исчерпал все свои попытки
  // //1_4_0//  Для //1_4//  Если пользователь ввел пароль верно, когда у него осталась только одна попытка вывести сообщении “Все же успел ввести правильно ))”
  // //1_4_1// Для //1_4//  выводить информацию пользователю какой по счету раз запрошен ввод пароля
  // //1_4_2// Для //1_4_1// + выводить информацию пользователю какое количество попыток у него осталось (N - количество раз уже введенного пароля )  
  // //1_4_3// Для //1_4_1// Если пользователь ввел пароль правильно, то значение N должно восстанавливаться обратно (Т.е. пользователь ввел пароль неверно 2 раза и осталась только одна попытка, то при вводе правильного пароля N заново будет равно 3 
  // (либо заданному вами ранее ограничению) и ввод пароля продолжится учитывая вывод текста в //1_4_0// - если было добавлено)
  // //1_4_4// Добавить запрос для пользователя  - хочет ли он продолжить ввод пароля. Если да - цикл продолжается (!без изменения по количеству попыток ввода, просто возможность завершить цикл)
  // Если нет - завершаем цикл

  // //1_4_5// Для //1_4_4// При любом решении пользователя  вывести дополнительно сообщение сколько раз он уже вводил пароль
  // //1_4_6// Для //1_4_5// Если пользователь отказался продолжать вводить пароль дальше, то вывести сообщением сколько у него еще оставалось попыток для ввода пароля

  // //1_4_7// Для //1_4_6// Дополнительно вывести сколько раз пароль был введен верно и сколько раз пароль был введен неправильно

  // //1_4_8*// Вывести массив содержащий все комбинации, введенные неверно
  // //1_4_8*_1//Вывести массив содержащий все комбинации, введенные неверно, но если перед этим пользователь ввел пароль корректно, то не выводить некорректные варианты до правильного ввода. 
  // Т.е. пользователь ввел:
  // wer
  // wrerg
  // 34r4
  // fdwge
  // 45
  // erfr
  // 345
  // r4r
  // 44
  // 45t
  // где, erfr было правильным значением, в массиве выводим все после этого значения. При каждом следующем введении правильного пароля предыдущие неправильные варианты забываем

  // *** Реализовать “помощь зала” для пользователя )))
  // В зависимости от того, сколько раз пользователь верно вводил пароль он получает возможность запросить любой символ данное количество раз.
  // Т.е. Пользователь правильно ввел пароль 2 раза, т.е. два раза он может попросить подсказать любой символ:
  // После завершения блока с подсказкой цикл ввода пароля продолжается))


  // Подводящие задачи:
  // //8_1// - После неверного ввода пароля запрашивать сообщение - нужна ли подсказка если пользователь ранее ввел пароль хотя бы один раз 
  // //8_2// + Вывести в консоль первый символ пароля 
  // //8_3// + Спрашивать пользователя нужны ли ему подсказки далее, если да, то выводить следующий элемент
  // Т.е. у пользователя было 3 верно введенных пароля ранее, и сейчас он ввел пароль некорректно и запросил помощь. Тогда в консоли будет следующее (например, пароль был “dfgt45gt”):
  // d
  // //если пользователь попросил еще раз помощи, то
  // df 
  // // и т.д
  // Как только количество подсказок исчерпано - выводим текст “Количество попыток исчерпано”
  // !!Если пользователь отказался от подсказки - продолжаем цикл с вводом пароля

  // **** Реализовать блок, чтобы запросить у пользователя конкретный номер символа строки, который он хочет узнать, т.е. пароль “sfgerg34” - содержит 8 символов, а пользователь может запросить любой 
  // (!ключевой момент - могу запросить любой номер)))) и в зависимости от этого вывести конкретный символ в консоль
  // !! учесть, что пользователь считает начиная с 1




  // * Реализовать ошибку))
  // На любой случайной попытке может произойти вылет из цикла 
  // Вывести в этом случае пользователю сообщение об ошибке

  // //9_1// дополнительно вывести в консоль какое количество ошибок было сделано, какок количество правильных вариантов было введено и запрошено количество подсказок (если было реализовано)

  // ** Реализовать ошибку v2))

  // Задать любой символ (например, ? - может быть любое число либо строка, нет ограничения)
  // Добавить проверку на наличие этого элемента в ответе пользователя (неважно есть ли этот элемент в пароле пользователя)
  // Если данный элемент содержится в строке - вылет из цикла с сообщением “Сбой в системе”


  // **** Для создания программы более интересной можно в последствии добавить следующие моменты:


  // ** Задание пароля, номера для вылета из цикла (ошибка) символа для вылета из цикла (ошибка v2) сделать  с вводом из клавиатуры

  // *** Задание пароля, номера для вылета из цикла (ошибка) символа для вылета из цикла (ошибка v2) сделать  рандомным)

  // *** Сохранять введенные подсказки для пользователя))т.е. если пользователю был показан 1,4 элемент, то далее пароль он должен вводить без этих символов 
  // Т.е. в ответ пользователя программа сама будет подставлять нужные элементы на нужную позицию. 
  // Начать в этом случае можно для варианта //8_3// где идет последовательный вывод элементов от 0-го символа

  //____________ТЗ ОТ ЧАТА ГПТ________________________________
  /*
  Вот как может выглядеть техническое задание (ТЗ) для реализации описанного функционала пароля на JavaScript:
  
  ---
  
  ### Техническое задание: Реализация функционала пароля
  
  #### Цель
  Создать функциональность для обработки вводимого пользователем пароля с соблюдением набора требований. Условия включают проверку корректности ввода, подсчёт ошибок, предоставление подсказок, а также механизмы выхода и восстановления работы программы.
  
  #### Основные задачи и требования
  
  1. **Проверка пароля**
     - Сравнивать введённый пароль с заданным. При совпадении выводить сообщение об успешном вводе. Иначе выдавать сообщение об ошибке.
     - Ведём учёт количества ошибок.
  
  2. **Детализация ошибок**
     - Указывать количество сделанных ошибок, а также неправильно введённые символы с их индексацией.
  
  3. **Лимит попыток**
     - Разрешить пользователю не более N попыток ввода. После исчерпания попыток выводить сообщение об этом.
  
  4. **Обработка последней попытки**
     - В случае правильного ввода на последней попытке выводить особое сообщение о своевременности.
  
  5. **Информирование**
     - Показывать пользователю текущую попытку и оставшиеся попытки.
  
  6. **Сброс попыток**
     - Сбрасывать количество оставшихся попыток до начального значения при успешном вводе пароля.
  
  7. **Запрос продолжения**
     - Предоставить пользователю возможность продолжить ввод или завершить цикл.
  
  8. **Анализ ввода**
     - Сообщать, сколько раз пароль был введён, включая информацию о правильных и неправильных вводах, а также сохранить все неправильные комбинации в массив.
  
  9. **Механизм подсказок**
     - Позволить пользователю запрашивать символы пароля в качестве подсказки, основываясь на количестве ранее успешных вводов.
  
  10. **Случайные ошибки**
      - Реализовать возможность случайного выхода из программы с соответствующим сообщением.
  
  11. **Проверка на символ**
      - Выйти из программы если ввод содержит определённый символ, выводя сообщение о сбое.
  
  12. **Дополнительные возможности**
      - Рандомизация пароля, настройки ошибок и значений прерывающих символов.
      - Автоподстановка открытых символов в будущих попытках ввода пользователя.
  
  #### Условия выполнения
  
  - Все функции должны быть протестированы и интегрированы в общий рабочий цикл.
  - Обеспечить восстановление всех параметров после правильного ввода, чтобы пользователь мог полноценно продолжать работу.
  - Ввод и вывод информации осуществляется в консоль.
  - Разработать функцию генерации ошибки и соответствующего обработки.
  - Подсказки по символам должны обновляться при каждом новом успешном вводе.
  
  #### Контрольные точки и тестирование
  
  - Проверка функциональности сообщения об ошибке при вводе неправильного пароля.
  - Учет и вывод сообщений о количестве ошибок и неверных попыток.
  - Функциональность подсказок и их ограничение.
  - Реализация выхода при определённой ошибке и наличие неверного символа.
  
  ---
  
  Это задание охватывает все аспекты, описанные данным JavaScript-проектом, и должно помочь вам придерживаться всех основных требований при реализации вашего кода. */


}

//_______________________ HOME WORK FROM SVETLANA ____________________________________

{
  // review 5
  // https://www.codewars.com/kata/56f695399400f5d9ef000af5/train/javascript 
  //check
  //https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
  //check
  //https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript
  // let str = 'illuminati'
  // let newStr = "";
  // for (let i = 0; i < str.length; i++) {
  //   newStr += (str[i]+str[i])

  // }
  // return newStr
  //https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript 

  //https://www.codewars.com/kata/63f96036b15a210058300ca9/train/javascript
  // https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

  // https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

  // https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
  // https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
  // https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript
  // https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript
  // https://www.codewars.com/kata/582e4c3406e37fcc770001ad/train/javascript

}
let arr = [3,2,1,2,1,2,3,1,3,3,1,1,1,1,1];
let arrN = [...arr]
[1, 1, 2, 2, 2, 3, 3, 3, 3]
arr.sort()

// let a = arr.sort( (a,b)=>{
  
//   if (a < b) return -7; 
// }



// );
console.log(arr);


function sortIt(arr){
  ar = arr.slice()
  ar.sort((x,y) => {
    nx = 0;
    ny = 0;
    for (i of arr) {
      if (i == x) nx++;
      if (i == y) ny++;
    }
    if (nx > ny) return(1);
    if (nx < ny) return(-1);
    if (nx == ny) return(y-x)
  })
  return(ar)
}