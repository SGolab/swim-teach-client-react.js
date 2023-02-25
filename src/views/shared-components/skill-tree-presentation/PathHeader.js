import PathItem from "./PathItem";
import useIsMobile from "../../../hooks/useIsMobile";
import PathItemStatus from "./PathItemStatus";

import styles from './SkillTreePresentation.module.css'

function PathHeader({stage, setStage, subject, setSubject, skill, setSkill}) {

    const isMobile = useIsMobile();

    function handleClickEmpty() {
        setStage(undefined)
        setSubject(undefined)
        setSkill(undefined)
    }

    function handleClickStage() {
        setSubject(undefined)
        setSkill(undefined)
    }

    function handleClickSubject() {
        setSkill(undefined)
    }

    return (
        <div className={styles.pathHeader}>
            <div className={styles.pathItem} onClick={handleClickEmpty}><span> > </span></div>
            {stage && <PathItem value={stage} setValue={handleClickStage} isGrayedOut={!subject}/>}
            {subject && <PathItem value={subject} setValue={handleClickSubject} isGrayedOut={!skill}/>}
            {!isMobile && skill && <PathItem value={skill} isGrayedOut={true}/>}
            {skill?.status && <PathItemStatus status={skill.status}/>}
        </div>
    )
}

export default PathHeader;