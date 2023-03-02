import SkillMarkItem from "./SkillMarkItem";
import styles from './LessonHistoryTable.module.css'

function SkillMarkList({skillMarks}) {

    return (
        <div className={styles.skillmarkList}>
            <div className={styles.skillsAcquiredText}>SKILLS ACQUIRED</div>
            {skillMarks.map(sm => <SkillMarkItem skillMark={sm}/>)}
        </div>
    );
}

export default SkillMarkList;