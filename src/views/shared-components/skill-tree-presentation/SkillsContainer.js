import {getColorForStatus, getImageForStatus, StatusEnum} from "../../../Utils";

import styles from './SkillTreePresentation.module.css'

function SkillsContainer({items, setItem}) {
    return (
        <div className={styles.skillsContainer}>
            {items.map(skill => <SkillTile skill={skill} setSkill={setItem}/>)}
        </div>
    )
}

function SkillTile({skill, setSkill}) {

    const handleClick = function() {
        if (skill.status !== StatusEnum.NOT_TRAINED) {
            setSkill(skill)
        }
    }

    return (
        <div className={styles.skillTile} onClick={handleClick}>
            {(skill.status === StatusEnum.NOT_TRAINED) ? 
                <img src={getImageForStatus(StatusEnum.NOT_TRAINED)} alt={''}/>
                :
                <>
                    <div className={styles.statusLabel} style={{backgroundColor: getColorForStatus(skill.status)}}>
                        <img src={skill.status ? getImageForStatus(skill.status) : '/logo192.png'} alt={''}/>
                    </div>
                    
                    <span>{skill.title}</span>
                </>
            }
        </div>
    )
}

export default SkillsContainer;