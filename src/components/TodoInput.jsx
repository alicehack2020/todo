import React, { useState } from 'react'

const TodoInput = ({handdleAdd}) => {
const [title,setTitle]=useState("")

 const addData=()=>{
    handdleAdd(title)
    //console.log(title);
 }
  return (
    <div>
         <input type="text" name="" id="" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <button onClick={addData}>submit</button>
    </div>
  )
}

export default TodoInput