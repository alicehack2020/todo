import TodoLIst from "./components/TodoLIst"; 
import TodoInput from "./components/TodoInput";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; 

function App() {
  const [data,setData]=useState([])

  const handdleAdd=(title)=>{
      
      const todoItem=
      {
        id:uuidv4(),
        title:title
      }

       setData([...data,todoItem])

      console.log(data);
  }


  return (
    <>
     <TodoInput handdleAdd={handdleAdd}></TodoInput>
     <TodoLIst data={data}></TodoLIst>
    </>
  
  );
}

export default App;
