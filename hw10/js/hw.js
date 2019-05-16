// 1

function minus(x = 0){
  return function(y = 0){
    return x - y
  }
}
console.log(minus(4)(1));
console.log(minus(5)(6));
console.log(minus(10)());
console.log(minus()(6));
console.log(minus()());

//2

function multiplyMaker(multiplier_1) {
  let multiplier_2 = multiplier_1;
    return function (multiplier_1) {
      return multiplier_2 *= multiplier_1
    };
}

const multiply = multiplyMaker(2);
console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));


//3

const string = (function(){

  function stringNull(val){
    if (val === undefined){
      return '';
    }
  }

  function stringLength(args){
    return args.length;
  }

  function stringReverse(args){
    return args.split('').reverse().join('');
  }

  return {
    stringLength,
    stringReverse,
    stringNull
  }
})()

console.log(string.stringLength('money'));
console.log(string.stringReverse('barsa'));
console.log(string.stringNull());

//1

function Car(name, age){
  this.name = name;
  this.age = age;
  this.getName = function(){
    console.log(name.charAt(0).toUpperCase() + name.slice(1));
  }
  this.getAge = function(){
    const date = new Date();
    console.log(date.getFullYear() - age);
  }
}
const lexus = new Car('lexus', 2);
lexus.getName();
lexus.getAge();

//2

function String(val){
  this.getOrigin = function(){
    console.log(val);
  }
  this.getRever = function(){
    console.log(val.split('').reverse().join(''))
  }
}

const str = new String('Ford is the best');
str.getOrigin();
str.getRever();