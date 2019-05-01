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
const news = ['new2', 'new3', 'new4']

const newsDiv = document.querySelector('.news')
const fragment = document.createDocumentFragment()

news.forEach(function (someNew) {

    const pElement = document.createElement('p')
    pElement.innerHTML = someNew

    fragment.appendChild(pElement)
})

newsDiv.appendChild(fragment)