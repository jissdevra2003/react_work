import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState={
todos:[{
id:1,
text:"Redux learning"
}]
}

export const todoSlice=createSlice({
name:"todo",
initialState,
reducers:{
addTodo:(state,action)=>{
const todo={
id:nanoid,
text:action.payload
}
state.todos.push(todo)
},
removeTodo:(state,action)=>{
state.todos=state.todos.filter((todo)=>{
return todo.id!==action.payload;
})
}
}
})
 //individual functionalities ko export krte he
export const {addTodo,removeTodo}=todoSlice.actions 

export default todoSlice.reducer;   //state ko sare reducers pass kiye