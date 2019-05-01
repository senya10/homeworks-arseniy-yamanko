// Task manager
// 1. создать задачу
//      а. обработка формы
//          - проверить данные перед добавлением (валидация)
//      б. добавить задачу в массив
//      в. добавить данные в таблицу
//      г. очистить форму
// 2. удалить задачу
//      а. подтверждение
//      б. удаление данных из таблицы
//      в. удаление данных из массива 
// 3. редактировать задачу 
//      а. взять данные из массива
//      б. поместить в форму 
//      в. обработать форму на редактирование
//          - валидация
//      г. обновить данные в массиве
//      д. обновить данные в таблице
//      е. офистить форму

// task = {
//     id: {
//         type: 'String',
//         required: true
//     },
//     title: {
//         type: 'String',
//         required: true
//     },
//     text: {
//         type: 'String',
//         required: true
//     }
// }


let storage = {
    todos: []
};

// UI Elements


function generateId() {
    const template = 'xxxx-xxxx-xxxx-xxxx';

    const arrayFromTemplate = template.split('')
    return arrayFromTemplate.reduce((init, char) => {
        if (char === '-') return init += char

        return init += Math.floor(Math.random() * 10)
    }, '')

}
// function generateId() {
//     const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
//     let id = '';

//     for (let char of words) {
//         let index = Math.floor(Math.random() * words.length);
//         id += words[index];
//     }

//     return id;
// }

function addNewTodoToStorage(title, text) {
    if (!title) return console.log('Введите заголовок задачи');
    if (!text) return console.log('Введите текст задачи');

    const newTask = {
        title,
        text,
        id: generateId()
    };

    // Добавим в разметку
    // addNewTodoToView(newTask);

    storage.todos.push(newTask);

    return storage.todos;
}

addNewTodoToStorage('My title 2', 'My text 2')

function findTaskIndexByTaskId(id) {
    if (!id) {
        console.log('Передайте id задачи');
        return -1
    }

    const taskIndex = storage.todos.findIndex((task) => task.id === id)

    if (taskIndex === -1) console.log('id несуществуе');

    return taskIndex;
}

function deleteTodoFromStorage(id) {
    const taskIndex = findTaskIndexByTaskId(id)
    if (taskIndex === -1) return;

    // Удалим из разметки
    // deleteTodoFromView(id);

    return storage.todos.splice(taskIndex, 1);
}

// function editTaskStorage(id, title, text) {
//     const todo = storage.todos.find(todo => todo.id === id)
//     todo.title = title
//     todo.text = text


// }

function editTaskStorage(id, title, text) {
    const taskIndex = findTaskIndexByTaskId(id)

    if (taskIndex === -1) return;

    const todo = storage.todos[taskIndex]

    storage.todos[taskIndex] = {
        ...todo,
        title,
        text
    }
}

function deleteTodoFromView(id) {}

function addNewTodoToView(task) {}

function todoTemplate(task) {}