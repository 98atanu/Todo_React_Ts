import  { useState } from 'react'

const AddTodo = () => {
    const [todo, setTodo] = useState("")

    const handleOnSubmit = () => {
        
    }
    
  return (
    <form onSubmit={handleOnSubmit}>
        <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button type='submit'>Add</button>
    </form>
  )
}

export default AddTodo