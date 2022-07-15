// Task 3-1
// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggy» в начало массива.
const genres = ["Jazz", "Blues"];
console.log(genres);
genres.push("Рок-н-ролл");
console.log(genres);
console.log(genres[0]);
const lastElementGenres = genres.length - 1;
console.log(genres[lastElementGenres]);
console.log(genres.shift());
console.log(genres);
genres.unshift("Country", "Reggy");
console.log(genres);

// Task 3-2
// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся в переменной values в виде строки.
// Значения гарантированно разделены пробелом
const values = '8 11';
const value = values.split(" "); 
console.log(value);
console.log(Number(value[0]) * Number(value[1]));
console.log(+value[0] + +value[1]);

// Task 3-3
// Напиши скрипт для перебора массива fruits циклом for.
// Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента.
// Нумерация элементов должна начинаться с 1.
const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
for (i = 0; i < fruits.length; i += 1){
    console.log(`${i + 1}: ${fruits[i]}`);
}

// Task 3-4
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя.
// В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми.
// Порядковый номер имен и телефонов в строках указывают на соответствие.
// Количество имен и телефонов гарантированно одинаковое
const names = 'Jacob,William,Solomon,Artemis';
const phones = '89001234567,89001112233,890055566377,890055566300';
const namesSet = names.split(",");
const phonesSet = phones.split(",");
for (i = 0; i < namesSet.length; i += 1){
    console.log(`${namesSet[i]}: ${phonesSet[i]}`);
}

// Task 3-5
// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего.
// Результирующая строка не должна начинаться или заканчиваться пробельным символом.
// Скрипт должен работать для любой строки.
const string = 'Welcome to the future';
// const stringWord = string.split(" ");
// console.log(stringWord.slice(1, -1));
console.log(string.split(" ").slice(1, -1).join(" "));

// Task 3-6
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.
const strings = 'Welcome to the future';
console.log(strings.split("").reverse().join(""));

// Task 3-7
// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.
const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby', '2'];
console.log(langs.sort((a, b) => a > b ? 1: -1));
console.log(langs.sort((a, b) => a.localeCompare(b)));
console.log(langs.sort((a, b) => b.localeCompare(a)));

// Task 3-8
// Напиши скрипт поиска самого маленького числа в массиве.
// Код должен работать для любого массива чисел.Используй цикл для решения задачи.
const numbers = [2, 17, 94, 1, 23, 37];
let min = numbers[0];
for (i = 1; i < numbers.length; i += 1){
    if (min > numbers[i]) {
        min = numbers[i]
    }
}
console.log(min); // 1