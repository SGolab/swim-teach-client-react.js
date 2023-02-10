import styles from "./IndexView.module.css";
import {getColorForStatus, getImageForStatus} from "../../Utils";
import {useNavigate} from "react-router-dom";

function CurrentHomework({homeworkItem}) {

    const navigate = useNavigate()

    const handleFullDetails = function () {
        if (homeworkItem) {
            navigate(`/homework/${homeworkItem.id}`)
        }
    }

    return (
        <div className={styles.currentHomeworkContainer}>

            <div className={styles.titleContainer} onClick={handleFullDetails}>
                <img src={'write.png'}/>
                CURRENT HOMEWORK
            </div>

            <div className={styles.dateContainer}>{homeworkItem?.date}</div>

            <div className={styles.skillsGrid}>
                {homeworkItem?.skills
                    .map(skill =>
                        <div className={styles.skillsGridItem}
                             style={{backgroundColor: getColorForStatus(skill.status)}}>
                            <img src={getImageForStatus(skill.status)}/>
                        </div>
                    )}
                {homeworkItem?.customSkills &&
                    <div className={styles.skillsGridItem}>
                        <img src='/custom.png'/>
                    </div>
                }
            </div>

        </div>
    )
}

export default CurrentHomework;