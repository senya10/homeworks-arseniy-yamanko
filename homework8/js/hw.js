/**
 *  ==== Создание эл-ов ====
 */

// createElement
const div = document.createElement('div');
const title = document.createElement('h1')
title.innerText = 'title'

//  innerHTML, textContent
// div.innerHTML = '<h1>Div Title</h1>';
div.textContent = 'text';

// classList - add, contains, toggle, remove;
div.classList.add('myClass', 'myClass2');

// attributes, getAttribute(attrName), setAttribute(attrName, value), hasAttribute(attrName), removeAttribute(attrName)
div.setAttribute('id', 'myId');

// dataset
let divWithIdFirst = document.getElementById('first');
console.log(divWithIdFirst.dataset);

// Append
divWithIdFirst.appendChild(div);
// divWithIdFirst.insertAdjacentElement('beforebegin', div);
// divWithIdFirst.insertAdjacentHTML('afterbegin','<h1>Title</h1>');

// remove
divWithIdFirst.replaceChild(title, div);
document.body.removeChild(divWithIdFirst);



/**
 * ==== Home work ====
 */

// slide 11 # 2
// a
const linkAfterUlBySelector = document.querySelector('ul ~ a');
linkAfterUlBySelector.id = 'link'

// b
let linkAfterUlByNextElement = document.querySelector('ul').nextElementSibling;
while (linkAfterUlByNextElement) {
    if (linkAfterUlByNextElement.tagName === 'A') {
        linkAfterUlByNextElement.setAttribute('id', 'link1')
        break
    }

    linkAfterUlByNextElement = linkAfterUlByNextElement.nextElementSibling
}



// slide 17 # 1
//a
let ul = document.querySelector('ul');
let childLength = ul.children.length;

for (let i = 0; i < childLength; i++) {
    ul.insertAdjacentHTML('beforeend', `<li class="new-item">Item ${i+1}</li>`);
}

// b
const fragmentForUl = document.createDocumentFragment()
Array.prototype.forEach.call(ul.children, (_, index) => {
    // document.createElement(`<li class="new-item">Item ${index+1}</li>`)
    const li = document.createElement('li')
    li.classList.add('new-item')
    li.innerText = `New Item ${index+1}`

    fragmentForUl.appendChild(li)
})

ul.appendChild(fragmentForUl)


// slide 18 # 5
let li = Array.prototype.slice.call(document.querySelectorAll('ul li'), 0);
li
    .sort((prev, next) => prev.innerText > next.innerText ? -1 : 1)
    .forEach(el => ul.append(el))