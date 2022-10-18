console.log("LOOPS BAŞLANGIÇ");

//dinamik olacak
let krediler = ["İhtiyaç","Taşıt","Araç"];

//döngüler
//iterate, iteration ****
for (let i =0; i<krediler.length; i++){
    console.log(krediler[i]);
};

console.log("***************"); 

krediler.forEach((kredi) => {
    console.log("Foreache:" , kredi);
}); //Foreache: İhtiyaç, Foreache: Taşıt, Foreache: Araç çıktısı verir


let urunler = [
    {fiyat:100, ad:"ürün1", discount: true, rate: 15},
    {fiyat:150, ad:"ürün2",discount: false, rate: 0},
    {fiyat:200, ad:"ürün3",discount: true, rate: 2.5}
]

// tüm ürrünleri gezip fiyatı %10 indirimli olarak yaz

urunler.forEach((urun) => {
    if (urun.discount === true) {
    urun.fiyat -= urun.fiyat * (urun.rate /100);
    }
    if (urun.fiyat > 150) console.log("PAHALI");
    console.log(urun);
});


urunler.forEach((urun) => {
    if (urun.fiyat > 160) console.log(urun);
});


