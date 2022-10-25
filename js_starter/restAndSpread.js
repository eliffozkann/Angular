export function sizCevapVerin() { // farklı dosyalar görebilir export sayesinde
    return [10,20,30,40,50];
}

function sum(number1, number2, number3) {
    //console.log(number3); // undefined verir
    //console.info(Number(number3)); // 0 verir
    const sum = number1 + number2 + number3;
    return sum;
}

export const cevaplariniz = sizCevapVerin();
const result = sum(cevaplariniz); // 10,20,30,40,50undefinedundefined verir, string olduğu için toplama yapmaz

console.log(typeof result); //string verir



//************************************************** */



//REST Operatör --> parametre sayısı bilinmezse
function sum2(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]; //10,20,30,40,50
    }
    return total;
}


function agv(cevapVerenKisiSayisi, ...numbers) {
    return sum2(...numbers) / cevapVerenKisiSayisi;
}



//Spread Operator
// bir dizi elemanlarını tek tek parametre olarak gönderir, yani birbirinden ayrıştırır
const cevaplariniz2 = sizCevapVerin();
const result2 = sum2(...cevaplariniz2); // 3 nokta sayesinde arraydeki sayılar toplandı, 3 nokta olmadan --> 010,20,30,40,50 verir
const result3 = agv(26, ...cevaplariniz2);

console.log(result2); //150 verir, yukarıdaki 3 nokta sayesinde
console.log(Math.max(...cevaplariniz)); // max sayısı bulduk
console.log(result3); 

function sayMyName(...letters) {
    for (const letter of letters) {
        console.log(letter);
    }
}

sayMyName(..."Ahmet"); // ismin başındaki 3 nokta olmasaydı alt alta harfleri döndiremezdi

console.log();

// sayMyName(...{first:"A", second:"h"}); //error verir, objeler gezilemez, spread operatörü ile ayrılamaz

sayMyName(...Object.values({first: "A", second: "H"}));//Object.values sayesinde hata vermedi

// Object.entires --> hem key'i hem value yu alır, ikisini birlikte array olarak döner

// SayMyName(...Object.keys({name:"Mehmtet", surname:"Kars"})); //key leri array haline getirip döner

let instructor = {
    firstName: "Ahmet",
    lastName: "Çetinkaya", 
};
let student = {
    firstName: "Anıl",
    lastName: "Kavuk", 
};
const learningTopic = {
    topic: ["JavaScript"],
};

student = {
    // firstName: "Anıl",
    // lastName: "Kavuk",
    ...student,
    ...learningTopic,
}; // student ve learningTopic object lerini birleştirdi, spread operatörü sayesinde

// !!!!!! Object.assign(instructor, student) // ikisini birleştirir üsteki gibi

learningTopic.topic.push("Angular");
console.log(instructor);
console.log(student);

