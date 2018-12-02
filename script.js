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
//Add Task Event
	form.addEventListener('submit', addTask);
//Delete Task Event
	taskList.addEventListener('click', removeTask);
//Clear Task Event
	clearBtn.addEventListener('click', clearTasks);
//Filter Task Event
	filter.addEventListener('keyup', filterTask);
//Complete Task Event
/*	taskList.addEventListener('click', completeTask);
}*/


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

}
//Clear input
	taskInput.value = '';

	e.preventDefault();
}



//Delete Task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')) {
	if (confirm("Are you Sure?")) {
	e.target.parentElement.parentElement.remove();
	}
}
}

//Clear Task
function clearTasks(e){

/*less code but slower*/
	//taskList.innerHTML = '';
	while(taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}
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
})}};

//Complete Task
/*function completeTask(e){

const list =  (e.target.classList.contains('collection-item'));

if (list === true){
	(this.style.textDecoration = "line-through");
	console.log('true brAH');

}
};*/