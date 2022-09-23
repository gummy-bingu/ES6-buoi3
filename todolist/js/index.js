const taskList = new TaskList();

document.getElementById("addItem").onclick = function(){
  let valueTask = document.getElementById("newTask").value;

  if(valueTask === ""){
    alert("Vui lòng nhập task");
    return;
  }
  let task = new Task(valueTask);
  taskList.addTask(task);
  displayTask(taskList.tasks)
  
};

function deleteTask(taskID){
  taskList.delete(taskID);
  displayTask(taskList.tasks);
}
function completeTask(taskID){
  let task = taskList.findTask(taskID);
  taskComplete.addTask(task);
}



function displayTask(taskList) {
  const html = taskList.reduce((result, task) => {
    return (
      result +
      `
       <span id="valueTask">${task.task}</span>
       <i class="fa fa-trash-alt" onclick="deleleTask('${task.task}')"></i>
       <i class="fa fa-check" id="completeTask" onclick="completeTask('${task.task}')"></i>

      `
    );
  }, "");
  document.getElementById("todo").innerHTML = html;
}