import styles from "./IndexView.module.css"
import {getColorForStatus, getImageForStatus} from "../../DataFetching";

function LatestSkillMarks({skillMarks}) {
    return (
        <div className={styles.latestSkillMarksContainer}>
            <div className={styles.titleContainer}>
                <img src={'self-control.png'}/>
                LATEST SKILL MARKS
            </div>

            <div className={styles.btnContainer}>
                <div className={styles.detailsBtn}>FULL DETAILS</div>
            </div>

            <div className={styles.skillMarksList}>
                {skillMarks?.map(sm =>
                    <div className={styles.skillMarksListItem}>
                        <div className={styles.imageContainer} style={{backgroundColor: getColorForStatus(sm.skillStatus)}}>
                            <img src={getImageForStatus(sm.skillStatus)}/>
                        </div>
                        {sm.skillDetailsTitle}
                    </div>)}
            </div>

        </div>
    )
}

export default LatestSkillMarks;