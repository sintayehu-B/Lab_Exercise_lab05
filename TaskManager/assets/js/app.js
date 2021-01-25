const taskInput = document.querySelector('#task');

const form = document.querySelector('#task-form');

const filter = document.querySelector('#filter');

const taskList = document.querySelector('.collection');

const clearBtn = document.querySelector('.clear-tasks');

//the reload button at the top right of navigation
const reloadIcon = document.querySelector('.fa');   
// events
form.addEventListener('submit', addNewTask);

// Event Listener for reload 
reloadIcon.addEventListener('click', reloadPage);

/// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);

// // //   Filter Task 
filter.addEventListener('keyup', filterTasks);

  // Remove task event [event delegation]
taskList.addEventListener('click', removeTask);

// Event Handler
function addNewTask(e){
    e.preventDefault(); //disable form submission

    if (taskInput.value === '') 
    {
        taskInput.style.borderColor = 'red';
       return;     //avoiding else statement

    }
        // Create an li element when the user adds a task 
        const li = document.createElement('li');
        // Adding a class
        li.className = 'collection-item';
        // Create text node and append it 
        li.appendChild(document.createTextNode(taskInput.value));
        // Create new element for the link 
        const link = document.createElement('a');
        // Add class and the x marker for a 
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append link to li
        li.appendChild(link);
        // Append to ul 
        taskList.appendChild(li);
    

    
};

function clearAllTasks(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}
function filterTasks(){
    console.log('Typing ...........');
}
function removeTask(e){
    if (e.target.parentElement.classList.contains('delete-item')){

        if (confirm('Are You Sure about that ?'))
        {
            e.target.parentElement.parentElement.remove();
        }

    }
}
// Reload Page Function 
function reloadPage() {
    //using the reload fun on location object 
    location.reload();
}









