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
    const [todoList,settodoList] = useState<task[]>([]);
    var finishtodoList = [];

    const addtodo = () => {
        settodoList([...todoList, { taskName: todo, state: false, details: detail}])
        settodo("")
        setdetail("")
    };
    const getState = (index:number, taskName:string) => {
        console.log(index)

        var result = finishtodoList.some( function( value ) {
            return value === index;
        });

    if(result){
        finishtodoList.splice(index,1)
        todoList[index].state = false
        console.table(finishtodoList)
    }else{
        finishtodoList.push(index)
        todoList[index].state = true
        console.table(finishtodoList)
    }
       
    console.table(todoList)
    }
    
    const updatetodoList = () => {
        var newtodoList = todoList
        for(let i = 0; i < finishtodoList.length; i++) {
            var delIndex = finishtodoList[i]
            newtodoList.splice(delIndex,1)
        }
        console.log("update : ", newtodoList);
        settodoList([...newtodoList])
        finishtodoList = []
        console.table(todoList)
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
            <input type="checkbox" onChange={() => getState(index, todoView.taskName)}></input>{todoView.taskName}：{todoView.details}：{todoView.state +""}
          </div>))}
      </div>
      <div>
        <button onClick={updatetodoList}>終了済み</button>
      </div>
    </div>
    )
}