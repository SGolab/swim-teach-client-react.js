import styles from "./IndexView.module.css"
import {getColorForStatus, getImageForStatus} from "../../../Utils";
import {useNavigate} from "react-router-dom";
import SkillMarkList from "../../shared-components/lesson-history-table/SkillMarkList";

function LatestSkillMarks({skillMarks}) {

    const navigate = useNavigate();

    return (
        <div className={styles.latestSkillMarksContainer}>

            <div className={styles.titleContainer} onClick={() => navigate('/lessonHistory')}>
                <img src={'self-control.png'}/>
                LATEST SKILL MARKS
            </div>

            {skillMarks && <SkillMarkList skillMarks={skillMarks}/>}

        </div>
    )
}

export default LatestSkillMarks;