// console.log(document);

// const demo = document.getElementById('demo');
// .getElementsByClassName()
// .querySelector()
// .querySelectorAll()
// console.log(demo);
// const h1=document.getElementsByClassName('title');
// console.log(h1[0]);

// querySelector
const ul = document.querySelector('.main-list');
console.log(ul);
const lis = ul.children;
console.log(lis);

console.dir(ul);
ul.textContent='hello';
ul.innerText='<li>hello 2</li>';
ul.innerHTML='hello3';

ul.style.backgroundColor='red';

// textContent
// innerHTML
// innerText
// style
// children

// appendChild()
const li =document.createElement('li');
li.id='todo-item';
li.classList.add('todo-item');
li.innerText='Go to bed';
ul.appendChild(li);
console.log(li)

// remove()
let todoItem=document.getElementById('todo-item');
console.log(todoItem);
todoItem.remove();

// Event Listener
// const demo = document.getElementById('demo');
// demo.onclick=function onAlert(){
//     alert('hello');
// };

// demo.addEventListener('click',function(){
//     alert('hello world');
// })
// demo.addEventListener('click', function(){
//     console.log('hello world');
// })
function alertFuntion(){
    alert('Hello world')
}
demo.addEventListener('click',alertFuntion);

const button = document.getElementById('remove');
button.addEventListener('click',function(){
    demo.removeEventListener('click',alertFuntion);
});
