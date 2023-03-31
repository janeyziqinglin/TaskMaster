import React, { useEffect, useState } from 'react'
import Task from './Task'
import TaskForm from './TaskForm'
import { toast } from 'react-toastify';
import axios from "axios";
import { URL } from '../App';
import loadingImg from "../assets/loader.gif";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        completed: false,
    });

    //get name, so we can use it later 
    const {name} = formData;

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData({ ...formData, [name]: value}) //existing property,name, value
    };

    const getTasks= async() => {
        setIsLoading(true)
        try {
            const {data} = await axios.get(`${URL}/api/tasks`)
            setTasks(data)
            setIsLoading(false)
        } catch (error) {
            toast.error(error.message);
            setIsLoading(false)
        }
    }

    useEffect( () => {
        getTasks()
    }, [])

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

    const deleteTask = async (id) => {
        try {
            await axios.delete(`${URL}/api/tasks/${id}`)
            //refresh the page
            getTasks()
        } catch (error) {
            toast.error(error.message);
        }
    }

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
      {isLoading && (
        <div className = "--flex-center">
            <img src ={loadingImg} alt = "Loading" />
        </div>
        )}
      {
        !isLoading && tasks.length === 0 ? (
            <p className = "--py"> No task added. 
            Please add a task</p>
        ) : (
          <>
            {tasks.map((task, index) => {
                return <Task key={task._id} task=
                {task} index={index} deleteTask = {deleteTask}/>;
            })}
          </>
        )}
    </div>
  );
}

export default TaskList
