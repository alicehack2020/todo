import React from 'react'

const TodoLIst = ({data}) => {
  return (
    <div>{data.map((e)=>{
        return(<><h1>{e.title}</h1></>)
    })}</div>
  )
}

export default TodoLIst