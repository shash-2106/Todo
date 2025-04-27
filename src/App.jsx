import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList'



function App() {
  
  return (
    <div>
      <img src="/turtle.png" alt="Turtle" className="w-full h-64 object-cover" />
      <div className="min-h-screen bg-gray-100/80 flex flex-col items-center p-6">
        <h1 className="text-3xl font-winkyRough font-bold underline">To do Turtle</h1>
        <TodoList />
      </div>
    </div>
  )
}

export default App
