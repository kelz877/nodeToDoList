let toDoURL = 'http://localhost:3000/todos'

let displayItems = document.getElementById('displayItems')


function fetchList(){
    fetch(toDoURL)
        .then(response => response.json())
        .then(json => displayList(json))

}



function displayList(tasks){
  
    let taskItems = tasks.map(task => {
        console.log(tasks)
        console.log(task.Name)
        console.log(task.Priority)
        return `<div><span>To Do Item: ${task.Name} | Priority: ${task.Priority}</div></span>`
        })
    displayItems.innerHTML = taskItems.join('')


    }

fetchList()

document.getElementById('postData').addEventListener('submit', postData);

function postData(event){
    event.preventDefault();

    let nameInput = document.getElementById('nameInput').value;
    let priorityInput = document.getElementById('priorityInput').value;
    fetch(toDoURL, {
        method: 'POST',
        body: JSON.stringify({taskName: nameInput, taskPriority: priorityInput}),
        headers:{
            'Content-type': 'application/json'
        }
    }).then(res => res.json())
    .then(json => displayList(json))
    .catch(error => console.error('Error:', error))



} 