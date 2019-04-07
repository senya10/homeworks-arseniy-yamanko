//1

arr = [1, 2, 3, 5, 8, 9, 10];
 
let newArr = arr.map(function (item) {
    if (item % 2 === 0) {
        return { digit: item, odd: true };
    }
    else {
        return { digit: item, odd: false };
    }
});
console.log(newArr);

//2

arr = [12, 4, 50, 1, 0, 18, 40];
newArr = [12, 4, 50, 1, 10, 18, 40];
 
function numberZero(number) {
    return number === 0;
}
console.log(!arr.some(numberZero));
console.log(!newArr.some(numberZero));

//3

arr = ['yes', 'hello', 'no', 'easycode', 'what'];
newArr = ['yes', 'no'];

function nameLength(name) {
    if (name.length > 3) {
        return true;
    }
}
console.log(arr.some(nameLength));
console.log(newArr.some(nameLength));

//1 sort

arr = [[14, 45], [1], ['a', 'c', 'd']];

arr.sort(function (prev, next) {
    if (prev.length > next.length) {
        return 1;
    }
    if (prev.length < next.length) {
        return -1;
    }
    return 0;
});
console.log(arr);

//2 sort

arr = [
    { cpu: 'intel', info: { cores: 2, сache: 3 } },
    { cpu: 'intel', info: { cores: 4, сache: 4 } },
    { cpu: 'amd', info: { cores: 1, сache: 1 } },
    { cpu: 'intel', info: { cores: 3, сache: 2 } },
    { cpu: 'amd', info: { cores: 4, сache: 2 } }
];
 
arr.sort(function (prev, next) {
    if (prev.info.cores > next.info.cores) {
        return 1;
    }
    if (prev.info.cores < next.info.cores) {
        return -1;
    }
     return 0;
});
console.log(arr);