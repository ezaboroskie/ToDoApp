const btnAddTask = document.getElementById("btnAddTask")
const taskTextBox = document.getElementById("taskTextBox")
const taskPendingBox = document.getElementById('taskPendingBox')
const taskCompletedBox = document.getElementById('taskCompletedBox')

function emptyField(){
if(document.getElementById("taskTextBox").value ===""){
    document.getElementById("btnAddTask").disabled=true;
        }
        else
        {
    document.getElementById("btnAddTask").disabled=false;
}
}


btnAddTask.addEventListener('click', function(){
    
    
    const todoTitle = taskTextBox.value 
    let li = document.createElement('li')
    

    //Creating checkbox
    let checkBox = document.createElement('input')
    checkBox.type ="checkbox"
    li.appendChild(checkBox)
    
    
    //Creating the ToDo task label
    let todoTextLabel = document.createElement('label')
    todoTextLabel.innerHTML = todoTitle
    li.appendChild(todoTextLabel)
    

    //Creates the remove button
    let removeButton = document.createElement('button')
    removeButton.classname= "removeButton"
    removeButton.setAttribute('class', "btn btn-outline-primary my-button")
    removeButton.addEventListener('click', function() {
        removeButton.parentElement.remove()   
    })

    removeButton.innerHTML = 'Remove'
    li.appendChild(removeButton)
    taskPendingBox.appendChild(li)
    
   
    checkBox.addEventListener('click', function(){
        if(this.checked){
    taskCompletedBox.appendChild(li)}
        else{
    taskPendingBox.appendChild(li)}
    })

})





