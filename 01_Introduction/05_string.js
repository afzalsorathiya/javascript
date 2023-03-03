const name = "hitesh";
const repoCount = 50;

//This is not recommended practice
// console.log(name + repoCount + " Value");

//best practice
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// JS string operations
const gameName = new String("hitesh-hc-com");
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,6)
// console.log(newString);

const newStringOne = "           afzal              "
// console.log(newStringOne.trim().length);

const url = "https://afzalsorathiya.com/mohmad%20afzal%20sorathiya"
console.log(url.replace('%20','-'));

console.log(url.includes('afzalsorathiya'));


console.log(gameName.split('-'));