let menuElem = document.querySelector('.menu');

menuElem.addEventListener('click', ({target}) =>{
    const searchClass = menuElem.querySelector('.close')
    if (searchClass){
        searchClass.classList.remove('close')
        searchClass.classList.add('d-none')
    }

    const li = target.tagName === 'LI' ? target : target.closest('li')
    const divLi = li.querySelector('.dropdown-menu')
    if(divLi){
        divLi.classList.add('close')
        divLi.classList.remove('d-none')
    }else{
        alert('Здесь нет меню')
    }
})