import { delimiter } from "path";
import React from "react";
import { useState } from 'react';
type task = {
    taskName: string, 
    state: boolean, 
    details: string,
}

export const Alltasks:React.FC = () => {
    const [todo,settodo] = useState("");
    const [detail,setdetail] = useState("");
    const [state,setState] = useState(false)
    const [todoList,settodoList] = useState<task[]>([]);

    const addtodo = () => {
        settodoList([...todoList, { taskName: todo, state: state, details: detail}])
        settodo("")
        setdetail("")
    };
    const getState = (index: number, beforeState: boolean) => {
      if(beforeState){
        setState(false)
        todoList[index].state = false
        settodoList([...todoList])
      }else{
        setState(true)
        todoList[index].state = true
        settodoList([...todoList])
      }
       
    console.table(todoList)
    }
    
    const updatetodoList = () => {
        var newtodoList = todoList.filter(todo => todo.state === false)
        console.table(newtodoList);
        settodoList([...newtodoList])
    }

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
      <button onClick={addtodo}>登録</button>
      <div>
        {todoList.map((todoView, index)=>(
          <div key={index}>
            <input type="checkbox" checked={todoView.state} onChange={() => getState(index, todoView.state)}></input>{todoView.taskName}：{todoView.details}
          </div>))}
      </div>
      <div>
        <button onClick={updatetodoList}>終了済み</button>
      </div>
    </div>
    )
}