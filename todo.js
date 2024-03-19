
const addTodos = document.querySelector('#addBtn');

const newTodos = [];

function getTodos(){
    document.querySelector('#todos').innerHTML=""
    newTodos.map((val,index)=>{
        document.querySelector('#todos').innerHTML+=`
        <li id="todoItem" onclick="readTodo()">
        <div>
            <input type="checkbox">
            ${val} 
        
        </div>

        <div>
        <button class="removeBtn shadow" onclick="deleteBtn(${index})" id="delBtn">Delete</button>
        <button class="removeBtn bg-warning" onclick="updateBtn(${index})">Update</button>
        </li>
        </div>`
        
    })
} 
//add todos
addTodos.addEventListener('click',(event)=>{
    const todo = document.querySelector('#todo').value;
    newTodos.push(todo)
    console.log(newTodos)

    document.querySelector('#todos').innerHTML=""
    getTodos()
    
})

function deleteBtn(i){
    delete newTodos[i]
    console.log(newTodos)
    getTodos()
}

function updateBtn(i){
    const todo = document.querySelector('#todo').value;
    newTodos[i] = todo
    console.log(newTodos)
    getTodos()
}

