let a = 0 || 'string';
console.log(a);//первое значение, которое является true

let b = 1 && 'string'; //Первый аргумент - true, возвращается второй аргумент
console.log(b);

let c = null || 25;//25 - первое значение, которое является true
console.log(c);

let d = null && 25;//null, 1е значение false, возвращается, 2ой аргумент игнорир
console.log(d);

let e = null || 0 || 35; //35 первое значение, которое является true
console.log(e);

let g = null && 0 && 35;  //null - 1ый аргумент который false
console.log(g);

12 + 14 + '12' //2612, т.к есть строковой аргумент то при бинарном плюсе второй аргумент(результат сложения 12+14) станет строчным

3 + 2 - '1' // 4, т к '1' приводится к числу, в отличии от случая выше с +

'3' + 2 - 1 // 31, т к используется бинарный + делающий второй аргумент (результат вычисл 2-1) строчным

true + 2 //3 т к true становится числом 1

+'10' + 1 //11 т к перед '10' используется унарный +, превращающий строчное значение в числовое

undefined + 2 //NaN , undefined при числовом преобразовании NaN

null + 5    // null ри числовом преобразовании становится 0

true + undefined    //NaN

let x = 'hidden';               //Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
if (x ==='hidden'){
    console.log(x = 'visible');
}else{
    console.log(x);}

let n = 0;
if (n===0){
    console.log(n=1);                   //если переменная равна нулю, присвоить ей 1;
}else if(n<0){
    console.log(n = 'less then zero');  //если меньше нуля - строку “less then zero”;
}else if(n>0){
    console.log(n*=10);         //если больше нуля - используя оператор “присвоение”, переменную умножить на 10
}

let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }
if (car.age > 5){
    console.log('Need Repair');  // если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair'
    car.needRepair = true;       // и свойство needRepair в объекте car изменить на true
}else{
    car.needRepair = false;      // иначе изменить на false
}

let item = { name: 'Intel core i7', price: '100$', discount: '15%' }



let product = {
    name: "Яблоко",
    price: "20$"
}

let min = 10;
let max = 20;
product.price = parseInt(product.price,10);
if (product.price >= min && product.price <= max){
    console.log(product.name);
}else{
    console.log('товаров не найдено');}