const taskInput = document.querySelector('#task');

const form = document.querySelector('#task-form');

const filter = document.querySelector('#filter');

const taskList = document.querySelector('.collection');

const clearBtn = document.querySelector('.clear-tasks');

const sortBtn = document.querySelector('#sort');
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

// Sorting from the list 
sortBtn.addEventListener('click',sortTask )
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
        // adding the date 

        // Append to ul 
        taskList.appendChild(li);

        

    
};

function clearAllTasks(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
        
    }
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
// search filter
function filterTasks(e){
    const key = e.target.value;
    populateTaskList(key);
}
function populateTaskList(key) {
    let lists  = taskList.querySelectorAll(".collection-item");
    lists.forEach(element => {
        if(element.textContent.includes(key)){
            console.log(element.textContent);
            element.style.display = "block";
        }
        else{
            element.style.display = "None";
        }
    });
}

// Sorting Task

function sortList() {
	var list, i, switching, b, shouldSwitch;
	list = document.getElementById('c');
	switching = true;

	while (switching) {
		switching = false;
		b = list.getElementsByTagName('li');

		for (i = 0; i < b.length - 1; i++) {
			shouldSwitch = false;

			if (b[i].lastChild.textContent > b[i + 1].lastChild.textContent) {
				shouldSwitch = true;
				break;
			}
		}
		if (shouldSwitch) {
			b[i].parentNode.insertBefore(b[i + 1], b[i]);

			switching = true;
		}
	}
}

function sortListD() {
	var list, i, switching, b, shouldSwitch;
	list = document.getElementById('c');
	switching = true;

	while (switching) {
		switching = false;
		b = list.getElementsByTagName('li');
		for (i = 0; i < b.length - 1; i++) {
			shouldSwitch = false;

			if (b[i].lastChild.textContent < b[i + 1].lastChild.textContent) {
				shouldSwitch = true;
				break;
			}
		}
		if (shouldSwitch) {
			b[i].parentNode.insertBefore(b[i + 1], b[i]);
			switching = true;
		}
	}
	console.log(list);
}






