// 1. Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};
// debugger;

const rectangle = {
    width: 10,
    height: 10,
    getSquare: function() {
      return this.width * this.height;
    }
  };
  
 console.log(rectangle.getSquare());
  
// 2. Создать объект, у которого будет цена товара и его скидка,
// а также два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
//   price: 10,
//   discount: "15%"
// };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5
  
const price = {
  price: 10,
  discount: "15%",
  getPrice: function() {
    return this.price;
  },
  getPriceWithDiscount: function() {
    const newPrice = this.price;
    const newDiscount = this.discount;
    return newPrice - (newPrice / 100) * parseInt(newDiscount);
  }
};
  
console.log(price.getPrice());
console.log(price.getPriceWithDiscount());
  
// 3. Создать объект, у которого будет поле высота и метод “увеличить высоту на один”.
// Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;
  
const object = {
  height: 10,
  incNewHeight: function() {
    return this.height + 1;
  }
};
  
console.log(object.incNewHeight());

// 4 задачу не сделал 

// 1. Создать объект с розничной ценой и количеством продуктов.
// Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)
  
const retailProducts = {
  price: "20$",
  count: 20,
  getFinalPrice: function() {
    return parseInt(this.price) * this.count;
  }
};
  
console.log(retailProducts.getFinalPrice());
  
// 2 задачу не сделал 
  
// 3. Даны объект и функция:
// let sizes = { width: 5, height: 10 },
//   getSquare = function() {
//     return this.width * this.height;
//   };
// Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes
  
let sizes = { width: 5, height: 10 },
  getSquare = function() {
    return this.width * this.height;
  };
  
console.log(getSquare.call(sizes));
  
// 4.
// let element = {
//   height: 25,
//   getHeight: function() {
//     return this.height;
//   }
// };
// let getElementHeight = element.getHeight;
// getElementHeight(); // undefined
// Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.
  
let element = {
  height: 25,
  getHeight: function() {
    return this.height;
  }
};
let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight());