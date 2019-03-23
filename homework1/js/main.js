let string = 'some test string';
alert(string[0]);
alert(string.slice(-1));

alert(string[0].toUpperCase());
alert(string.slice(-1).toUpperCase());

alert(string.indexOf("string"));

alert(string.indexOf(" ", 6)); 

alert(string.substr(5,4));

alert(string.slice(5,9));

alert(string.slice(0, -6));

var a = "20"
var b = "16"
var string1 = a + b;
alert(string1);

alert(Math.PI.toFixed(2));

alert(Math.max(15,11,16,12,51,12,13,51));
alert(Math.min(15,11,16,12,51,12,13,51));

alert(Math.random().toFixed(2));

var randNumMin = 0;
var randNumMax = 10;
var randInt = (Math.floor(Math.random() * (randNumMax - randNumMin + 1)) + randNumMin);
alert(randInt);

var z = 0.6;
var y = 0.7;
var result = z + y;
alert(result.toFixed(1));

var int = "100$"
alert(parseInt(int,10));