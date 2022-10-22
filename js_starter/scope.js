/*
*******************************

// Global Scope
var variable = 1;
let variable2 = 2;

function func() {
    let variable = 10;
    // Function Scope
    console.log("1. Cevap: ", variable);
}

func(); // 10 çıktısını verir

console.log("2. Cevap: ", variable); // 1 çıktısını verir

**************************
*/

var value = 40; // önemli bir veri tuttuğunda
let value2 = 50;
const value3 = 60;

if (true) {
    //BLOCK SCOPE
    var value4 = 70; //scope'unu aşıp üst scope'da tanımlandığını
    var value = 70; // önemli bir verinin üstünde yanlışlıkla yazma işlemi uygulandı
    let value5 = 80;
    const value6 = 90;
    console.log(value, value4, value5); //70 80
}

console.log("value 1: " + value, value2, value3, value4);

console.log(value5); //error verir

console.log(value, value2, value3, value4, value5)














