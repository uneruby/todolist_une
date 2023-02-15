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
    const [viewTask, setViewTask] = useState("All")

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
        setState(false)
    }

    const viewAllTasks = () => {
      setViewTask("All")
    }
    const viewCompTasks = () => {
      setViewTask("Comp")
    }
    const viewUnCompTasks = () => {
      setViewTask("UnComp")
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
        <button onClick={viewAllTasks}>全てのタスク</button>
        <button onClick={viewCompTasks}>完了したタスク</button>
        <button onClick={viewUnCompTasks}>未完了のタスク</button>
      </div>
      <div>
        <button onClick={updatetodoList}>完了したタスクを削除する</button>
      </div>
      <div>
        {viewTask == "All" && todoList.map((todoView, index)=>(
          <div key={index}>
            <input type="checkbox" checked={todoView.state} onChange={() => getState(index, todoView.state)}></input>{todoView.taskName}:{todoView.details}
          </div>))
        }
      </div>
      <div> 
        {viewTask == "Comp" && todoList.map((todoView, index)=>{
          return(
            <div key={index}>
              {todoView.state == true? 
                <div>
                  <input type="checkbox" checked={todoView.state} onChange={() => getState(index, todoView.state)}></input>{todoView.taskName}:{todoView.details}
                </div>
                :""
              }
            </div>
            )
        })}
      </div>
      <div>
        {viewTask == "UnComp" && todoList.map((todoView, index)=>{
          return(
            <div key={index}>
              {todoView.state == false? 
                <div>
                  <input type="checkbox" checked={todoView.state} onChange={() => getState(index, todoView.state)}></input>{todoView.taskName}:{todoView.details}
                </div>
                :""
              }
            </div>
          )
        })}
      </div>
    </div>
    )
}