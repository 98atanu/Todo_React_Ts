import  { FormEvent, useState } from 'react'
import { useTodos } from '../store/todos'

const AddTodo = () => {
    const [todo, setTodo] = useState("")
    const {handleAddTodo} = useTodos();

    const handleOnSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddTodo(todo)
        setTodo(" ")

    }
    
  return (
    <form onSubmit={(e)=>handleOnSubmit(e)}>
        <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button type='submit'>Add</button>
    </form>
  )
}

export default AddTodo