// access input field
const input = document.querySelector('#todo-input');

// Listening to click event from "Add" button.
document.querySelector('#submit').addEventListener('click', () => {
  // value of the input field
  const inputData = input.value;
  input.value = "";

  // creating todo item element
  const todo_el = document.createElement('div');
  todo_el.classList.add('todo-item');

  const todo_content_el = document.createElement('div');
  todo_el.appendChild(todo_content_el);

  const todo_input_el = document.createElement('input');
  todo_input_el.classList.add('text');
  todo_input_el.type = 'text';
  todo_input_el.value = inputData;
  todo_input_el.setAttribute('readonly', 'readonly');

  todo_content_el.appendChild(todo_input_el);

  const todo_actions_el = document.createElement('div');
  todo_actions_el.classList.add('action-items');

  const todo_done_el = document.createElement('i');
  todo_done_el.classList.add('fa-solid');
  todo_done_el.classList.add('fa-check');

  const todo_edit_el = document.createElement('i');
  todo_edit_el.classList.add('fa-solid');
  todo_edit_el.classList.add('fa-pen-to-square');
  todo_edit_el.classList.add('edit');

  const todo_delete_el = document.createElement('i');
  todo_delete_el.classList.add('fa-solid');
  todo_delete_el.classList.add('fa-trash');

  todo_actions_el.appendChild(todo_done_el)
  todo_actions_el.appendChild(todo_edit_el);
  todo_actions_el.appendChild(todo_delete_el);

  todo_el.appendChild(todo_actions_el);
  console.log(todo_el)
  // add the todo-item to lists
  document.querySelector('.todo-lists').appendChild(todo_el);
// Create status element
const todo_status_el = document.createElement('span');
todo_status_el.classList.add('status');
todo_status_el.textContent = 'Pending'; // Default status

// Add status to the content element
todo_content_el.appendChild(todo_status_el);

// done functionality
todo_done_el.addEventListener('click', () => {
  todo_input_el.classList.add('done');
  todo_status_el.textContent = 'Completed';
  todo_status_el.classList.add('completed');

  // Remove done button
  todo_actions_el.removeChild(todo_done_el);

  // Add close/delete button (only shown after completion)
  const close_button_el = document.createElement('i');
  close_button_el.classList.add('fa-solid', 'fa-xmark', 'close-btn');
  todo_actions_el.appendChild(close_button_el);

  // Close button functionality
  close_button_el.addEventListener('click', () => {
    document.querySelector('.todo-lists').removeChild(todo_el);
  });
});


  // edit functionality
  todo_edit_el.addEventListener('click', (e) => {
    if (todo_edit_el.classList.contains("edit")) {
      todo_edit_el.classList.remove("edit");
      todo_edit_el.classList.remove("fa-pen-to-square");
      todo_edit_el.classList.add("fa-x");
      todo_edit_el.classList.add("save");
      todo_input_el.removeAttribute("readonly");
      todo_input_el.focus();
    } else {
      todo_edit_el.classList.remove("save");
      todo_edit_el.classList.remove("fa-x");
      todo_edit_el.classList.add("fa-pen-to-square");
      todo_edit_el.classList.add("edit");
      todo_input_el.setAttribute("readonly", "readonly");
    }
  });

  // delete functionality
  todo_delete_el.addEventListener('click', (e) => {
    console.log(todo_el);
    document.querySelector('.todo-lists').removeChild(todo_el);
  });
})
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const icon = themeBtn.querySelector('i');
  if (document.body.classList.contains('light-mode')) {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
});
