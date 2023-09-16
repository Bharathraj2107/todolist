let button=document.getElementById('add')
let todolist=document.getElementById('todoList')
let input=document.getElementById('input');

let todos=[];
window.onload=()=>{
  todos=JSON.parse(localStorage.getItem('todos'))||[]
    todos.forEach(todo=>addtodo(todo))
}


button.addEventListener('click',()=>{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(input.value)
    input.value=''
})
//when add is clicked the activity is added
function addtodo(todo){
let para=document.createElement('p')
para.innerText=todo;
todoList.appendChild(para)

para.addEventListener('click',()=>{
    para.style.textDecoration='line-through'
    remove(todo)
})
// when double clicked on the element the element is removed
para.addEventListener('dblclick',()=>{
    todoList.removeChild(para)
    remove(todo)
})
}
//function for remove
function remove(todo){
    let index=todos.indexOf(todo)
    if(index>-1){
    todos.splice(index,1);
    }
    localStorage.setItem('todos',JSON.stringify(todos))
}