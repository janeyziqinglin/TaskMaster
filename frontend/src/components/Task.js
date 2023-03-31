import {BiCheckDouble,BiEdit,BiTrash} from 'react-icons/bi'

const Task = ({task, index, deleteTask,getSingleTask,setToComplete}) => {
  return (
    <div className= {task.completed ? "task completed" : "task"}>
        <p>
            <b> {index + 1}. </b>
            {task.name}
        </p>
        <div className = "task-icons">
            <BiCheckDouble color='green' onClick={() => setToComplete(task)} />
            <BiEdit color='purple' onClick={() => getSingleTask(task)}/>
            <BiTrash  color='red' onClick={() => deleteTask(task._id)}/>
        </div>
    </div>
  )
}

export default Task

