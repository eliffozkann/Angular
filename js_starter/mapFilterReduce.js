let urunler = [
    {fiyat:100, ad:"ürün1", indirim: true, oran: 15},
    {fiyat:150, ad:"ürün2",indirim: false, oran: 0},
    {fiyat:200, ad:"ürün3",indirim: true, oran: 2.5}
]

//filter
// array.prototype.filter

let filtrelenmişUrunler = urunler.filter(urun => {
    return urun.fiyat > 160;
});
console.log(filtrelenmişUrunler);

// map => Foreache ile aynı FARKI map yeni bir array oluşturur ve döner
let maplenmişArray = urunler.map(urun => {
    return {
        fiyat: urun.fiyat * 2,
        ad: urun.ad,
        indirim: urun.indirim,
        oran: urun.oran,
    };
});
console.log(maplenmişArray);


// map kullanarak indirim ve oran konsolda gözükmesin, indirim true ise oran kadar fiyat düşsün
// kullanıcıya sadece fiyat ve ad gözüksün

let maplenmişDeneme = urunler.map(urun => {
    return {
        fiyat: urun.indirim === true 
        ? urun.fiyat - urun.fiyat * (urun.oran/100)
        :urun.fiyat,
        ad: urun.ad,
    };
});
console.log(maplenmişDeneme);



// ek olarak indirim tutarını göster
let maplenmişDeneme2 = urunler.map(urun => {
    return {
        fiyat: urun.indirim === true 
        ? urun.fiyat - urun.fiyat * (urun.oran/100)
        :urun.fiyat,
        ad: urun.ad,
        indirimTutari: urun.fiyat * (urun.oran/100),
    };
});
console.log(maplenmişDeneme2);


let cart = [
    {id:1, productName: "Product 1", quantity:3, unitPrice:3000},
    {id:2, productName: "Product 2", quantity:2, unitPrice:1000},
    {id:3, productName: "Product 3", quantity:1, unitPrice:500},
]

// sepeteki tüm ürünleri gez, adet*unitPrice ile toplam fiyatı bul
// kullanıcıya göster, {totalPrice: 300, totalCount:6}
let Price = 0;
let Count = 0;
let mapProduct = cart.map(cartlar => {
        Price += cartlar.quantity * cartlar.unitPrice,
        Count += cartlar.quantity
        return cartlar;
});
console.log("totalPrice:",Price,",", "totalCount:",Count);



// REDUCE fonksiyonu
let reducePriceProduct = cart.reduce((acc, product) => acc + (product.unitPrice * product.quantity), 0);
let reduceCountProduct = cart.reduce((acc, product) => acc + product.quantity, 0);
console.log("totalPrice:",reducePriceProduct,",", "totalCount:",reduceCountProduct);


//acc -- accumelator (birikim)
let cartTotal = cart.reduce((acc,cartItem) =>
    acc + cartItem.quantity * cartItem.unitPrice, 0
    );
let cartQuantityTotal = cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0); // sondaki sıfır kaçtan toplamaya başlanması gerektiğini alır

console.log(`Toplam Sepet Tutarı: ${cartTotal}, Sepette toplam ${cartQuantityTotal} adet ürün vardır`
);

console.log();