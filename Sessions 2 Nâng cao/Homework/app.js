// Bai 1:
// let n = Number(prompt(` Nhập vào một số bất kỳ: `));
// let a = 0;
// let b = 0;
// for (let i=0;i<=n;i++){
//     if(i%2===0){
//         a = a + i;
//     }
//     else if (i%2===1){
//         b = b + i;
//     }
// }
// console.log(a);
// console.log(b);

// Bai 2
// let n = Number(prompt(` Nhập vào một số tự nhiên bất kỳ: `));
// let loop=0;
// if (n<2){
//     console.log(`False`);
// }
// else {
//     for (let i=2;i<n-1;i++){
//         if(n%i===0){
//             console.log(`False`);
//             loop=1;
//             break;
//         }
//     }
//     if (loop===0){
//         console.log(`True`);
// }
// }

// Bai 4:
// let fn = Number(prompt(` Nhập vào số bất kỳ:`));
// let f0 = 0;
// let f1 = 1;
// if (fn==0){
//     console.log(0);
// }else if (fn==1){
//     console.log(1)
// } else {
//     let i=2,f;
//     while (i<=fn){
//         f = f0+f1;
//         f0=f1;
//         f1=f;
//         i++;
//     }
//     console.log(` Phần tử thứ ${fn} là: ${f}`);
// }

// Bai 5
// let a=0;
// let x=1;
// while(x>=0){
//     x = Number(prompt(` Nhập 1 số bất kỳ: `));
//     a=a+x;
//     }
//     console.log(a);

// Bai 7
// Cach 1:
// let m = Number(prompt(` Nhập vào chiều rộng:`));
// let n = Number(prompt(` Nhập vào chiều dài:`));
// for (i=0;i<m;i++){
//     for(j=0;j<n;j++){
//         document.write(`*`)
//     }
//     document.write(`<br>`);
// }

// Cach 2
// let m = Number(prompt(` Nhập vào chiều rộng:`));
// let n = Number(prompt(` Nhập vào chiều dài:`));
// i=1;
// while (i<=m){
//     j=1;
//     while(j<=n){
//         document.write(`*`);
//         j++;
//     }
//     document.write(`<br>`);
//     i++;
// }


// Bai 8
// for (let i=0;i<=36;i++){
//     if ((i*2)+(36-i)*4===100){
//         console.log(` Số gà: ${i}`);
//         console.log(` Số chó: ${36-i}`);
//     }
// }

// Bai 9:
// console.log(` Hệ phương trình:`);
// console.log(` a1x + b1x = c1`);
// console.log(` a2x + b2x = c2`);
// let loop=true;
// while(true){
//     let a1 = Number(prompt(` Nhập a1:`));
//     let b1 = Number(prompt(` Nhập b1:`));
//     let c1 = Number(prompt(` Nhập c1:`));
//     let a2 = Number(prompt(` Nhập a2:`));
//     let b2 = Number(prompt(` Nhập b2:`));
//     let c2 = Number(prompt(` Nhập c2:`));
//     let x = ((c1*b2-c2*b1)/(a1*b2-a2*b1));
//     let y = ((a1*c2-a2*c1)/(a1*b2-a2*b1));
//     console.log(` Giá trị của x: ${x}`);
//     console.log(` Giá trị của y: ${y}`);
//     let user = prompt(` Bạn có muốn giải tiếp HPT? trả lời yes hoặc no`);
//     if(user ==`no`||user==`No`){
//         break;
//     }
// }
