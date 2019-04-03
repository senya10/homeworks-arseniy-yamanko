//#1

function multiply(){
    let result = 1;
    if(arguments.length === 0) return 0;
    for(let i=0; i<arguments.length; i++) result *= arguments[i];
    console.log(result);
    return result;
}

multiply(3,5,10);

//#2

function reverseString(str){
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--){
        newString += str[i];
    }
    console.log(newString);
    return newString;
}

reverseString('tseb eht ma i');

//#3

function getCSFT(string) {
    var newSting = [];
    for (var i = 0; i < string.length; i++) {
    var uniCode = string.charCodeAt(i);
    console.log('i', i);
    console.log('uniCode', uniCode);
    newSting.push(uniCode);
    }
    var joinedNewSting = newSting.join(' ');
    console.log('newSting', newSting);
    console.log('joinedNewSting', joinedNewSting);
    return joinedNewSting;
    }

    getCSFT('hello');

//#4

function random(value){
    value = prompt('А какое число выберешь ты?');
    let min = 1;
    let max = 10;
    let random = Math.floor(Math.random()*(max - min + 1)) + min;
    if (value === random){
        alert('Вы выиграли');
    }
    else{
        alert('Вы не угадали. Ваше число ' + value + ', а выпало число ' + random);
    }
    return value;
}

random();

//5#
function Narray(n){
    let resultArray = [];
    while ( n > 0){
        resultArray.push(n--)
    }
    resultArray.reverse();
    console.log(resultArray);
    return(n);
}

Narray(5)

//#6

function double(a){
    let newArray = [];
    for (let i = 0; i < a.length; i++){
        newArray.push(a[i]);
    }
        return newArray;
}
let a = double([1, 2, 3]);

let doubleArray = a.concat(a);
console.log(doubleArray);