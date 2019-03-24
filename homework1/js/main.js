let string = 'some test string';
console.log(string[0]);                   //1я буква строки
console.log(string.slice(-1));            //последняя буква строки

console.log(string[0].toUpperCase()+string.substring(1));         //1я буква верхний регистр
console.log(string.slice(0,15)+string.slice(-1).toUpperCase());  //последняя буква верхний регистр

console.log(string.indexOf("string"));        //положение string в строке

console.log(string.indexOf(" ", 5));          //положение 2го пробела в строке

console.log(string.substr(5,4));             //строка с 5-го символа длиной 4 буквы

console.log(string.slice(5,9));               //строка с 5-го по 9-й символы

console.log(string.slice(0, -6));              //новая строка из исходной путем удаления последних 6-и символов

var a = "20"
var b = 16
var string1 = a + b;
console.log(string1);                         //Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”

console.log(Math.PI.toFixed(2));              //Получить число pi из Math и округлить его до 2-х знаков после точки

console.log(Math.max(15,11,16,12,51,12,13,51));
console.log(Math.min(15,11,16,12,51,12,13,51));   //Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

console.log(Math.random().toFixed(2));            //Получить случайное число и округлить его до двух цифр после запятой

var randMin = 0;                         //Получить случайное целое число от 0 до X. X - любое произвольное число. 
var randMax = 20;
var randInt = (Math.floor(Math.random() * (randMax - randMin + 1)) + randMin); 
console.log(randInt);

var z = 0.6;                                //Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)
var y = 0.7;
var result = z + y;
console.log(result);
console.log(result.toFixed(1));

var int = "100$"                            //Получить число из строки ‘100$’
console.log(parseInt(int,10));