import {getColorForStatus, getImageForStatus, getImageForTitle} from "../../../Utils";
import styles from './LessonHistoryTable.module.css'
import {useNavigate} from "react-router-dom";

function SkillMarkItem({skillMark}) {

    const navigate = useNavigate()

    const handleClick = function (e) {
        navigate(`/skillTree/${skillMark.skillDetailsId}`)
        e.stopPropagation()
    }

    return (
        <div className={styles.skillmarkItem} onClick={handleClick}>

            <div className={styles.imgContainer}>
                <img src={getImageForTitle(skillMark.stageTitle)} alt={''}/>
            </div>

            <div className={styles.imgContainer}>
                <img src={getImageForTitle(skillMark.subjectTitle)} alt={''}/>
            </div>

            <div className={styles.imgContainer} style={{backgroundColor: getColorForStatus(skillMark.skillStatus)}}>
                <img src={getImageForStatus(skillMark.skillStatus)} alt={''}/>
            </div>

            <span>{skillMark.skillDetailsTitle}</span>
        </div>
    )
}

export default SkillMarkItem;