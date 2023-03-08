import styles from "./SkillMarkList.module.css";
import {getColorForStatus, getImageForStatus, StatusEnum} from "../../../Utils";

function SkillMarkList({skillMarks, handleRemoveSkillMark}) {
    return (
        <div className={styles.skillMarkList}>
            {skillMarks.map(sm =>
                <div className={styles.skillMarkItem}
                     style={{backgroundColor: isWarning(sm) ? 'rgb(238, 210, 2)' : ''}}>
                    {sm.title}
                    <div className={styles.statusImgContainer}
                         style={{backgroundColor: getColorForStatus(sm.prevStatus) === 'transparent' ? 'white' : getColorForStatus(sm.skillPrevStatus)}}>
                        <img src={getImageForStatus(sm.prevStatus)} alt={''}/>
                    </div>
                    <img src={'/straight-right-arrow.png'}/>
                    <div className={styles.statusImgContainer}
                         style={{backgroundColor: getColorForStatus(sm.status)}}>
                        <img src={getImageForStatus(sm.status)} alt={''}/>
                    </div>

                    {handleRemoveSkillMark && <img src={'/exit.png'} onClick={() => handleRemoveSkillMark(sm)} alt={''}/>}

                </div>
            )}
        </div>
    )
}

export const isWarning = function (skillMark) {

    const statuses = Object.keys(StatusEnum)

    return skillMark.status === StatusEnum.NOT_TRAINED ||
        statuses.indexOf(skillMark.status) < statuses.indexOf(skillMark.prevStatus)
}

export default SkillMarkList;