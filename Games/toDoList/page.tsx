'use client'
import React, { useState } from 'react'

const Todo = () => {
  const [todo, setTodo] = useState("")
  const [list, setList] = useState([])

  const addTodo = () => {
    if (todo.trim() === "") return
    setList([...list, todo])
    setTodo("")
  }

  return (
    <div className="p-4">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="New task"
        className="border p-2"
      />

      <button onClick={addTodo} className="ml-2">
        Add
      </button>

      <ul className="mt-4">
        {list.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
