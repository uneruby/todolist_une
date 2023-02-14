import React from "react";
import { useState } from 'react';
type task = {
    taskName: String, 
    state: boolean, 
    details: String,
}

export const Alltasks:React.FC = () => {
    const [todo,settodo] = useState("");
    const [detail,setdetail] = useState("");
    const [todoList,settodoList] = useState<task[]>([]);
    const onClickAddtodo = () => {
        settodoList([...todoList, { taskName: todo, state: false, details: detail}])
        settodo("")
        setdetail("")
    };
 

  return (
    <div>
      <input 
        type="text"
        value={todo}
        placeholder="タスク名"
        onChange={event => settodo(event.target.value)}>
      </input>
      <input 
        type="text"
        value={detail}
        placeholder="詳細"
        onChange={event => setdetail(event.target.value)}>
      </input>
      <button onClick={onClickAddtodo} >登録</button>
      <div>
        {todoList.map((todoView, index)=>(
          <div key={index}>
            <input type="checkbox"></input>{todoView.taskName}：{todoView.details}
          </div>))}
      </div>
      <div>
        <button>終了済み</button>
      </div>
    </div>
    )
}