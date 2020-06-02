// bai1
// const buttonMinus = document.getElementById('minus');
// console.log(buttonMinus);
// buttonMinus.addEventListener('click',function(){
//     const result = document.getElementById('number');
//     result.innerText = result.innerText-1;
//     console.log(result.innerText);
// })
// const buttonAdd = document.getElementById('add');
// console.log(buttonAdd);
// buttonAdd.addEventListener('click',function(){
//     const add = document.getElementById('number');
//     add.innerText++;
//     console.log(add.innerText);
// })

// Bai 2
// let button = document.getElementById('change')
// let text = document.getElementById('text')
// button.addEventListener('click',function(){
//     // text.style.backgroundColor="red"
//     if(text.style.backgroundColor =="red"){
//         text.style.backgroundColor="black"
//     } else text.style.backgroundColor="red"
// })

// button.onclick = function(){
// };
// Bai 3
// let button = document.getElementById('change')
// let text = document.getElementById('text')
// button.addEventListener('click',function(){
//     // if(text.style.display == 'none'){
//     //     text.style.display = 'block';
//     // } else text.style.display = 'none';
//     text.classList.toggle('hide');
// });

// bai 4
// let button = document.getElementById('change')
// let text = document.getElementById('text')
// button.addEventListener('click',function(){
//     let redValue = Math.round(Math.random()*255);
//     let greenValue = Math.round(Math.random()*255);
//     let blueValue = Math.round(Math.random()*255);
//     text.style.backgroundColor = `rgb(${redValue},${greenValue},${blueValue})`;
// });

// bai 5
// let button = document.getElementById('btn2');
// let list = document.getElementById('list');
// button.addEventListener('click',function(){
//     let items = list.getElementsByTagName('li');
//     for(let item of items){
//         let btn = item.getElementsByTagName('button');
//         if(btn.length==0){
//         item.innerHTML += "<button>&times;</button>";
//             // item.innerHTML = item.innerHTML + '....'
//         }
//     }
// })

// Flex box tỏ tình
// let yes = document.getElementById('yes');
// let no = document.getElementById('no');
// no.addEventListener('mouseover',function(){
//     no.innerText='Có';
// })
// no.addEventListener('mouseout',function(){
//     no.innerText='Không';
// })

// transform 3D css