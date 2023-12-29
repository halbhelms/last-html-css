let todos = []

function addTodo(event) {
  let todo = {
    completed: false,
    task: event.target.value,
    id: Math.random().toString(36).substring(2, 9)
  }
  if (todo.task.length) {
    todos.push(todo)
  }
  saveTodos()
  document.querySelector('input[name="task"]').value = ''
}

function saveTodos() {
  let savedTodos = JSON.stringify(todos)
  localStorage.setItem('todos', savedTodos) 
  displayTodos()
}

function getTodos() {
  return JSON.parse(localStorage.getItem('todos'))
}

function createTodoInput() {
  let wrapper = document.createElement('div')
  wrapper.id = 'wrapper'
  let input = document.createElement('input')
  input.name = 'task'
  input.addEventListener('blur', addTodo)
  wrapper.appendChild(input)
  let outputArea = document.querySelector('#todo-form')
  outputArea.appendChild(wrapper)
}

function toggleStatus(event) {
  // Retrieve the id of the clicked checkbox
  let id = event.target.id;

  // Find the corresponding todo in the todos array
  let todo = todos.find(todo => todo.id === id);
  if (todo) {
    // Toggle the completed status of the todo
    todo.completed = !todo.completed;
  }

  // Save the updated todos back to local storage and update the display
  saveTodos();
}


function createTodoItem(todo) {
  let wrapper = document.createElement('div')
  let checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.id = todo.id
  checkbox.checked = todo.completed ? true : false
  checkbox.addEventListener('click', toggleStatus)
  wrapper.appendChild(checkbox)
  let text = document.createElement('p')
  text.innerHTML = todo.task
  if (todo.completed) {
    text.classList.add('completed')
  }
  wrapper.appendChild(text)
  return wrapper
}

function displayTodos() {
  let todos = JSON.parse(localStorage.getItem('todos')) || []
  let outputArea = document.querySelector('#todo-list')
  outputArea.innerHTML = ''
  todos.forEach(function (todo) {
    outputArea.appendChild(createTodoItem(todo))
  })
}

createTodoInput()
displayTodos()
