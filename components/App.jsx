"use client"

import React from 'react'
import AddTask from './AddTask'
import TaskTable from './TaskTable'
import { useState, useEffect } from "react"
import axios from 'axios';

const App = () => {
    const [allTask, setAllTask] = useState([])
    const [editId, setEditId] = useState(null)
    const [taskId, setTaskId] = useState(1)
    // If not using database, change the _id to id: taskId. In here MongoDB provide the id.
    const [task, setTask] = useState({
        title: "",
        date: "",
        status: false
    })

    const user = true

    useEffect(() => {
        axios.get('/api/tasks')
        .then(res => setAllTask(res.data))
        .catch(err => console.error(err))
    }, []);

    const addTask = () =>{
        axios.post('/api/tasks', task)
        .then(res => setAllTask([...prevValue, res.data]))
        .catch(err => console.error("Cannot execute addTask :",err))
    }

    function editTaskId(id){
        setEditId(id)
        const taskToEdit = allTask.find(item => item._id === id)
        setTask(taskToEdit)
    }

    function submitEditedTask(editedTask){
        const newUpdatedTask = allTask.map(item => {
            return item._id === editedTask.id ? {...item, ...editedTask} : item
        })
        setAllTask(newUpdatedTask)
        setTask({
            title: "",
            date: "",
            status: false
        })
    }

    function submitTask(){
        // const newId = taskId + 1
        // setTaskId(newId)
        
        setTask({
            title: "",
            date: "",
            status: false
        })

        handleNewTask(task)
    }
    

    function handleNewTask(task){
        setAllTask(prevValue => {
            return [...prevValue, task]
        })
    }

    

    function editStatusTask(id){
        const editedTask = allTask.find((item) => item._id === id)
        if (editedTask){
            const updatedTask = {...editedTask, status: !editedTask.status}
        
        // setAllTask(prevValue => {
        //     return prevValue.map(task => {
        //          return task.id == id ? updatedTask : task
        //       })
        //  })

        axios.put(`/api/tasks/${id}`, { status: updatedTask.status})
        .then(res => setAllTask(prevValue => prevValue.map(task => task._id === id ? res.data : task)))
        }
    }

    function deleteTask(id){
        // setAllTask(prevValue => {
        //     return prevValue.filter((item) => {
        //         return item.id !== id
        //     })
        // })

        axios.delete(`/api/tasks/${id}`)
        .then(() => {
            setAllTask(prevValue => prevValue.filter((item) => item._id !== id));
        })
        .catch(err => console.log("Error deleting task :", err))
    }

  return (
    <div className='flex flex-col mt-5 items-center'>
        <div className='mb-5'>
            <h1 className='text-4xl font-semibold'>To Do List</h1>
        </div>
        <AddTask task={task} submit={user === null ? submitTask : addTask} setTask={setTask}/>
        {allTask.length > 0 ? (
            <p className='mt-5 opacity-80 max-sm:w-[80%]'>If you're done with the task, change the status by clicking the status on your task</p>
        ) : null}
        <TaskTable taskList={allTask} deleteTask={deleteTask} changeStatus={editStatusTask} editTaskId={editTaskId} addNewTask={submitEditedTask}/>
    </div>
  )
}

export default App