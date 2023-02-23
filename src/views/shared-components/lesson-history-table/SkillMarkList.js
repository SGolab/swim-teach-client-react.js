import SkillMarkItem from "./SkillMarkItem";
import styles from '../../client-views/lesson-history-view/LessonHistoryView.module.css'

function SkillMarkList({skillMarks, setSelectedSkill}) {
    return (
        <div className={styles.skillmarkList}>
            <div className={styles.skillsAcquiredText}>SKILLS ACQUIRED</div>
            {skillMarks.map(sm => <SkillMarkItem skillMark={sm} setSelectedSkill={setSelectedSkill}/>)}
        </div>
    );
}

export default SkillMarkList;