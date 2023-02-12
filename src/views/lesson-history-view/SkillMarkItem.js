import {getColorForStatus, getImageForStatus} from "../../Utils";
import styles from './LessonHistoryView.module.css'


function SkillMarkItem({skillMark, setSelectedSkill}) {

    const handleClick = function (e) {
        setSelectedSkill(skillMark)
        e.stopPropagation()
    }

    return (
        <div className={styles.skillmarkItem} onClick={handleClick}>
            <div className={styles.skillmarkStatusLabel} style={{backgroundColor: getColorForStatus(skillMark.skillStatus)}}>
                <img src={getImageForStatus(skillMark.skillStatus)} alt="img"/>
            </div>
            <span>{skillMark.skillDetailsTitle}</span>
        </div>
    )
}

export default SkillMarkItem;