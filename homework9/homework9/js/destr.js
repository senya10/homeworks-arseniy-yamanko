// 1. Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:
// func(‘a’, ‘b’, ‘c’, ‘d’) → {
//     first: ‘a’,
//     other: [‘b’, ‘c’, ‘d’] }

function getFirstArgument(arguments, ...rest) {
  return {
    first: arguments,
    other: [...rest]
  };
}
  
console.log(getFirstArgument('a', 'b', 'c', 'd', 'e'));
  
// 2. Организовать функцию getInfo, которая принимает объект вида
// { name: ..., info: { employees: [...], partners: [ ... ] } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:
// const organisation = {
// name: 'Google',
// info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing'] }
// };
// getInfo(organisation); → Name: Google
// Partners: Microsoft Facebook
  
const organisation = {
  name: "Google",
  info: {
    employees: ["Vlad", "Olga"],
    partners: ["Microsoft", "Facebook", "Xing"]
  }
};
  
function getInfo(object) {
  const { name = "Unknown" } = object;
  const {
    info: { partners }
  } = object;
  return (
    console.log(`Name: ${name}`),
    console.log(`Partners: ${partners[0]}, ${partners[1]}`)
  );
}
  
getInfo(organisation);