import styles from "./LatestLesson.module.css";
import SkillList from "../../shared-components/skill-list/SkillList";
import {useState} from "react";

function LatestLesson({lesson}) {

    const [isOpened, setIsOpened] = useState(false)

    return (
        <div className={styles.contentContainer} onClick={() => setIsOpened(prev => !prev)}>

            <div className={styles.header}>

                <div className={styles.titleContainer}>
                    <img src={'teach.png'}/>
                    LATEST LESSON
                </div>

                <div className={styles.extendArrow}>
                    <img src={'caret-down.png'}/>
                </div>
            </div>


            {isOpened && lesson &&
                <div className={styles.extension}>
                    <div className={styles.skillsAcquiredText}>ACQUIRED SKILLS</div>

                    <div className={styles.skillMarksListContainer}>
                        <SkillList skills={lesson.skillMarks}/>
                    </div>
                </div>
            }

        </div>
    )
}

export default LatestLesson;