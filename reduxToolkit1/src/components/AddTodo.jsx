import React from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 
import {useState} from 'react'

function AddTodo()
{
const [input,setInput]=useState('')
const dispatch=useDispatch();

const addTodoHandler=(e)=>{
e.preventDefault()
dispatch(addTodo(input))
setInput('')
}

return (
<>
<form
onSubmit={addTodoHandler}
className="space-x-3 mt-12"
>
<input
type='text'
className='bg-gray-200 justify-center items-center flex flex-wrap'
placeholder='Enter a todo'
value={input}
onChange={(e)=> setInput(e.target.value)}

/>
<button
type='submit'
className='text-white p-4 bg-slate-300 mt-12'
>

</button>

</form>
</>
)
}

export default AddTodo;