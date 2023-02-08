import styles from "./IndexView.module.css";
import {useNavigate} from "react-router-dom";

function LatestLesson({lesson}) {

    const navigate = useNavigate();

    return (
        <div className={styles.latestLessonContainer}>

            <div className={styles.titleContainer}>
                <img src={'teach.png'}/>
                LATEST LESSON
            </div>
            <div className={styles.btnContainer}>
                <div className={styles.detailsBtn} onClick={() => navigate('/lessonHistory')}>FULL DETAILS</div>
            </div>


            <div className={styles.latestLessonInfoContainer}>
                <span>{lesson?.location}</span>
                <span>{'\t' + lesson?.dateTime}</span>
            </div>

        </div>
    )
}

export default LatestLesson;