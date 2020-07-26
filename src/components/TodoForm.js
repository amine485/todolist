import React ,{useState} from 'react'
function TodoForm({addTodo}) {

/*addTodo*/

 const[value,setValue]=useState("");
 const handleSubmit = (e) => {
  e.preventDefault();
  if(value.trim()) {
    addTodo(value);
    setValue("")
}}
 
/*return*/

    return (
   <div className="header" >
         <form  onSubmit={handleSubmit} >
          <p style={{margin:'5px'}}>My Todo List</p>
          <input className="input" placeholder="Enter your task .." type="text" value={value}  onChange={(change)=> setValue(change.target.value)}/> 
          <button className="addBtn" addBtn>ADD</button>
          </form> 
          </div>
    )
    }
  
  
export default TodoForm