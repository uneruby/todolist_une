// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import { TaskVeiwer } from '@/parts/TaskViewer'
import { Alltasks } from '@/parts/Alltasks'

export default function Home() {
  return (
    <div>
      <p>todo</p>
      <Alltasks/>
    </div>
    )
}
