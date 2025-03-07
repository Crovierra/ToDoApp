import { connectDatabase } from '@/lib/server/database'
import Task from '@/models/Task';
import { NextResponse } from 'next/server'

export async function PUT(req, {params}) {
    await connectDatabase();
    const { title, date, status } = await req.json();
    const updatedTask = await Task.findByIdAndUpdate(params.id, { title, date, status }, { new: true})
    return NextResponse.json(updatedTask, {status: 200})
}

export async function DELETE(req, res){
    await connectDatabase();
    const { id } = await req.json();
    await Task.findByIdAndDelete(id);
    return NextResponse.json({message: "Task Deleted"}, {status: 200})

}