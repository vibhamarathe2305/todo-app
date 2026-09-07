fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        console.log(data[0]);

        let todoList = document.querySelector("#todoList")
        

        data.forEach(function(item){
        console.log(item.title)
        todoList.innerHTML += "<li>" + "<input type='checkbox' data-id='" + item.id + "'>" + item.title + "</li>";
});  

    });

let addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click",function(){
    let newTodo = document.querySelector("#todoInput").value;

    fetch("https://jsonplaceholder.typicode.com/todos", {   
     method: "POST",
     body: JSON.stringify({title: newTodo, completed: false})   
    })

    .then(function(response){
        return response.json()
    })

    .then(function(data){
        let todoList = document.querySelector("#todoList")
        console.log(data);
        todoList.innerHTML += "<li>" + newTodo + "</li>"
    })

}) 


let todoList = document.querySelector("#todoList");


todoList.addEventListener("click", function(event){
    let todoId = event.target.dataset.id
    console.log(todoId);

    fetch("https://jsonplaceholder.typicode.com/todos" + "/" + todoId, {
        method: "PUT",
        body: JSON.stringify({completed: true})
    })
})
