"use client";
import { useState } from "react"
import { FaEdit } from "react-icons/fa";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

const PopUp = ({data, handleEdit, addNewTask}) => {

  const [open, setOpen] = useState(false)
  const [newTask, setNewTask] = useState({
    title: data.title,
    date: data.date,
    status: false
  })

  function openDialog(){
    setOpen(true)
  }

  function handleSetTask(e){
    const {name, value} = e.target 
    setNewTask(prev => {
        return {...prev, [name]: value}
    })
  }

  function submitNewTask(){
    addNewTask(newTask)
    setNewTask({
        title: data.title || "",
        date: data.date || "",
        status: false
    })
    setOpen(false)
  }


  return (
    <>
    <Dialog open={open}>
        <DialogTrigger><FaEdit size={22} cursor="pointer" onClick={handleEdit && openDialog}/></DialogTrigger>
        <DialogTitle className="hidden">Are you sure changing the task ?</DialogTitle>
        <DialogDescription className="hidden">
          You can change the task later if you can your mind
      </DialogDescription>
        <DialogContent>
            <DialogHeader>
            <label>Update Task</label>
            <input type="text" value={newTask.id ? newTask.title : data.title} placeholder="Update your task" onChange={handleSetTask} className="input w-full outline-gray-800 bg-gray-100  rounded h-8 px-4" name="title"/>
            <input type="datetime-local" value={newTask.id ? newTask.date : data.date} onChange={handleSetTask} name="date" className="pl-2 h-8 outline-gray-800 bg-gray-100"/>
            <div className='w-[38%]'>
              <button disabled={!data.title || !data.date}className='btn bg-green-300 rounded-2xl w-full mt-4 h-8 cursor-pointer' type="submit" onClick={submitNewTask}>Update</button>
            </div>
            </DialogHeader>
        </DialogContent>
    </Dialog>
</>
  )
}

export default PopUp