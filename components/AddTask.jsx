"use client"

import React from 'react'
import { useState } from "react"
import axios from 'axios'

const AddTask = ({submit, task, setTask}) => {

    function handleSetTask(e){
        const {name, value} = e.target 
        setTask(prev => {
            return {...prev, [name]: value}
        })
    }
    

  return (
    <div className='flex flex-col w-full justify-center items-center'>
    <div className='flex xl:flex-row w-[50%] justify-center items-center gap-3 max-sm:flex-col min-sm:w-[70%] flex-col max-sm:w-full'>
        <label>New Task</label>
        <input type="text" value={task.title} placeholder="Type a new task" onChange={handleSetTask} className="input w-[50%] outline-gray-800 bg-gray-100  rounded h-8 px-4" name="title"/>
        <input type="datetime-local" value={task.date} onChange={handleSetTask} name="date" className="pl-2 h-8 outline-gray-800 bg-gray-100"/>
    </div>
    <div className='w-[38%]'>
        <button disabled={!task.title || !task.date}className='btn bg-green-300 rounded-2xl w-full mt-4 h-8 cursor-pointer drop-shadow-sm hover:bg-green-500' type="submit" onClick={submit}>Add Task</button>
    </div>
    </div>
  )
}

export default AddTask