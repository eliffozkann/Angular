console.log("Statements Start");


// KOŞUL BLOKLARI
//true-false
// 1==1 mi, sonuç true olur

console.log(1 == 1);
console.log(1 != 1);
console.log(1 >= 1); // > , >= , < , <= 

console.log(1 == "1");  //sonuç TRUE
console.log(1 === "1");  // Sonuç FALSE çünkü tip güvenli eşitlik kontrolü yaplır
console.log(1 !== "1");  //Sonuç FALSE, TİP GÜVENLİĞİ AÇIK DEĞİL

// condition ŞARTI TRUE İSE SÜSLÜ PARANTEZ  ÇALIŞIR
if (1 !== 1) {
    console.log("if İÇERİSİ ÇALIŞTI");
} else if (2 !== 2) {
    console.log("else if çalıştı");
} else {
    console.log("else ÇALIŞTI, bütün şartlar yanlış");
}

let dolarKurDun = 18.74;
let dolarKurBugun = 18.8;
// dolarKurBugun fazla ise console fazla
//değilse az yazdır

if (dolarKurBugun > dolarKurDun) {
    console.log("Dolar kuru dünden FAZLA");
} else {
    console.log("Dolar kuru dünden AZ");
}

// TERNACY operator
// tek satırlık if - one line if statement
// koşıl ? kod1 , : kod2
// kod1 koşul TRUE (yani ?)
// kod2 koşul false (yani :) 
dolarKurBugun >= dolarKurDun 
? console.log("fazla") 
: console.log("az");

//Swit - Case 
let toplamBakiye = 100;
let secilenKur = "USD";

switch (secilenKur) { //hangi case swith içine eşitse onun altına yazılan kod çalışır
    case "USD":
        toplamBakiye *= 17;
        break;

        case "EUR":
            toplamBakiye *= 20;
        break;

    default:
        console.warn("Bilinmedik kur türü");
        break; // hiçbir case çalışmazsa default altındaki od çalışır
}
console.log("Toplam Bakiye:", toplamBakiye);




// secilenKredi
// krediTutari 
//oluşturup swit case oluşturduk

let secilenKredi = "Taşıt";
let krediTutari = 10;

switch (secilenKredi) { //hangi case swith içine eşitse onun altına yazılan kod çalışır
    case "Taşıt":
        console.log("Taşıt kredisi seçtiniz. Faiz Uygulanıyor..");
        krediTutari *= 2;
        break;

        case "İhtiyaç":
            krediTutari *= 1.5;
        break;

        case "Konut":
            krediTutari *= 2.5;
        break;

    default:
        console.warn("HATA"); //yada console.error da olabilir
        break; // hiçbir case çalışmazsa default altındaki od çalışır
}
console.log("Toplam kredi tutarı:", krediTutari);


// girilen sayi çift ise "çift", tek ise "tek yazalım"
// %

let girilenSayi = 10;
if (girilenSayi % 2 == 0)
{
    console.log("Girilen sayı çifttir");
}
else
{
    console.log("Girilen sayı tektir");
}


