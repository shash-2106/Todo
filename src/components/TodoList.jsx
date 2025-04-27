import React, { useState, useEffect } from 'react'
import TodoItem from './TodoItem';


const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('')
    const [rewardPoints, setRewardPoints] = useState(0);
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        const savedRewardPoints = JSON.parse(localStorage.getItem('rewardPoints'));
    
        if (savedTasks && savedTasks.length > 0) {
            setTasks(savedTasks);
        }
        if (savedRewardPoints) {
            setRewardPoints(savedRewardPoints);
        }
    
        setLoading(false);
    }, []);
    
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
        localStorage.setItem('rewardPoints', JSON.stringify(rewardPoints));
    }, [tasks, rewardPoints]);

    
    
    function addTask(text){
        const newTask = {
            id: Date.now(),
            text: text,
            completed: false
        }
        setTasks([...tasks, newTask])
        setNewTask('')
        setRewardPoints(prev => prev + 10);
    }
    function deleteTask(id){
        const newTasks = tasks.filter(task => task.id !== id)
        setTasks(newTasks)
    }
    function toggleCompleted(id){
        setTasks(tasks.map(task => {
            if (task.id === id) {
                if (!task.completed) {
                    setRewardPoints(prev => prev + 20); 
                }
                return { ...task, completed: !task.completed };
            } else {
                return task;
            }
        }));
    }
    function completedTasks(){
        return(tasks.filter(task => task.completed))
        
    }
    function remainingTasks(){
        return(tasks.filter(task => !task.completed))
    }




    return (
        <div>
            {loading ? (
                <p className="text-center font-winkyRough text-lg text-gray-500 mt-4">Loading...</p>
            ) : (
                <>
                    <div className="todo-list">
                        {tasks.length > 0 ? (
                            tasks.map(task => (
                                <TodoItem
                                    key={task.id}
                                    task={task}
                                    deleteTask={deleteTask}
                                    toggleCompleted={toggleCompleted}
                                />
                            ))
                        ) : (
                            <p className="text-center font-winkyRough text-gray-600 mb-2">No tasks yet!</p>
                        )}
                        <input
                            value={newTask}
                            onChange={e => setNewTask(e.target.value)}
                            className="border p-1 rounded mb-2"
                        />
                        <button
                            className="font-winkyRough mt-2 mx-1 text-[13px] bg-green-700 text-white p-1 hover:bg-green-900"
                            onClick={() => addTask(newTask)}
                        >
                            Add Task
                        </button>
                        <button
                            className="mt-2 font-winkyRough text-[13px] bg-red-300 text-white p-1 hover:bg-red-800"
                            onClick={() => {
                                setTasks([]);
                                setRewardPoints(0);
                            }}
                        >
                            Reset All
                        </button>
                    </div>
    
                    <div className="bg-yellow-300 p-2 rounded-lg shadow-2xs mt-4 flex flex-col">
                        <p className="font-winkyRough text-orange-900">
                            Reward snails: {rewardPoints}
                        </p>
                    </div>
                    <div>
                        <h3 className="bg-cyan-600 font-winkyRough text-white mt-3">Completed</h3>
                        <p>{
                            completedTasks().length > 0 ? (
                                completedTasks().map(task => (
                                    task.text + ','
                                ))
                            ) : (
                                <p className="text-center font-winkyRough text-gray-600 mb-2">No completed tasks yet!</p>
                            )
                            }</p>
                    </div>
                    <div>
                        <h3 className="bg-cyan-600 font-winkyRough text-white mt-3">Remaining</h3>
                        <p>{
                            remainingTasks().length > 0 ? (
                                remainingTasks().map(task => (
                                    task.text + ','
                                ))
                            ) : (
                                <p className="text-center font-winkyRough text-gray-600 mb-2">No remaining tasks yet!</p>
                            )
                            }</p>
                    </div>
                </>
            )}
        </div>
    );
    }

export default TodoList

