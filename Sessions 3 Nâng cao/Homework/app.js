// Bai1:
// a.
// const number=prompt('Nhap vao day so');
// let a = number.split(',');
// for(i=0;i<a.length;i++){
//     for(j=0;j<a.length;j++){
//         if(Number(a[j])<Number(a[i])) [a[j],a[i]]=[a[i],a[j]];
//     }
// }
// console.log(a[1]);
// b.
// const number=prompt('Nhap vao day so');
// let a = number.split(',');
// for(i=0;i<a.length;i++){
//     for(j=0;j<a.length;j++){
//         if(Number(a[j])>Number(a[i])) [a[j],a[i]]=[a[i],a[j]];
//     }
// }
// console.log(a[1]);
// c. Chưa xong
// const number=prompt('Nhap vao day so');
// let a = number.split(',');
// for(let i=0;i<a.length;i++){
//     for(let j=2;j<=Math.sqrt(a[i]);j++) 
//         if(a[i]%j!=0) console.log(i);
// }
// d.
// const number=prompt('Nhap vao day so');
// let a = number.split(',');
// for(i=0;i<a.length;i++){
//     for(j=0;j<a.length;j++){
//         if(Number(a[j])>Number(a[i])) [a[j],a[i]]=[a[i],a[j]];
//     }
// }
// console.log(a);
// if(a.length%2==1){
//     let x=((a.length-1)/2);
//     console.log(a[x]);
// } else if(a.length%2==0){
//     let y=(a.length/2);
//     let z=((a.length/2)-1); 
//     console.log((Number(a[y])+Number(a[z]))/2);
// }
// e. Chưa chuẩn
// const number=prompt('Nhap vao day so');
// let a = number.split(',');
// for(i=0;i<a.length;i++){
//     for(j=0;j<i;j++){
//         let x = Number(a[i])+Number(a[j]);
//         if(x==5){
//             console.log(`(${a[i]},${a[j]})`);
//         }
//         else if(x!=5) console.log('NOT FOUND');
//     }
// }

// bai2
// const user=prompt('Nhap vao cac chuoi');
// let a = user.split(',');
// for(i=0;i<a.length;i++){
//     if(a[i]!=a[a.length-i-1]) console.log('NOT FOUND');
//     else console.log(i);
// }