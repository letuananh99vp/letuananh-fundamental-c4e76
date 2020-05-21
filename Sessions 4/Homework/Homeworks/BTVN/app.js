// const product = [
//     {
//         name: 'Xiaomi portablecharger 20000mah',
//         price: 428,
//         color: 'White',
//         category: 'Changer',
//         brand: 'Xiaomi',
//     },
//     {
//         name: 'Samsng j2',
//         price: 100,
//         color: 'Black',
//         category: 'Phone',
//         brand: 'Samsung',
//     },
//     {
//         name: 'Iphone X',
//         price: 500,
//         color: 'White',
//         category: 'Phone',
//         brand: 'Apple',
//     },
//     {
//         name: 'HP 8560',
//         price: 550,
//         color: 'Black',
//         category: 'Laptop',
//         brand: 'HP',
//     },
// ];

// 5.1
// for(i=0;i<product.length;i++){
//     console.log('---------------');
//     console.log(`#${[i+1]}. ${product[i].name }`);
//     console.log(`    Price: ${product[i].price }`);
// }

// let items = [1,2,3,4]
// for(let item of product){
//     console.log('------------');
//     console.log(`Name: ${item.name}`);
//     console.log(`Price: ${item.price}`);
// }

// 5.2
// let a = Number(prompt('Nhap vao vi tri')-1);
// for(let key in product[a]){
//     console.log(`${key.replace(key[0], key[0].toUpperCase())}: ${product[a][key]}`);
// }

// 5.3
// let b = prompt('Nhap vao category');
// for(i=0;i<product.length;i++){
//     if(b===product[i].category){
//         console.log('-------------------');
//         console.log(`Name: ${product[i].name}`);
//         console.log(`Price: ${product[i].price}`);
//     }
// }

// 5.4
// const product = [
//     {
//         name: 'Xiaomi portablecharger 20000mah',
//         price: 428,
//         color: 'White',
//         category: 'Changer',
//         brand: 'Xiaomi',
//         providers: [
//                     'Phukienzero',
//                     'Dientuccc',
//         ]
//     },
//     {
//         name: 'Samsng j2',
//         price: 100,
//         color: 'Black',
//         category: 'Phone',
//         brand: 'Samsung',
//         providers: ["Tgdd","Ddghn","VhStore"],          
//     },
//     {
//         name: 'Iphone X',
//         price: 500,
//         color: 'White',
//         category: 'Phone',
//         brand: 'Apple',
//         providers: 'Tgdd',
//     },
//     {
//         name: 'HP 8560',
//         price: 550,
//         color: 'Black',
//         category: 'Laptop',
//         brand: 'HP',
//         providers: 'Tgdd',
//     },
// ];
// for(i=0;i<product.length;i++){
//         console.log('---------------');
//         console.log(`#${[i+1]}. ${product[i].name }`);
//         console.log(`    Price: ${product[i].price }`);
//         console.log(`    Providers: ${product[i].providers }`);
// }

// 5.5
// let c = prompt('Nhap vao providers');
// for(i=0;i<product.length;i++){
//     if(c === product[i].providers){
//         console.log('-------------------');
//         console.log(`Name: ${product[i].name}`);
//         console.log(`Price: ${product[i].price}`);
//     }
// }

// Bai 6:
