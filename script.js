
    document.addEventListener('DOMContentLoaded', () => {

        // Get the necessary HTML elements from the page
        const todoInput = document.getElementById('todo-input');
        const addButton = document.getElementById('add-button');
        const todoList = document.getElementById('todo-list');

        
        const addTask = () => {
           
            const taskText = todoInput.value.trim();

          
            if (taskText === '') {
                alert('Please enter a task!');
                return;
            }

            
            const listItem = document.createElement('li');

           
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;

            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-btn'; 

           
            deleteButton.onclick = () => {
                todoList.removeChild(listItem);
            };

            
            listItem.appendChild(taskSpan);
            listItem.appendChild(deleteButton);

            
            todoList.appendChild(listItem);

            
            todoInput.value = '';
        };

      
        addButton.addEventListener('click', addTask);

        
        todoInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                addTask();
            }
        });
    });
    