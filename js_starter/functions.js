let products = [
    {unitPrice:100, productName:"ürün1", discount: true, rate: 15},
    {unitPrice:150, productName:"ürün2", discount: false, rate: 0},
    {unitPrice:200, productName:"ürün3", discount: true, rate: 2.5}
];


let searchText = "ürün";

// // 10 farklı yerde productName'e göre ürünleri getirme modulü
let product = products.filter(p => p.productName.includes(searchText));

//console.log(`Arama sonucu ${product.length}`);


//Function Tanımlama Şekilleri
function getProductByName(productName) {
    //console.log("getProductByName fonksiyonu calisti.");
    let productsResult = products.filter((p) =>
      p.productName.includes(productName)
    );
    console.log(`Arama sonucu bulunan urun sayisi: ${productsResult.length}`);
  }
  
  //func cagirma
  getProductByName("ürün");
  getProductByName("1");
  getProductByName("UUUU");
  getProductByName("3");
  
  //const =>> constant => değişken tanımlama keywordu
  // değişkenlerin değeri bir kez tanımlandıktan sonra asla değşmez!!
  const multiple = 6;
  
  //ARROW Function tanimlama
  const getProductsByUnitPrice = (unitPrice) => {
    console.log("Çalıştı");
  };
  
  getProductsByUnitPrice();




//products.js
//ürünleri alın

//isme göre filtreleme fonksiyonu
//isme göre ilk bulunan productu getirme fonksiyonu
//unit price  < PARAMETRE getirme fonksiyonu(array)
//unit price  > PARAMETRE getirme fonksiyonu(array)
// indirimdeki ürünleri getirme
//ürün ekleme
//verilen isim ile ürün silme
//tüm ürünleri getirme