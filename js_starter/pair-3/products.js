let products = [
    { unitPrice:100, productName:"Urun 1", discount:true, rate:15},
    { unitPrice:150, productName:"Urun 2", discount:false, rate:0},
    { unitPrice:200, productName:"Urun 3", discount:true, rate:2.5},
]

//isme göre bulma
function getProductByName(productName){
    let productsResult = products.filter(p=>p.productName.includes(productName));
    console.log(`arama sonucunda ${productsResult.length} adet ürün bulundu`)
    return productsResult.productName;
    };
    
    getProductByName("Urun");

    //ilk product
    function getFirstProduct(productName){
        if(getProductByName(productName) == productName){
        return getProductByName(productName);
        }
    // console.log(getProductByName("Urun 1")); 
    
    }
    console.log(getFirstProduct("Urun 1"));

//   products.forEach((product) => {
//     if(products.unitPrice<160){
//         console.log(product.productName);
//     }
// });

//büyük değer
function findExpansive(unitPrice){
let filteredProducts = products.filter(product =>{
    return product.unitPrice < unitPrice
})
return filteredProducts;
};
console.log(findExpansive(160));

//küçük değer
function findCheaper(unitPrice){
let filteredProducts = products.filter(product =>{
    return product.unitPrice > unitPrice
})
return filteredProducts;
};
console.log(findCheaper(160));

// let newArray = products.map((product)=>{
    
//         unitPrice : products.discount === true;
// });
//  console.log(newArray);

//indirimli göster
function getDiscount(){
let filteredProducts = products.filter(product =>{
    return product.discount == true;
})
return filteredProducts;
};
console.log(getDiscount());

//ürün ekle
function addProduct(unitPrice, productName, discount, rate){
return products.push({unitPrice, productName, discount, rate})
};
addProduct(300,"Urun 4", false, 0);
console.log(products);

//sill
function deleteProduct(productName){
products = products.filter(products => products.productName !== productName);
return products;
}
deleteProduct("Urun 4");
//console.log(products);


// products.pop({unitPrice:100, productName:"Urun 4", discount:true, rate:15});
//console.log(products);

function getAll(){
 return products;
};
console.log(getAll());