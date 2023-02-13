import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  const [todo,settodo] = useState("");
  const [addtodo,setAddtodo]  = useState("");
  const todoList:Array<string> = [];
  const onClickAddtodo = () => {
    setAddtodo(todo);
    settodo("");
    todoList.push(addtodo)
    {todoList.map((todoItem, index)=>(<div key={index}>{todoItem}</div>))}
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
      <p>・{addtodo}</p>
    </div>
    )
}
