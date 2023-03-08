import {useNavigate} from "react-router-dom";
import styles from './SkillList.module.css'

function SkillPreview({skill}) {

    const navigate = useNavigate()

    return (
        <div className={styles.skillPreview}>
            <div className={styles.videoContainer}>
                <iframe
                    src={skill.url}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen={true}>
                </iframe>
            </div>
            <div className={styles.fullDetailsBtn} onClick={() => navigate(`/skillTree/${skill.detailsId}`)}>
                SEE FULL DETAILS
            </div>
        </div>
    )
}

export default SkillPreview;