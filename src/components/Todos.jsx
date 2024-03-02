import { useEffect, useState } from "react"

export function Todos(){

    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    },[])


    return(
        <>
            <h1>Todos</h1>
            <ol>
                {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
            </ol>
        </>
    )
}