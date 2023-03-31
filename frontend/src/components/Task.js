import {BiCheckDouble,BiEdit,BiTrash} from 'react-icons/bi'

const Task = () => {
  return (
    <div className='task'>
        <p>
            <b> 1.</b>
        </p>
        <div className = "task-icons">
            <BiCheckDouble color='green' />
            <BiEdit />
            <BiTrash  color='red'/>
        </div>
    </div>
  )
}

export default Task
