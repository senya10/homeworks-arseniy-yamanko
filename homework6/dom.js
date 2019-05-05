// document.getElementsByTagName
// document.querySelectorAll

// let divsByTagName = document.getElementsByTagName('div');
// let divsByQuerySelectorAll = document.querySelectorAll('div.class');
// let divByQuerySelector = document.querySelector('div');
// let divById = document.getElementById('div2');

// console.log(divsByTagName); // collection
// console.log(divsByQuerySelectorAll); // collection
// console.log(divByQuerySelector); // element
// console.log(divById); // element

// document.body
// document.head
// document.links
// document.forms

// div.previusElementSibling
// div.nextElementSibling

// div.firstElementChild
// div.lastElementChild
// ul.children

// div.parentElement

// const links = document.links;

// for (let link of links) {
//     console.log(link.closest('ul'));
// }

// document.body.contains(div)
// document.body.matches('body') => true



//Зная структуру html, с помощью изученных методов получить (в консоль):

// 1. head
console.log(document.head);

// 2. body
console.log(document.body);

//3 все дочерние элементы body и вывести их в консоль.
console.log(document.body.children);

//4 первый div и все его дочерние узлы

let firstDiv = document.querySelector('div')

//а) вывести все дочерние узлы в консол
console.log(firstDiv.children)

//)б) вывести в консоль все дочерние узлы, кроме первого и последнего
console.log(Array.prototype.slice.call(firstDiv.children, 1, -1));

//************************************************************ */

// 1 Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый 
// элемент родителем для второго:
// isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
//  true так как первый див является родительским элементом для mark
// isParent(document.querySelector('ul'), document.querySelector('mark'));
//  false так ul НЕ является родительским элементом для mark

function isParent (parent, child){
    if (child.parentElement === parent){
        return true
    } else {
        return false
    }
return child.parentElement === parent 
};
console.log(isParent(document.body.children[0], document.querySelector('mark')));

console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));

// 2 Получить список всех ссылок, которые не находятся внутри списка ul

const allLinks = document.querySelectorAll('a');
const allLinksArray = Array.from(allLinks);

console.log(allLinksArray.filter((link) => !link.closest('ul')));

// 3 Найти элемент, который находится перед и после списка ul

let prev = document.querySelector("ul").previousElementSibling;
let next = document.querySelector("ul").nextElementSibling;

console.log('prev', prev)
console.log('next', next)

// 4 Посчитать количество элементов li в списке

let li = document.querySelector('ul');
console.log(li.childElementCount)