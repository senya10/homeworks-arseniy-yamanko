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

const strMaker = (function () {
 
    let newStr;
    function setString(str = '') { newStr = '' + str; }
    function getString() { return newStr; }
    function getLength() { return newStr.length; }
    function reverseString() { return newStr.split('').reverse().join(''); }
 
    return {
        setString: setString,
        getString: getString,
        getLength: getLength,
        reverseString: reverseString,
    };
})();
 
console.log(strMaker.setString("MyString"));
console.log(strMaker.getString());
console.log(strMaker.getLength());
console.log(strMaker.reverseString());
 
console.log(strMaker.setString(123));
console.log(strMaker.getString());
console.log(strMaker.getLength());
console.log(strMaker.reverseString());
 
console.log(strMaker.setString());
console.log(strMaker.getString());
console.log(strMaker.getLength());
console.log(strMaker.reverseString());


//4

const calculator = (function () {
 
  let res;

  function setValue(val) {
      if (!val || typeof (val) !== 'number') { return console.log('Non-valid value!') }
      console.log(res = val);
      return this;
  }
  function add(val) {
      if (!val || typeof (val) !== 'number') { return console.log('Non-valid value!') }
      console.log(res += val);
      return this;
  }
  function mult(val) {
      if (!val || typeof (val) !== 'number') { return console.log('Non-valid value!') }
      console.log(res *= val);
      return this;
  }
  function substr(val) {
      if (!val || typeof (val) !== 'number') { return console.log('Non-valid value!') }
      console.log(res -= val);
      return this;
  }
  function divis(val) {
      if (!val || typeof (val) !== 'number') { return console.log('Non-valid value!') }
      console.log(res /= val);
      return this;
  }
  function exponent(val) {
      if (!val || typeof (val) !== 'number') { return console.log('Non-valid value!') }
      console.log(res = Math.pow(res, val));
      return this;
  }
  function getValue() {
      console.log(res = Math.round(res * 100) / 100);
      return this;
  }

  return {

      setValue: setValue,
      add: add,
      mult: mult,
      substr: substr,
      divis: divis,
      exponent: exponent,
      getValue: getValue,
  };
})();

calculator.setValue(10).add(5).mult(2).getValue();

calculator.setValue(10).exponent(2).getValue();

//1

function Car(name, age){
  this.name = name;
  this.age = age;
  this.getName = function(){ return this.name.charAt(0).toUpperCase() + this.name.slice(1);}
  this.getAge = function(){ 
    const date = new Date();
    return date.getFullYear() - this.age;}
  }
const lexus = new Car('lexus', 2);
console.log(lexus.getName());
console.log(lexus.getAge());

//2

function String(val){
  this.val = val;
  this.getOrigin = function(){return this.val;}
  this.getRever = function(){return this.val.split('').reverse().join('');}
}

const str = new String('Ford is the best');
console.log(str.getOrigin());
console.log(str.getRever())