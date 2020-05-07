// Bai 1:
// let a = 5;
// let b = 6;
// console.log(a,b);
// Cach 1:
// [a,b]=[b,a];
// console.log(a,b);
// Cach 2:
// let temp;
// temp = a;
// a = b;
// b = temp;
// console.log(a,b);
//  Cach 3:
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a,b);
// Cach 4:
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;
// console.log(a,b);

// Bai 2:
// const s = 'Hello beauty there';
// const array = s.split(' ');
// console.log(array);

// Bai 3:
// const a = [4, 5, 7, -8];
// console.log(...a);
// Hơi khó hiểu xíu

// Bai 4:
// let item = ['Jeans','T-shirt','Socks'];
// let loop = true;
// while(loop){
//     let user  = prompt(`Bạn muốn chọn C/R/U/D`);
//     if (user == 'c' || user == 'C'){
//         let a = prompt('Nhập vào sản phẩm mới');
//         item.push(a);
//         alert('Sản phẩm được lên thành công');
//     } else if(user == 'r' || user == 'R'){
//         console.log('Danh sách sản phẩm:');
//         for(i=0;i<=item.length-1;i++){
//             console.log((i+1)+ '.' + item[i]);
//         }
//     } else if (user == 'u'|| user == 'U'){
//         let b = Number(prompt('Nhập vào vị trí muốn update')) - 1;
//         let c = prompt('Nhập tên sản phẩm muốn thêm');
//         item[b] = c;
//         alert('Thêm sản phẩm thành công');
//     } else if (user == 'd'|| user == 'D'){
//         let d = Number(prompt('Nhập vào vị trí muốn xóa')) - 1;
//         item.splice(d,1);
//         alert('Xóa sản phẩm thành công');
//     } else {
//         alert('Từ khóa không hỗ trợ');
//         break;
//     }
// }

// Bai 5:
// let user = (prompt('Nhập vào các số, phân cách nhau bởi dấu phảy: '));
// const a = user.split(',');
// let tong = 0;
// for(i=0;i<=a.length-1;i++){
//     tong = tong + Number(a[i]);
// }
// alert('Tổng của dãy số là:'+' '+ tong);

// Bai 6:
// let user = (prompt('Nhập vào các số, phân cách nhau bởi dấu phảy: '));
// const a = user.split(',');
// let min = a[0];
// for(i=0;i<=a.length-1;i++){
//     if(min>a[i]) min=a[i];
// }
// console.log(min);

// Bai 7:
// const arr = [3,4,6,-9,10,-88,2];
// let a = Number(prompt('Nhập vào số cần tìm'));
// for(i=0;i<=arr.length-1;i++){
//     if(arr[i]=a){
//         alert(a+' '+'nằm ở vị trí số '+(i+1));
//         break;
//     } else{
//         alert(a+' '+'Không có trong mảng');
//         break;
//     }

// Bai 8:
const size = [10,30,20,50,70,100,25,90];
console.log('Kích thước đàn cừu: ' + size);
const max = Math.max(size);
console.log(`Con cừu lớn nhất: `+ max);


// Bai 10
// let user = (prompt('Nhập tên, phân cách nhau bởi dấu phảy: '));
// const a = user.split(',');
// const b = a.map(a => `<${a}>`);
// alert( `${a} => ${b}`);

// Bai 11
// let user = (prompt('Nhập vào các số, phân cách nhau bởi dấu phảy: '));
// const a = user.split(',');
// const b = a.filter((a)=>a%2===1);
// alert( `${a} => ${b} `);
