import styles from "./SkillMarkList.module.css";
import {getColorForStatus, getImageForStatus, StatusEnum} from "../../../Utils";

function SkillMarkList({skillMarks}) {
    return (
        <div className={styles.skillMarkList}>
            {skillMarks.map(sm =>
                <div className={styles.skillMarkItem} style={{backgroundColor: (Object.keys(StatusEnum).indexOf(sm.skillStatus) < Object.keys(StatusEnum).indexOf(sm.skillPrevStatus) ? 'rgb(238, 210, 2)' : '')}}>
                    {sm.skillDetailsTitle}
                    <div className={styles.statusImgContainer}
                         style={{backgroundColor: getColorForStatus(sm.skillPrevStatus) === 'transparent' ? 'white' : getColorForStatus(sm.skillPrevStatus)}}>
                        <img src={getImageForStatus(sm.skillPrevStatus)} alt={''}/>
                    </div>
                    <img src={'/straight-right-arrow.png'}/>
                    <div className={styles.statusImgContainer}
                         style={{backgroundColor: getColorForStatus(sm.skillStatus)}}>
                        <img src={getImageForStatus(sm.skillStatus)} alt={''}/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SkillMarkList;