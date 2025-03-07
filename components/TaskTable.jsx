import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { MdDelete } from "react-icons/md";
  import { FaEdit } from "react-icons/fa";
import PopUp from "./PopUp";
  

const TaskTable = ({taskList, changeStatus, deleteTask, editTaskId, addNewTask}) => {
    const notFinished = "bg-red-500 rounded-2xl py-1 px-2 text-white"
    const finished = "bg-green-500 rounded-2xl py-1 px-2 text-white"

    function handleDelete(index){
        deleteTask(index)
    }

  return (
    <div className="flex w-[80%] xl:w-[50%] md:w-[60%] sm:w-[70%] justify-center items-center mt-10">
    <Table>
        <TableHeader>
            <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Task</TableHead>
            <TableHead className="text-right">Date</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {/* Map All Task here*/}
            {taskList.map((item, index) => {
            return (
            <TableRow key={index}>
            <TableCell className="font-medium">{item ? item._id : 1}</TableCell>
            <TableCell className="cursor-pointer" onClick={() => changeStatus(item._id)}><span className={item.status === false ? notFinished : finished}>{item.status === true ? "Completed" : "Pending"}</span></TableCell>
            <TableCell className="max-sm:w-[40%]">{item ? item.title : "Buying new swim wear"}</TableCell>
            <TableCell className="text-right">{item ? item.date : "12/10/2014"}</TableCell>
            <TableCell className="flex flex-row gap-2 items-center justify-end">
                <MdDelete size={25} cursor="pointer" onClick={() => handleDelete(item._id)}/>
                <PopUp data={item} handleEdit={() => editTaskId(item._id)} addNewTask={addNewTask}/>
            </TableCell>
            </TableRow>
                )
            })}
        </TableBody>
    </Table>
    </div>

  )
}

export default TaskTable