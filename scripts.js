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

document.getElementById("taskTextBox")
    .addEventListener("keyup", function(event){
        event.preventDefault();
        if (event.key === 'Enter'){
            document.getElementById("btnAddTask").click()
        }
    })

btnAddTask.addEventListener('click', function(){
    
    
    const todoTitle = taskTextBox.value 
    let li = document.createElement('li')
    li.classList.add('text-lrg')
    

    //Creating checkbox
    let checkBox = document.createElement('input')
    checkBox.classList.add('check-box')
    checkBox.type ="checkbox"
    li.appendChild(checkBox)
    
    
    //Creating the ToDo task label
    let todoTextLabel = document.createElement('label')
    todoTextLabel.innerHTML = todoTitle
    li.appendChild(todoTextLabel)
    

    //Creates the remove button
    let removeButton = document.createElement('button')
    removeButton.classList.add('remove-btn')
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

    document.getElementById("taskTextBox").value=""
    
})





