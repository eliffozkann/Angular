import { cevaplariniz } from "./restAndSpread.js";

//require(); // common.js type paketi (package.json) ile birlikte kullanılır, import bu pakette çalışmaz

console.log("--------------------------------------------------");

console.log(cevaplariniz);

// const first = cevaplariniz[0]; // ilk indeksi verdi
// const second = cevaplariniz[1]; // 2. indeksi verdi


// DESTRUCTURING 
const [first, second, ...others] = cevaplariniz; //array destructuring, çıktısı alt yorum satırında
console.log(first, second, others); // 10, 20, [30, 40, 50]



const [icAnadolu, marmara, ege, akdeniz, [icAnadoluSehirleri, marmaraSehirleri, ...digerSehirler]] = [
    {name: "İç Anadolu", population: 1000000},
    {name: "Marmara", population: 2000000},
    {name: "Ege", population: 3000000},
    {name: "Akdeniz", population: 4000000},
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["İzmir", "Manisa"],
        ["Antalya", "Mersin"],
    ]
];
console.log(icAnadolu, marmara, ege, akdeniz);
console.log(...icAnadoluSehirleri); //Ankara , Konya verir yani ilk dizi --> !!!! Yukarıda köşeli parantez olmasaydı bütün şehirleri verirdi.

console.log(...marmaraSehirleri); //ikinci dize gelir

console.log(...digerSehirler.flat(2)); // son iki dize gelir 
// !!! flat(2) sayesinde consolda köşeli parantez ve tırnaklardan sıyrılmasını sağladı
// 2 sayısı kaç dizi olduğunu gösterir

//*** ÇIKTILAR ****/
// Ankara Konya
// İstanbul Bursa
// İzmir Manisa Antalya Mersin










