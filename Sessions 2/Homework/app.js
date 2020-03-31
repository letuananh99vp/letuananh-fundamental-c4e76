//Bài 1:
// let user = Number(prompt(` Nhập vào số bất kỳ: `));
// console.log(user);
// if (user<0){
//     console.log(`invalid input`);
// } else if(user>0){
//     let a = 1;
//     for(let i=1;i<=user;i++){
//         a = a * i;
//     }
//     console.log(a);
// }

// Bài 2:
// let nameUser = (prompt(` Nhập tên của bạn: `));
// let ageUser = Number(prompt(` Nhập tuổi của bạn: `));
// console.log(`${nameUser} ${ageUser} tuổi`);
// if (ageUser<18){
//     console.log(`${nameUser} chưa đủ tuổi vào trang web này`);
// } else if(ageUser>=18){
//     a = prompt(`${nameUser} có muốn đăng nhập vào trang web này không? yes hoặc no`);
//     if (a==`yes`){
//         console.log(`${nameUser} đã vào trang web thành công!`);
//     }
//     if (a==`no`){
//         console.log(`${nameUser} đã rời khỏi trang web!`);
//     }
// }

// Bài 3:
// let userName = prompt(` Nhập username: `);
// let passWord = prompt(` Nhập password: `);
// let userName2 = `lakillah`;
// let passWord2 = `123456`;
// if ( userName === userName2 && passWord === passWord2){
//     console.log(`Đăng nhập thành công`);
// } else if (userName != userName2){
//     console.log(`username sai`);
// } else if (passWord != passWord2){
//     console.log(`password sai`);
// }

// Bài 4: 
// let nameUser = prompt(` Nhập tên của bạn: `);
// let month = Number(prompt(` Nhập tháng sinh của bạn: `));
// switch (month){
//     case 1:
//     case 2:
//     case 3:
//         console.log(nameUser + ` sinh vào mùa xuân `);
//         break;
//     case 4:
//     case 5:
//     case 6:
//         console.log(nameUser + ` sinh vào mùa hạ`);
//         break;
//     case 7:
//     case 8:
//     case 9:
//         console.log(nameUser + ` sinh vào mùa thu`);
//         break;
//     case 10:
//     case 11:
//     case 12:
//         console.log(nameUser + ` sinh vào mùa đông`);
//         break;
//     default:
//         console.log(` không hợp lệ`);
//         break;
// }

// Bài 5:
// console.log(` ax^2 + bx + c = 0`);
// let loop = true;
// while (true) {
//     let a = Number(prompt(` Nhập giá trị tham số a: `));
//     let b = Number(prompt(` Nhập giá trị tham số b: `));
//     let c = Number(prompt(` Nhập giá trị tham số c: `));
//     let delta = (b*b) - (4*a*c);
//     if (delta<0) {
//         console.log(`Phương trình vô nghiệm`);
//     } else if (delta === 0) {
//         let x = -(b/(2*a));
//         console.log(` Phương trình có nghiệm kép: x1 = x2 = ${x}`);
//     } else if (delta > 0){
//         let x1 = ((-b + Math.sqrt(delta))/(2*a));
//         let x2 = ((-b - Math.sqrt(delta))/(2*a));
//         console.log( `Phương trình có 2 nghiệm: x1 = ${x1}, x2 = ${x2}`);
//     }
//     let user = prompt(` Bạn có muốn giải tiếp phương trình không? yes hoặc no`);
//     if (user == `no`){
//     break;
//     }
// }

// Bài 6:
// let loop=true;
// while (true){
//     let randomString = prompt(` Nhập một chuỗi bất kỳ`);
//     let a = ``;
//     for ( let i =randomString.length-1 ; i>=0; i--){
//         a = a + randomString[i];
//     }
//     console.log(a);
//     let user = prompt(` Bạn có muốn tiếp tục chương trình không? yes hoặc no`);
//     if (user == `no`){
//     break;
//     }
// }

