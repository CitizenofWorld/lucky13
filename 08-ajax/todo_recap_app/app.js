var todos = ['one', 'two', 'three'];
var $todoList = $('#todo-list');
var $newTodoInput = $('#new-todo-input');
var $addTodoBtn = $('#add-todo-btn');

$addTodoBtn.on('click', function() {
  var newTodoValue = $newTodoInput.val();
  addTodo(newTodoValue);
  $newTodoInput.val(''); 
});

$('ul').on('click', 'li', function(e) {
  $(e.target).toggleClass('completed');
});

function loadTodos(todos) {
  todos.forEach(function(todo) {
    addTodo(todo);
  })
}

function addTodo(text) {
  var $newListItem = $('<li>').text(text);
  $todoList.append( $newListItem );
}

loadTodos(todos);