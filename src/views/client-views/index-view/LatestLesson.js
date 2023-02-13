import styles from "./IndexView.module.css";
import {useNavigate} from "react-router-dom";

function LatestLesson({lesson}) {

    const navigate = useNavigate();

    return (
        <div className={styles.latestLessonContainer}>

            <div className={styles.titleContainer} onClick={() => navigate('/lessonHistory')}>
                <img src={'teach.png'}/>
                LATEST LESSON
            </div>


            <div className={styles.latestLessonInfoContainer}>
                <span>{lesson?.location}</span>
                <span>{lesson?.date + ' ' + lesson?.time}</span>
            </div>

        </div>
    )
}

export default LatestLesson;