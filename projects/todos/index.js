let todos = []

document.querySelector('button').addEventListener('click', function(event) {
  // create todo object
  // add todo object to todos array
  todos.push(todo)
  // save todos to localstorage
})

function addTodo(task) {
  let todo = {
    status: 'undone',
    task: task
  }
  todos.push(todo)
  saveTodos()
}

function saveTodos() {
  let savedTodos = JSON.stringify(todos)
  localStorage.setItem('todos', savedTodos) 
}

function getTodos() {
  return JSON.parse(localStorage.getItem('todos'))
}

function createTodoInput() {
  let wrapper = document.createElement('div')
  let input = document.createElement('input')
  input.name = 'task'
  wrapper.appendChild(input)
  let button = document.createElement('button')
  button.addEventListener('click', function(event) {
    addTodo(event.target.value)
  })
}