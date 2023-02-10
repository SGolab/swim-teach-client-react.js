import styles from "./IndexView.module.css"
import {getColorForStatus, getImageForStatus} from "../../Utils";
import {useNavigate} from "react-router-dom";

function LatestSkillMarks({skillMarks}) {

    const navigate = useNavigate();

    return (
        <div className={styles.latestSkillMarksContainer}>

            <div className={styles.titleContainer} onClick={() => navigate('/lessonHistory')}>
                <img src={'self-control.png'}/>
                LATEST SKILL MARKS
            </div>

            <div className={styles.skillMarksList}>
                {skillMarks?.map(sm =>
                    <div className={styles.skillMarksListItem}>
                        <div className={styles.imageContainer} style={{backgroundColor: getColorForStatus(sm.skillStatus)}}>
                            <img src={getImageForStatus(sm.skillStatus)}/>
                        </div>
                        <span>{sm.skillDetailsTitle}</span>
                    </div>)}
            </div>

        </div>
    )
}

export default LatestSkillMarks;