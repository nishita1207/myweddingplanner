
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle, indexVal }) => {
  return (
    <div
      className={`task ${task.reminder && 'reminder'}`}
      onDoubleClick={() => onToggle(task.text)}
    >
      <h3>
        {task.text}{' '}
        <FaTimes
          style={{ color: '', cursor: 'pointer' }}
          onClick={() => onDelete(indexVal)}
        />
      </h3>
      <h5>{task.day}</h5>
    </div>
  )
}

export default Task