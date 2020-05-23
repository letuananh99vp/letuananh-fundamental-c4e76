const product = [
    {
        name: 'Xiaomi portablecharger 20000mah',
        price: 428,
        color: 'White',
        category: 'Changer',
        brand: 'Xiaomi',
    },
    {
        name: 'Samsng j2',
        price: 100,
        color: 'Black',
        category: 'Phone',
        brand: 'Samsung',
    },
    {
        name: 'Iphone X',
        price: 500,
        color: 'White',
        category: 'Phone',
        brand: 'Apple',
    },
    {
        name: 'HP 8560',
        price: 550,
        color: 'Black',
        category: 'Laptop',
        brand: 'HP',
    },
];
// for(i=0;i<product.length;i++){
//     console.log('---------------');
//     console.log(`#${[i+1]}. ${product[i].name }`);
//     console.log(`    Price: ${product[i].price }`);
// }
let position = Number(prompt('Nhap vao vi tri')-1);
console.log(product[position]);

// let items = [1,2,3,4]
// for(let item of product){
//     console.log('------------');
//     console.log(`Name: ${item.name}`);
//     console.log(`Price: ${item.price}`);
// }