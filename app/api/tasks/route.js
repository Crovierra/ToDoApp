import { connectDatabase } from "@/lib/server/database.js"
import Task from '@/models/Task.js'
import { NextResponse } from 'next/server'

export async function GET(){
    await connectDatabase();
    const tasks = await Task.find({})
    return NextResponse.json(tasks, {status: 200})
}

export async function POST(req){
    await connectDatabase();
    const { title, date } = await req.json();

    const task = new Task({title, date})
    await task.save();
    return NextResponse.json(task, {status: 200}) // Next Response cannot be used if Using Pages Router
}

