import {useNavigate} from "react-router-dom";
import styles from './LessonHistoryView.module.css'


function SkillMarkPreview({skill}) {

    const navigate = useNavigate()

    return (
        <div className={styles.skillMarkPreview}>
            <div className={styles.videoContainer}>
                <iframe
                    src={skill.skillDetailsUrl}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen={true}>
                </iframe>
            </div>
            <div className={styles.fullDetailsBtn} onClick={() => navigate(`/skillTree/${skill.skillDetailsId}`)}>
                SEE FULL DETAILS
            </div>
        </div>
    )
}

export default SkillMarkPreview;