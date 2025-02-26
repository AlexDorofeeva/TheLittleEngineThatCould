// 5.	Креативное задание 1*

// Имеется зашифрованное предложение 

// “Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”

// Мы знаем, что оно означает “You are the best QA ever”.
// Нам нужно придумать программу дешифратор.

let text = "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr";
let a  = text.split("br");
console.log(a.join(""))

// 6.	Креативное задание 2* (посложнее)

// Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему
// 1

let text1 = "How are you doing my friend?";
let newText1 = "";
let count = 0;
for (let i = 0; i < text1.length; i++){
    if (count % 2 == 0){
        newText1 = newText1 + text1[i] + "Hahaha"
    }
    count += 2
}
console.log(newText1);
// 2
let b  = text1.split("br");
console.log(b.join(""))


7.	Какой результат работы кода и почему? Выберите один ответ.
	
	let myArray = ["apple", "banana", "orange"];
for (let index in myArray) {
    console.log(myArray[index]);
}

// answer:

// c.	Цикл выполнится успешно, перебирая все элементы массива.

