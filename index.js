console.log("Merhaba kodlamaio");

// yorum satırı
//kod çalıştırılırken dikkate alınmaz

//DEĞİŞKENLER ve TÜRLERİ
 
// VAR ==> variable
// JavaScript TİP GÜVENLİ DEĞİLDİR
//TypeScript TİP GÜVENLİDİR
var dolarKur = 10;
//dolarKur = "Kodlamaio";  //set etmek

console.log(dolarKur); //eğer dolarKur u 20 ye eşitleseydim konsol 20 çıktısını verirdi
// ama console.log dan sonra eşitlenirse ilk eşitlenen konsolda gösterilir

var euroKur="15";
console.log(euroKur);

//String metinsel ifadedir, konsolda çıktısının rengi int e göre farklı olur

//MATEMATİKSEL OPERATÖRLER
console.log(dolarKur + 5); // cevap int gelir

console.log(euroKur+15);//!! String olduğu için yanlış çalıştı, yani cevap 1515 oluyor

//VAR keyword unu kullanmayacağız!!!!!!
//let

// !!!!!!!!! ÖDEV !!!!!!!!!!!
// LET ve VAR keyword arasındaki farklar araştırılacak

//BOOLEAN = true yada false
let euroYukselis = true; //yada FALSE
console.log(euroYukselis);

// NUMBER ondalıklı olabailir, decimal, float, double
dolarKur=15.5;
console.log(dolarKur);

//koleksiyonlar
// ARRAY = DİZİ
let krediler = ["İhtiyaç","Taşıt","Konut"];
console.log(krediler);


//object
//JSON = JvaScriptObject Notation
//KEY - VALUE
//Naming 
//camelCase
let odemeBilgileri = {
    aylikOdeme: 415.53,
    faizOrani: 1.89,
    toplamGelirOdeme: 14950.42,
    krediTipi: "İhtiyaç Kredisi",
};
console.log(odemeBilgileri);
console.log(krediler[1]); //1. eleman Taşıt

console.log("Programlama Her zaman 0'dan saymaya başlar");
