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
        todoList.innerHTML += "<li>" + item.title + "</li>";
})    
    
});

