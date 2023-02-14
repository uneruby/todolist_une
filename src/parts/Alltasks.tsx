import React from "react";
import { useState } from 'react';

export const Alltasks:React.FC = () => {
    const [todo,settodo] = useState("");
    const [todoList,settodoList] = useState([{ taskName: "", state: false, details: ""}]);
    const onClickAddtodo = () => {
    settodoList([...todoList, { taskName: todo, state: false, details: ""}])
    settodo("")
  };
 

  return (
    <div>
      <p>todo</p>
      <input 
        type="text"
        value={todo}
        onChange={event => settodo(event.target.value)}>
      </input>
      <button onClick={onClickAddtodo} >登録</button>
      <div>
        {todoList.map((todoView, index)=>(
          <div key={index}>
            <input type="checkbox"></input>{todoView.taskName}
          </div>))}
      </div>
      <div>
        <button>終了済み</button>
      </div>
    </div>
    )
}