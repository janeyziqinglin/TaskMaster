import {BiCheckDouble,BiEdit,BiTrash} from 'react-icons/bi'

const Task = ({task, index}) => {
  return (
    <div className="task">
        <p>
            <b> {index + 1}. </b>
            {task.name}
        </p>
        <div className = "task-icons">
            <BiCheckDouble color='green' />
            <BiEdit color='purple'/>
            <BiTrash  color='red'/>
        </div>
    </div>
  )
}

export default Task
