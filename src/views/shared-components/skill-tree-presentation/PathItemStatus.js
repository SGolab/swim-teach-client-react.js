import {getColorForStatus, getImageForStatus} from "../../../Utils";

import styles from './SkillTreePresentation.module.css'

function PathItemStatus({status}) {
    return (
        <div className={styles.pathItem} style={{backgroundColor: getColorForStatus(status)}}>
            <img src={getImageForStatus(status)} alt='img'/>
            <span>{status}</span>
        </div>
    )
}

export default PathItemStatus;