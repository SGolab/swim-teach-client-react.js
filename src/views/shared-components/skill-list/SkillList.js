import SkillItem from "./SkillItem";
import styles from './SkillList.module.css'

function SkillList({skills}) { //works for skills and skillmarks

    return (
        <div className={styles.skillList}>
            {skills.map(skill => <SkillItem skill={skill}/>)}
        </div>
    );
}

export default SkillList;