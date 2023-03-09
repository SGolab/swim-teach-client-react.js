import styles from './TasksList.module.css'
import TaskItem from "./TaskItem";

function TasksList({tasks}) {
    return (
        <div className={styles.taskList}>
            {tasks.map(task => <TaskItem task={task}/>)}
        </div>
    )
}



export default TasksList;