// 1. Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):
// function Component(tagName) {
// this.tagName = tagName || 'div';
// this.node = document.createElement(tagName);
// }
// Пример вызова:
// const comp = new Component('span');

class Component{
    constructor(tagName = 'div'){
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }
}
const comp = new Component('span');
console.log(comp)


// 2. Реализовать конструктор и методы в ES6 синтаксисе:
// function Component(tagName) {
// this.tagName = tagName || 'div';
// this.node = document.createElement(tagName);
// }
// Component.prototype.setText = function (text) {
// this.node.textContent = text;
// };
class ComponentMethod{
    constructor(tagName = 'div'){
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }
    setText(text = 'Text') {
        this.node.textContent = text;
    }
}
const compMethod = new ComponentMethod('p');
console.log(compMethod);