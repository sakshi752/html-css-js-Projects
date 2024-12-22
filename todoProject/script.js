const todoCont = document.getElementById("todos-container");
const myForm = document.getElementById("myForm");
const todos = []; // Array to store todos
let isEditing = false; // Track edit mode
let currentEditIndex = null; // Track current todo being edited

// Utility function: Format date to DD/MM/YYYY
const formatDateDDMMYYYY = (date) => {
    const newDate = new Date(date);
    const day = newDate.getDate().toString().padStart(2, '0');
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
    const year = newDate.getFullYear();
    return `${day}/${month}/${year}`;
};

// Utility function: Save todos to localStorage
const saveToLocalStorage = () => {
    localStorage.setItem("todo", JSON.stringify(todos));
};

// Utility function: Render a single todo
const renderTodo = (todo, index) => {
    const newTodoDiv = document.createElement('div');
    newTodoDiv.innerHTML = `
        <p>${todo.text}</p>
        <p>${todo.date}</p>
        <div>
            <button class="delete-btn" data-index="${index}">Delete</button>
            <button class="edit-btn" data-index="${index}">Edit</button>
        </div>
    `;

    // Attach delete functionality
    const deleteBtn = newTodoDiv.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => deleteTodo(index, newTodoDiv));

    // Attach edit functionality
    const editBtn = newTodoDiv.querySelector('.edit-btn');
    editBtn.addEventListener('click', () => editTodo(index));

    // Append to container
    todoCont.appendChild(newTodoDiv);
};

// Add a new todo
const addTodo = (todoInput, dateInput) => {
    const newTodo = { text: todoInput.value, date: formatDateDDMMYYYY(dateInput.value) };
    todos.push(newTodo);

    // Render the newly added todo
    renderTodo(newTodo, todos.length - 1);

    // Clear input fields
    todoInput.value = "";
    dateInput.value = "";

    // Save to localStorage
    saveToLocalStorage();
};

// Edit an existing todo
const editTodo = (index) => {
    const todoInput = myForm.querySelector('#todo-input');
    const dateInput = myForm.querySelector('#todo-date');
    const submitBtn = myForm.querySelector('#submit-btn');

    isEditing = true;
    currentEditIndex = index;

    submitBtn.textContent = "Edit";

    const [day, month, year] = todos[index].date.split('/');
    todoInput.value = todos[index].text;
    dateInput.value = `${year}-${month}-${day}`;
};

// Delete a todo
const deleteTodo = (index, element) => {
    todos.splice(index, 1);
    todoCont.removeChild(element);

    if (todos.length === 0) {
        localStorage.removeItem("todo");
    } else {
        saveToLocalStorage();
    }

    // Re-render all todos to update indices
    refreshTodos();
};

// Re-render all todos
const refreshTodos = () => {
    todoCont.innerHTML = ""; // Clear current list
    todos.forEach((todo, index) => renderTodo(todo, index)); // Re-render with updated indices
};

// Handle form submission
myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const todoInput = myForm.querySelector('#todo-input');
    const dateInput = myForm.querySelector('#todo-date');
    
    const submitBtn = myForm.querySelector('#submit-btn');

    if (todoInput.value === "" || dateInput.value === "") {
        alert("Enter inputs");
        return;
    }

    if (isEditing) {
        const updatedTodo = {
            text: todoInput.value,
            date: formatDateDDMMYYYY(dateInput.value),
        };
        todos[currentEditIndex] = updatedTodo;

        saveToLocalStorage();
        refreshTodos();

        submitBtn.textContent = "Add Todo";
        isEditing = false;
        currentEditIndex = null;

        todoInput.value = "";
        dateInput.value = "";
    } else {
        addTodo(todoInput, dateInput);
    }
});

// Load todos from localStorage on window load
window.onload = function () {
    const localTodos = JSON.parse(localStorage.getItem("todo"));

    if (localTodos && Array.isArray(localTodos)) {
        localTodos.forEach((todo, index) => {
            todos.push(todo); // Sync with current todos array
            renderTodo(todo, index);
        });
    }
};
