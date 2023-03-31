import React, { useState } from 'react'
import Task from './Task'
import TaskForm from './TaskForm'
import { toast } from 'react-toastify';
import axios from "axios";
import { URL } from '../App';


const TaskList = () => {
    const [formData, setFormData] = useState({
        name: "",
        completed : false
    })
    //get name, so we can use it later 
    const {name} = formData

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData({ ...formData, [name]: value}) //existing property,name, value
    };

    
    const createTask= async(e) => {
        e.preventDefault()
        // console.log(formData)
        if (name === ""){
            return toast.error("Input field cannot be empty");
        }
        try {
            await axios.post(`${URL}/api/tasks`,formData);
            toast.success("Task added");
            setFormData({...formData, name: ""});
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    };

  return (
    <div>
      <h2>Task Master</h2>
      <TaskForm name = {name} handleInputChange = {handleInputChange} createTask= {createTask}/>
      <div className = "--flex-between --pb">
        <p>
            <b> Total Tasks:</b> 0
        </p>
        <p>
            <b> Completed Tasks:</b> 0
        </p>
      </div>
      <hr />
      <Task />
    </div>
  )
}

export default TaskList
