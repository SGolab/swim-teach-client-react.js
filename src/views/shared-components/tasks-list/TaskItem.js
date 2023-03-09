import styles from './TasksList.module.css'
import {getImageForTitle} from "../../../Utils";
import {useNavigate} from "react-router-dom";

function TaskItem({task}) {

    const navigate = useNavigate();

    return (
        <div className={styles.taskItem} onClick={task.detailsId ? () => navigate(`/skillTree/${task.detailsId}`) : ''}>

            {task.stageTitle &&
                <div className={styles.imgContainer}>
                    <img src={getImageForTitle(task.stageTitle)} alt={''}/>
                </div>
            }

            {task.subjectTitle &&
                <div className={styles.imgContainer}>
                    <img src={getImageForTitle(task.subjectTitle)} alt={''}/>
                </div>
            }

            {!task.detailsId &&
                <div className={styles.imgContainer}>
                    <img src={'/custom.png'} alt={''}/>
                </div>
            }

            <span>{task.title}</span>

            <div className={styles.repsContainer}>
                {task.amount + ' ' + task.unit}
            </div>
        </div>
    )
}

export default TaskItem;