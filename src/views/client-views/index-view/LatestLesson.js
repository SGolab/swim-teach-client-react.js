import styles from "./LatestLesson.module.css";
import SkillMarkList from "../../shared-components/lesson-history-table/SkillMarkList";
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
                <div className={styles.skillMarksListContainer}>
                    <SkillMarkList skillMarks={lesson.skillMarks}/>
                </div>
            }

        </div>
    )
}

export default LatestLesson;