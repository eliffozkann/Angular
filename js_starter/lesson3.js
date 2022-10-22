// Değer Tipler
// numbers, string, boolean, undefined, null, char
// "string" --> değer gibi davranır ama tam değer tip değil
let number1 = 10;
let number2 = 20;
number1 =number2;
number2=100;
console.log(number1);


//Referans Tİpler
//Array, object
let product1 = {id:1, name:"Laptop", unitPrice:15000};
let product2 = {id:2, name:"Mouse", unitPrice:150};

product1 =product2;
product2.name="Keyboard";
console.log(product1);















