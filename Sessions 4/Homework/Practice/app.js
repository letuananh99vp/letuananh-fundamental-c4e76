// let person = {
//     name: 'viet',
//     age: 27,
//     single: false,
//     favorites: ['film','game','ngam gai'],
//     wife: {
//         name: 'thao',
//         age: 18,
//     },
//     sayhello: function(){
//         console.log('xin chao');
//     }
// };
// // Create 
// person.address='Ha noi';
// person.sleep = function(){
//     console.log('zzzz');
// }
// // Read
// console.log(person.age);
// person.sayhello();

// // Update
// person.single = true;
// person.sayhello = function(){
//     console.log('Hihi');
// }

// // Delete
// delete person.wife;
// delete person.sayhello;

// for(let key in person){
//     console.log(person[key]);
// }

// function sayhello(name){
//     console.log('Xin chao ' + name);
// }
// // sayhello('Son');
// function sum(a,b,c){
//     return a+b+c;
// }
// let d = sum([1],[2],[3]);
// console.log(d);

// function ten (tham so 1,...){
    // code
// }

// let ten function = function(...){
// code
// }

// let ten function = (...) =>{
    // code?
// }
// let sum=(a,b,c)=>a+b+c;
// let d = sum([1,2],[3],[4,5]);
// console.log(d);
// let sum = function(a,b,c){
//     return a+b+c;
// }
// function sum(a,b,c){
//     return a+b+c;
// }

// const product = {
//     name: 'Xiaomi rice cooker',
//     price: 1700,
//     brand: 'Xiaomi',
//     color: 'white',
//     };
//     for (let x in product) {
//     console.log(`${x}:${product[x]}`);
// }

// const dictionary = {
//     debug: 'Tim loi',
//     done: 'Da tim xong',
//     defect: 'loi',
//     pm: 'ket qua',
//     ui: 'Giao dien',
// };

// alert ('Hi');
// let a = prompt('Nhap tu khoa');
// if(a=='debug'){
//     alert(dictionary.debug);
// } else if(a=='done'){
//     alert(dictionary.done);
// } else if(a=='defect'){
//     alert(dictionary.defect);
// } else if(a=='pm'){
//     alert(dictionary.pm);
// } else if(a=='ui'){
//     alert(dictionary.ui);
// }

// cach 2
// if(dictionary.hasOwnProperty(a)){
//     alert(dictionary[a]);
// } else {
//     alert('Not Found');
// }

// Cach 3

// if(dictionary.hasOwnProperty(a)){
//     alert(dictionary[a]);
//     } else {
//         let b = prompt('Ko tim thay, nhap thong tin de cap nhat');
//         dictionary[a]=b;
// }
// console.log(dictionary[a]);

// Bai 5
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
// for(i=0;i<product.length;i++){
//     console.log('---------------');
//     console.log(`#${[i+1]}. ${product[i].name }`);
//     console.log(`    Price: ${product[i].price }`);
// }
// let position = Number(prompt('Nhap vao vi tri')-1);
// for(i=0;i<product.length;i++){
//     if(position == i){
//         console.log(product[i]);
//     }
// }

// let items = [1,2,3,4]
// for(let item of product){
//     console.log('------------');
//     console.log(`Name: ${item.name}`);
//     console.log(`Price: ${item.price}`);
// }


