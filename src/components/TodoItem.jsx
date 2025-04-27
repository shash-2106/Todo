import React from 'react'

const TodoItem = ({ task,deleteTask,toggleCompleted }) => {
  function handleChange(){
    toggleCompleted(task.id)
  }
  return (
    <div className="todo-item">
      <input type="checkbox" checked={task.completed} onChange={handleChange}
      />
      <p>{task.text}</p>
      <button className="text-red-800 font-winkyRough p-2" onClick={()=> deleteTask(task.id)}>Delete</button>
    </div>
  )
}

export default TodoItem
