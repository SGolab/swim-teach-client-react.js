import styles from "./SkillMarkList.module.css";
import {getColorForStatus, getImageForStatus, StatusEnum} from "../../../Utils";

function SkillMarkList({skillMarks, handleRemoveSkillMark}) {
    return (
        <div className={styles.skillMarkList}>
            {skillMarks.map(sm =>
                <div className={styles.skillMarkItem}
                     style={{backgroundColor: isWarning(sm) ? 'rgb(238, 210, 2)' : ''}}>
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

                    {handleRemoveSkillMark && <img src={'/exit.png'} onClick={() => handleRemoveSkillMark(sm)} alt={''}/>}

                </div>
            )}
        </div>
    )
}

export const isWarning = function (skillMark) {

    const statuses = Object.keys(StatusEnum)

    return skillMark.skillStatus === StatusEnum.NOT_TRAINED ||
        statuses.indexOf(skillMark.skillStatus) < statuses.indexOf(skillMark.skillPrevStatus)
}

export default SkillMarkList;