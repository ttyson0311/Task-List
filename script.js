//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners () {

//DOM Load Event
	document.addEventListener('DOMContentLoaded',getTasks)
//Add Task Event
	form.addEventListener('submit', addTask);
//Delete Task Event
	taskList.addEventListener('click', removeTask);
//Clear Task Event
	clearBtn.addEventListener('click', clearTasks);
//Filter Task Event
	filter.addEventListener('keyup', filterTask);
//Complete Task Event
//	taskList.addEventListener('click', completeTask);

}

//Get task from Local Storage
function getTasks() {
	let tasks;
	if (localStorage.getItem('tasks') === null){
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

tasks.forEach(function(task) {
//create list item
	const li = document.createElement('li');

//Add class
	li.className = 'collection-item';

//Create text node
	li.appendChild(document.createTextNode(task));

//Create link
	const link = document.createElement('a');

//Add Link Class
	link.className = 'delete-item secondary-content';

//Add Icon HTML
	link.innerHTML ='<i class="fa fa-minus"></i>';

//Append link to li
	li.appendChild(link);

//Append li to ul
	taskList.appendChild(li);

}) 
}

//Add Task
function addTask(e){
	if (taskInput.value === ''){
		alert('Add a task');
	} else {

//create list item
	const li = document.createElement('li');

//Add class
	li.className = 'collection-item';

//Create text node
	li.appendChild(document.createTextNode(taskInput.value));

//Create link
	const link = document.createElement('a');

//Add Link Class
	link.className = 'delete-item secondary-content';

//Add Icon HTML
	link.innerHTML ='<i class="fa fa-minus"></i>';

//Append link to li
	li.appendChild(link);

//Append li to ul
	taskList.appendChild(li);

//Store in Local Storage
	storeTaskInLS(taskInput.value)
}
//Clear input
	taskInput.value = '';

	e.preventDefault();
}

// Store Task
function storeTaskInLS(task) {
	let tasks;
	if (localStorage.getItem('tasks') === null){
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.push(task);

	localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Delete Task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')) {
	if (confirm("Are you Sure?")) {
	e.target.parentElement.parentElement.remove();

	// Delete from Local Storage
	deleteTaskFromLocalStorage(e.target.parentElement.parentElement);
	}
}
}

//Remove from Local Storage
function deleteTaskFromLocalStorage(taskItem) {
		let tasks;
	if (localStorage.getItem('tasks') === null){
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

tasks.forEach(function(task, index){
	if(taskItem.textContent === task){
		tasks.splice(index, 1);
	}
});

localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Clear Task
function clearTasks(e){

/*less code but slower*/
	//taskList.innerHTML = '';
	while(taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}

//Clear from Local storage
clearTasksFromLocalStorage();	
}

//Clear Task from Local Storage 
function clearTasksFromLocalStorage() {
	localStorage.clear();
}
//Filter Task

function filterTask(e) {
	const text = e.target.value;

//for each to select everything in list and loop through each itemm
document.querySelectorAll('.collection-item').forEach
(function(task){
//storing the value of the foreach loop in item 
	const item = task.firstChild.textContent;
//convert values to lower case and if alue matches list disla text
	if(item.toLowerCase().indexOf(text) != -1) {
		task.style.display = 'block';
	} else {
		task.style.display = 'none';
	}
})};

//Complete Task
/*function completeTask(e){

const list =  (e.target.classList.contains('collection-item'));

if (list === true){
	(this.style.textDecoration = "line-through");
	console.log('true brAH');

}
};*/