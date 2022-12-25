import React, { useState } from 'react'
import { addTodo } from '../api';
import { Todo, TodoType } from '../Constents'

type TodoInput = {
  onAdd:(todo:Todo)=>void;
}
const TodoInput = (props:TodoInput) => {
const [value,setValue]=useState<string>("")  
const [type, setType]=useState<TodoType>(TodoType.Learning)
const {onAdd} = props;

const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
  setValue(e.target.value)
}

const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  let data=await addTodo(value, type)
  onAdd(data)
}

const handleType=(e:React.ChangeEvent<HTMLSelectElement>)=>{
  setType(e.target.value as TodoType)
}
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Type here...' value={value} onChange={handleChange} />
      <select value={type} onChange={handleType}>
        {
          Object.values(TodoType).map((todoType)=>(
            <option key={todoType} value={todoType}>{todoType}</option>
          ))
        }
      </select>
      <button type='submit'>Add</button>
    </form>
  )
}

export default TodoInput