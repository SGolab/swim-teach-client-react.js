import {getImageForTitle} from "../../../Utils";

import styles from './SkillTreePresentation.module.css'

function PathItem({value, setValue, isGrayedOut}) {

    return (
        <div className={styles.pathItem} onClick={setValue}>
            <img src={getImageForTitle(value?.title)}/>
            {(isGrayedOut) && <span>{value?.title}</span>}
        </div>
    )
}

export default PathItem;