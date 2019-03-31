//part1
//#1

let a = 'none';
a === 'block' 
    ? console.log('block')
    : a === 'none' 
        ? console.log('none')
        : a === 'inline' 
            ? console.log('inline')
            : console.log('other')
 
let x = '';
switch(x){
    case 'block':
        console.log('block');
        break
    case 'none':
        console.log('none');
        break
    case 'inline':
        console.log('inline');
        break
    default: console.log('other');
}
//#2

let f = '';
f === 'hidden'
    ? [f = 'visible', console.log('visible')]
    : [f = 'hidden', console.log('hidden')];

let p = '3';
p === 0
    ? [p = 1, console.log(p = 1)]
    : p < 0
        ? [p = 'less then zero', console.log(p = 'less then zero')]
        : p > 0
            ? [p*=10, console.log(p*= 10)]
            : console.log(p);

//#3
let car = { name: 'Lexus', age: 6, create: 2008, needRepair: false }
car.age > 5
    ? [console.log('Need Repair'), car.needRepair = true]
    : car.needRepair = false;

//part2
//#1

let g = 'i am in the easycode'
let h = '';

for (let i = 0; i < g.length; i++){
    h += (g [i-1] === ' ')
    ? g[i].toUpperCase() 
    : g[i];
}
    console.log(h);

//#2

let c = 'tseb eht ma i';
let d = '';
 
for(let i = c.length-1; i >=0; i--){
    d += c[i];
}
console.log(d);

//#3

function factorial(n){
    let result = 1;
    while (n--){
        result *= n+1
    }
    return result;
}
console.log(factorial(10));

//4#

for (a='JavaScript is a pretty good language', b = '', i=0; i < a.length; i++){
    b += ' ' != a[i] 
    ? i && ' ' != a[i-1] 
    ? a[i] 
    : a[i].toUpperCase() : '';
}
console.log(b);

//5#

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
for (let myNumber of number){
    if(myNumber%2 !== 1){continue}
    console.log(myNumber);
} 

//#6

let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
   }

for(let prop in list) {
    if (typeof(list[prop]) === 'string')
    list[prop] = list[prop].toUpperCase();
    console.log(list[prop]);
}