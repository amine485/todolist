import React ,{useState} from 'react'
import TodoForm from './TodoForm'
const Todo=() =>{
    /*hooks*/
const [todos,setTodos]=useState([
]);
/*delete*/
const handleRemove = id =>{

const deleteList = todos.filter((todo) => todo.id !== id);
setTodos(deleteList)
};
const addTodo = (text) => {
setTodos([...todos, { text, id: Math.random() }])
}

/*return*/
return (
           
<div>
<TodoForm addTodo={addTodo}/>
<br/>
<br/>
<br/>
{todos.map(todo=>{
/*return inside return*/
return(
    
<div > 
    <p  contenteditable="true" id="textarea"  key={todo.id}>{todo.text}</p>  
    <button  onClick={() =>handleRemove(todo.id)} >X</button>

</div> 

    )
})}
 

</div> 
    )
}
export default Todo