import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todo()
{
const todos=useSelector(state => state.todos)   //todos array in todoSlice
const dispatch=useDispatch()
return (
<>
<div>Todo</div>
{todos.map((todo)=> {
return (
<li key={todo.id}>
{todo.text}
<button 
onClick={()=> dispatch(removeTodo(todo.id))}
>Delete</button>

</li>
)
})}

</>
)
}

export default Todo;