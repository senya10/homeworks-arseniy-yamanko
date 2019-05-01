// const listOfLinks = document.querySelectorAll('a');


// ====== 1 ======

// const newList = []

// for (let index = 0; index < listOfLinks.length; index++) {
//     const element = listOfLinks[index];

//     if (!element.closest('ul')) {
//         newList.push(element)
//     }
// }

// console.log(newList);


// ====== 2 ======

// const listOfLinksArray = Array.from(listOfLinks)
// console.log(listOfLinksArray.filter((link) => !link.closest('ul')));


// ====== 3 =======
// const listOfLinksArrayPrototype = Array.prototype.filter.call(listOfLinks, (link, index) => !link.closest('ul'))
// console.log(listOfLinksArrayPrototype);

// ======= template string =======

// const number  = 5
// const string = `some text - ${number} `


// ===== fragment ====
// const news = ['new2', 'new3', 'new4']

// const newsDiv = document.querySelector('.news')
// const fragment = document.createDocumentFragment()

// news.forEach(function (someNew) {

//     const pElement = document.createElement('p')
//     pElement.innerHTML = someNew

//     fragment.appendChild(pElement)
// })

// newsDiv.appendChild(fragment)

// ЗАДАЧА №1 : Найти параграф и получить его текстовое содержимое (только текст!)
let pText = document.getElementsByTagName("p")['0'].textContent;
console.log(pText);

//3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: 
// getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

let ul = document.querySelector("ul");
let result = [];

function getTextFromUl(list) {
    let a = list.querySelectorAll("li a");
    for (let i = 0; i < a.length; i++) {
        let element = a[i];
        result.push(element.textContent);
    }
    return result;
}
console.log(getTextFromUl(ul));

//Найти в коде список ul и добавить класс “list”
let ulClass = document.getElementsByTagName('ul')['0'];
ulClass.classList.add("list");
console.log(ulClass);

//Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
let a = document.getElementsByClassName('link-class')[0].id = 'link';
let aClassLink = document.getElementById('link');
console.log(aClassLink);

//На li через один (начиная с самого первого) установить класс “item”
let getElementAllLi = document.getElementsByTagName('li');

for (let i = 0; i < getElementAllLi.length; i+=2){
    let element = getElementAllLi[i];
    element.classList.add('item');
}
let liClassItem = document.getElementsByClassName('item');
console.log(liClassItem);

//На все ссылки в примере установить класс “custom-link”
let getElementAllLinks = document.querySelectorAll('a');

for (let i = 0; i < getElementAllLinks.length; i++){
    let element = getElementAllLinks[i];
    element.classList.add('custom-link');
}
console.log(getElementAllLinks);

// 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). 
// Конечный результат:
// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

let p = document.querySelector('article p').childNodes;
let res = [];

for (let i in p){
    let element = p[i]
    if (element.nodeType === Node.TEXT_NODE)
        element.nodeValue = '-text-';
        res.push(element);
}
console.log(res);

//В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong). 
const linksAll = document.links;
for (let link of linksAll) {
  if (link.parentNode.tagName === 'LI') {
        const strong = document.createElement('strong');
        link.insertAdjacentElement('afterbegin', strong);
  }
}

// Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
const fragment = document.createDocumentFragment(),
      newUl = document.querySelector('ul'),
      numbChildrenUl = newUl.children.length;

for (let index = 1; index <= 3; index++) {
    const newLi = document.createElement('li');
    newLi.classList.add('new-item');
    fragment.appendChild(newLi);
    newLi.textContent = `link ${numbChildrenUl + index}`;
}
newUl.appendChild(fragment);
console.log(newUl)