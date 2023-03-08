import styles from "./IndexView.module.css"
import {getColorForStatus, getImageForStatus} from "../../../Utils";
import {useNavigate} from "react-router-dom";
import SkillList from "../../shared-components/skill-list/SkillList";

function LatestSkillMarks({skillMarks}) {

    const navigate = useNavigate();

    return (
        <div className={styles.latestSkillMarksContainer}>

            <div className={styles.titleContainer} onClick={() => navigate('/lessonHistory')}>
                <img src={'self-control.png'}/>
                LATEST SKILL MARKS
            </div>

            {skillMarks && <SkillList skillMarks={skillMarks}/>}

        </div>
    )
}

export default LatestSkillMarks;