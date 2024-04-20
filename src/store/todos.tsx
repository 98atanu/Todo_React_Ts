import { ReactNode, createContext, useContext, useState } from "react";

export  type TodosProviderProps = {
    children : ReactNode
}

export type Todo = {
    id : string;
    task : string;
    completed : boolean;
    createdAt : Date;
}

export type TodosContext = {
    todos : Todo[];
    handleAddTodo:(task:string) => void;//call signature
    toggleTodoAsCompleted:(id:string)=> void;
    handleDeleteTodo:(id:string)=> void;
}

export const todosContext = createContext<TodosContext | null>(null)

export const TodosProvider = ({ children }:TodosProviderProps) => {

    const [todos, setTodos] = useState<Todo[]>([])

    const handleAddTodo = (task:string) => {
        setTodos((prev)=>{
            const newTodos:Todo[] = [
                {
                id : Math.random().toString(),
                task : task,
                completed : false,
                createdAt : new Date()
            },
            ...prev
        ]
        
        return newTodos
        })
    }

    const toggleTodoAsCompleted = (id:string) => {
        setTodos((prev)=>{
            let newTodos = prev.map((todo)=>{
                if (todo.id === id) {
                    return {...todo,completed: !todo.completed}
                }
                return todo;
            })
            return newTodos
        })

    }

    handleDeleteTodo= (id:string)=> {

    }
    
    return <todosContext.Provider value={{todos, handleAddTodo, toggleTodoAsCompleted}}>
        {children}
    </todosContext.Provider>

}

export const  useTodos = ()=> {
    const  todosConsumer = useContext(todosContext);
    if (!todosConsumer) {
        throw new Error("useTodos used  outside  of provider")
    }
    return todosConsumer
}
