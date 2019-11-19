document.addEventListener("DOMContentLoaded", () => {

  const submit = document.querySelector('#create-task-form')
  const task = document.querySelector('#tasks')
  // const form = document.querySelector('form')
  
  submit.addEventListener('submit', function(e){
    e.preventDefault()

    const li = document.createElement('li') //create a li element
    const taskInput = document.querySelector('#new-task-description')
    li.innerText = taskInput.value //populated it

    const p = document.createElement('p')
    const dateInput = document.querySelector('#due-date')
    p.innerText = dateInput.value

    //select the dropdown options and append the value to the To Dos
    const h4 = document.createElement('h4')
    const prioityInput = document.querySelector('select')
    h4.innerText = prioityInput.value
    task.append(li, p, h4) //so we are updating li, p and task
    
    const button = document.createElement('button') //create button
     button.id = button.id
     button.innerText = 'Delete' 
     task.append(button) //updating 
     
      button.addEventListener('click', function(){
      task.remove(li, p, h4) //created a click event that removes the elements in the To Dos
      task.removeChild(button) //at the same time we delete the button
    })

    document.getElementById('')
    function changeColor(){
      document.querySelector('#red')
      document.

    }
  
  })
});
