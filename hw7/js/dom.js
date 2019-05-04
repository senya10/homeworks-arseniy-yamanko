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

// ЗАДАЧА №2 : Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла,
// об имени узла и о количестве дочерних узлов (если детей нет - 0). 
  const infoObject = (elem) => {
  const myElem = document.querySelector(elem);
  const typeMyElem = myElem.nodeType;
  const nameMyElem = myElem.nodeName;
  const childMyElem = myElem.children.length;
  const properMyElem ={
      type: typeMyElem,
      name: nameMyElem,
      child: childMyElem
  };
  return properMyElem
};

console.log(infoObject('div'));

//3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: 
// getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

    let a = document.querySelectorAll("li a")
    let result = [];

    a.forEach(function(item){
      result.push(item.textContent)
    });
    console.log(result)

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


// *************************************************************************


//1 Найти в коде список ul и добавить класс “list”
let ulClass = document.getElementsByTagName('ul')['0'];
ulClass.classList.add("list");
console.log(ulClass);

//2 Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
let aElem = document.querySelector('ul ~ a');
aElem.id = 'link';
console.log(aElem);

// 3 На li через один (начиная с самого первого) установить класс “item”
let getElementAllLi = document.getElementsByTagName('li');
for (let i = 0; i < getElementAllLi.length; i+=2){
    let element = getElementAllLi[i];
    element.classList.add('item');
}
let liClassItem = document.getElementsByClassName('item');
console.log(liClassItem);

// 4 На все ссылки в примере установить класс “custom-link”
let getElementAllLinks = document.querySelectorAll('a');

for (let i = 0; i < getElementAllLinks.length; i++){
    let element = getElementAllLinks[i];
    element.classList.add('custom-link');
}
console.log(getElementAllLinks);


//*********************************************************************** */


// 1 Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
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


// 2 В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong).
const linksAll = document.links;

for (let link of linksAll) {
  if (link.parentNode.tagName === 'LI') {
        const linkText = link.innerText;
        const strong = document.createElement('strong');
        strong.innerHTML = linkText;
        link.innerHTML = strong.innerHTM;
        link.innerHTML = '';
        link.insertAdjacentElement('afterbegin', strong) // Не понял как обернуть содержимое а в strong 
  }
}

// 3 В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). 
//В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement. 
const createImg = document.createElement('img');
createImg.width = 450;
createImg.src ='https://static.ua-football.com/img/upload/19/26cc85.jpeg'
createImg.alt = 'The Best'
document.body.insertAdjacentElement('afterbegin', createImg);

// 4 Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green

const markEl = document.querySelector('mark');
    markEl.insertAdjacentHTML('afterEnd', ' green')
    markEl.classList.add('green')

// 5 Отсортировать li внутри списка в обратном порядке (по тексту внутри)
let li = Array.prototype.slice.call(document.querySelectorAll('ul li'), 0);
  li
    .sort((prev, next) => prev.innerText > next.innerText ? -1 : 1)
    .forEach(element => newUl.append(element))