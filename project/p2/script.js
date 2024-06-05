document.addEventListener('DOMContentLoaded',()=>{
    const taskInput=document.getElementById('textinput')
    const addTaskButton=document.getElementById('addtaskbutton')
    const taskList=document.getElementById('tasklist')

    addTaskButton.addEventListener('click', addTask)
    function addTask(){
        const tasktext = taskInput.value.trim();//Q1
        if(tasktext ===""){
            alert('Enter Task Please');
            return;
        }
        const taskItem=document.createElement('li');
        console.log(taskItem);
        taskItem.textContent  = tasktext;

        const deleteButton= document.createElement('button');
        deleteButton.textContent="Delete";

        deleteButton.addEventListener('click',()=>{
            taskList.removeChild(taskItem);
            taskList.removeChild(deleteButton);
        });
        taskItem.addEventListener('click',()=>{
            taskItem.classList.toggle('Completed');//Q2
        });
        taskList.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        console.log(taskItem)
        taskInput.value="";

    }
});