document.addEventListener("DOMContentLoaded", () => {
  const submit = document.querySelector('#create-task-form')
  const task = document.querySelector('#tasks')
  
  submit.addEventListener('submit', function(e){
    e.preventDefault()
    
    const li = document.createElement('li') //create element
    const taskInput = document.querySelector('#new-task-description')
    li.innerText = taskInput.value //populated it
    task.append(li) //so we are updating li and task
    
    const button = document.createElement('button') //create button
    
     button.innerText = 'x' 
     task.append(button) //updating 
     
      button.addEventListener('click', function(){
      task.removeChild(li)
      task.removeChild(button)
    })
  
  })
});
