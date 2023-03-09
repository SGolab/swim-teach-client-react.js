import styles from './CurrentHomework.module.css'
import {useState} from "react";
import SkillList from "../../shared-components/skill-list/SkillList";
import TasksList from "../../shared-components/tasks-list/TasksList";

function CurrentHomework({homework}) {

    const [isOpen, setIsOpen] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    return (
        <div className={styles.contentContainer} onClick={() => setIsOpen(prev => !prev)}>

            <div className={styles.header}>

                <div className={styles.titleContainer}>
                    <img src={'write.png'}/>
                    CURRENT HOMEWORK
                </div>

                <div className={styles.extendArrow}>
                    <img src={'caret-down.png'}/>
                </div>
            </div>

            {isOpen &&
                <div className={styles.dropdown}>
                    {homework &&
                        <>
                            <div className={styles.tasksText}>TASKS</div>

                            <div className={styles.tasksContainer}>
                                <TasksList tasks={homework.tasks}/>
                            </div>
                        </>
                    }

                    <div className={styles.completeToggle}
                         style={{backgroundColor: (isComplete ? 'lightgreen' : 'red')}}
                         onClick={(e) => {
                             e.stopPropagation()
                             setIsComplete(prev => !prev)
                         }}>

                        <img src={isComplete ? '/correct-icon.webp' : '/blocked-icon.png'}/>
                    </div>

                </div>
            }
        </div>
    )
}

export default CurrentHomework;