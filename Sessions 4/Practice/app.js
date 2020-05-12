// object
// 1.Khai bao

// const person = {
//     name: 'viet',
//     age: 27,
//     single: true,
//     hobbies:[
//         'watch movies',
//         'reading news',
//         'listen to music',
//     ]
// };

// // 2. C,R,U,D
// Read
// console.log(person.name);
// let name = 'name';
// console.log(person[name]);

// // Update
// person.age=30;
// console.log(person.age);
// // Create
// person.hair=true;
// console.log(person.hair);
// // Delete
// delete person.hair;
// console.log(person);

// EX1:
// tao 1 doi tuong bat ky
// tim gg im ra toa bo cac thuoc tinh co trong doi tuong

// const person = {
//         name: 'anh',
//         age: 21,
//         single: true,
//         hobbies:[
//             'play game',
//             'play football',
//             'watch TV',
//         ]
//     };
// for(let key in person){
//     console.log(key);
//     console.log(person[key]);
// }


// EX2:
// Cho ng dung nhap vao name, age,job, single
// tao 1 doi tuong gom cac thuoc tinh nguoi dung
// Nhap vao o tren va console ra doi tuong do
// let name = prompt('Nhap vao name');
// let age = prompt('Nhap vao age');
// let job = prompt('Nhap vao job');
// let single = prompt('Nhap vao single');

// let person2 = {
//     name: name,
//     age: age,
//     job : job,
//     single : single,
// };
// let person2={};
// person2.name=name;
// person2.age=age;
// person2.job=job;
// person2.single=single;
// console.log(person2);

// Object methods
// funtion = ham

// khai bao funtion
// function doSomething(a,b,c,...){
//     return sth
// }

// function calculatorTriangles(a,h){
//     let s = a*h*0.5;
//     return s;
// }
// arguments
// console.log (calculatorTriangles(10,5));

// Object methods
// let myDog={
//     name: 'cat',
//     weight: 5,
//     color : 'white',
//     bark:function(){
//         console.log('gau gau');
//     },
//     eat: function(bone){
//         console.log(this);
//         this.weight = this.weight + bone.weight;
//     },
// };
// myDog.bark();
// myDog.eat({weight: 2});
// console.log(myDog);
// function bark(){
//     console.log('meo meo');
// }
// console.log(bark);

// const randomSring2 = new String('Hi');
// console.log(randomSring2);

// // new - Contructor funtion
// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }
// const person1 = new Person('Ngoc', 24);
// console.log(person1);

// C,R,U,D

// ung dung phone list
const phonelist = [
    {
        name: 'Ngoc',
        phone: '0123456789',
    },
    {
        name: 'Lam',
        phone: '0978654321',
    },
];
// C: Cho nguoi dung nhap vao ten va sdt moi
// R: in ra toan bo ten va sdt theo dang: ten - sdt
// U: cho ng dung tim theo ten. neu tim thay -> cho update ten va sdt
// Neu ko tim thay -> in ra ko tim thay
// D: cho ng dung tim theo ten. Neu tim thay -> cho delete
// Neu khong -> in ra ko tim thay
// sau moi lan thuac hien thao tac nay thi deu in ra toan bo cac sdt theo dang R
// while -> de chay vo han
// E -> thoat ct
function showAll(arr){
    for(i=0;i<arr.length;i++){
        console.log(`${arr[i].name}-${arr[i].phone}`);
    }
}
function checkExist(arr,search){
    let foundIndex = -1;
    for(let i=0;i<arr.length;i++){
        if(arr[i].name===search){
            foundIndex=1;
        }
    }
    return foundIndex;
}
let user = prompt('Chon C/R/U/D').toLowerCase();
if(user =='c'){
    const username = prompt('Nhap vao ten');
    const userphone = prompt('Nhap vao sdt');
    const newphone = {
        name: username,
        phone: userphone,
    }
    phonelist.push(newphone);
    showAll(phonelist);
} else if(user=='r'){
    showAll(phonelist);
} else if(user=='u'){
    const a = prompt('Nhap vao ten muon tim');
    let found = false;
    for(i=0;i<phonelist.length;i++){
        if( phonelist[i].name==a){
            phonelist[i].name= prompt('New name');
            phonelist[i].phone= prompt('New phone');
            found = true;
            showAll(phonelist);
        } 
    }
    if(found === false){
        console.log('Khong tim thay');
    }
} else if(user=='d'){
    const a = prompt('Nhap vao ten muon tim');
    let found = false;
    for(i=0;i<phonelist.length;i++){
        if( phonelist[i].name==a){
            phonelist.splice(i,1);
            found=true;
            showAll(phonelist);
        } 
    }
    if(found === false){
        console.log('Khong tim thay');
    }
} else if(user=='e') console.log('ket thuc');

