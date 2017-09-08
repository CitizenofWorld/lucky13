// var lastListItem = document.querySelector('li:last-child');
// lastListItem.addEventListener('click', function(){
//   lastListItem.classList.add('completed');
// });

var listItems = document.querySelectorAll('li');

listItems.forEach(function(elem){
  elem.addEventListener('click', function(){
    elem.classList.add('completed');
  });
});

var addBtn = document.querySelector('.add-btn');
var newItemInput = document.querySelector('.new-item');
var todoList = document.querySelector('ul');

addBtn.addEventListener('click', function(){
  var newItemValue = newItemInput.value;
  var newListItem = document.createElement('li');
  newListItem.textContent = newItemValue;
  newListItem.addEventListener('click', function() {
    newListItem.classList.add('completed');
  });

  todoList.appendChild( newListItem );
});