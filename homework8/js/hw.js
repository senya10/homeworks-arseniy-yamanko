//1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится ватрибуте data-text у кнопки

const btn = document.getElementById('btn-msg');
btn.addEventListener('click', () => alert(btn.getAttribute('data-text')))

// 2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши
// покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.

function colorButton(e) {
    e.type == 'mouseover'
    ? this.style.background = 'red'
    : this.style.background = '';
}
btn.onmouseout = colorButton;
btn.onmouseover = colorButton;

//3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента

document.body.onclick = e => document.querySelector("#tag").textContent = 'Tag: ' + e.target.tagName;

//4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item +
// порядковый номер Li по списку, т.е Item 3, Item 4 и т.д 

const btnGen = document.getElementById('btn-generate')
btnGen.addEventListener('click', () => {
    let ul = document.querySelector('ul')
    let numbChildrenUl = ul.children.length;
    const newLi = document.createElement('li')
    newLi.textContent = `item ${numbChildrenUl + 1}`
    ul.appendChild(newLi)
})

