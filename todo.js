let todoList = [
  {
    Item: "go to collage",
    Date: "12/03/2002",
  },
  {
    Item: "buy milk",
    Date: "12/03/2002",
  },
];
todoDisplay();

function addTodo() {
  let text = document.querySelector("#todoText");
  let InputText = text.value;
  let date = document.querySelector("#todoDate");
  let InputDate = date.value;
  todoList.push({ Item: InputText, Date: InputDate });
  text.value = "";
  date.value = "";
  todoDisplay();
}

function todoDisplay() {
  let containerItem = document.querySelector(".todo-Container");
  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    let todoItem = todoList[i].Item;
    let todoDate = todoList[i].Date;
    newHtml += `    
    <span>${todoItem}</span>
    <span>${todoDate}</span>
    <button class="tododelete" onclick="todoList.splice(${i},1);
    todoDisplay();">Delete</button>
    `;

    containerItem.innerHTML = newHtml;
  }
}
