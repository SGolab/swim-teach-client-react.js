import {getColorForStatus, getImageForStatus, getImageForTitle} from "../../../Utils";
import styles from './SkillList.module.css'
import {useNavigate} from "react-router-dom";

function SkillItem({skill}) {

    const navigate = useNavigate()

    const handleClick = function (e) {
        navigate(`/skillTree/${skill.detailsId}`)
        e.stopPropagation()
    }

    return (
        <div className={styles.skillItem} onClick={handleClick}>

            <div className={styles.imgContainer}>
                <img src={getImageForTitle(skill.stageTitle)} alt={''}/>
            </div>

            <div className={styles.imgContainer}>
                <img src={getImageForTitle(skill.subjectTitle)} alt={''}/>
            </div>

            <div className={styles.imgContainer} style={{backgroundColor: getColorForStatus(skill.status)}}>
                <img src={getImageForStatus(skill.status)} alt={''}/>
            </div>

            <span>{skill.title}</span>
        </div>
    )
}

export default SkillItem;