import {getImageForStatus, getImageForTitle, getLoremIpsum, StatusEnum} from "../../../Utils";
import {useEffect, useState} from "react";
import ProgressGraph from "../progress-graph/ProgressGraph";

import styles from './SkillTreePresentation.module.css'

function ItemTile({item, setItem}) {

    const [progressPercentage, setProgressPercentage] = useState()
    const [isInfo, setIsInfo] = useState(false);

    const handleClickInfoBtn = function (e) {
        setIsInfo(prev => !prev)
        e.stopPropagation()
    }

    useEffect(() => {
        setProgressPercentage(computeProgressPercentage(item))
    }, [item])

    return (
        <div className={styles.itemTile} onClick={() => setItem(item)}>
            <div className={styles.itemOverview}>
                <img src={item.status ? getImageForStatus(item.status) : getImageForTitle(item.title)}/>
                <span>{item.title}</span>
                {item.description && !isInfo &&
                    <div className={styles.infoButton} onClick={handleClickInfoBtn}>
                        <img src={'/info.png'}/>
                    </div>}
            </div>

            {(item.subjects || item.skills) &&
                <ProgressGraph progressPercentage={progressPercentage}/>
            }

            {isInfo &&
                <div className={styles.infoModal}>
                    <div className={styles.infoModalText}>
                        {item.description && item.description}
                    </div>

                    <div className={styles.exitBtn} onClick={handleClickInfoBtn}>
                        <img src={'/exit.png'}/>
                    </div>
                </div>
            }
        </div>
    )
}

function computeProgressPercentage(item) {
    let total = 0;
    let completed = 0;

    let skills;

    if (item.subjects) {
        skills = item.subjects.flatMap(subject => subject.skills)
    } else if (item.skills) {
        skills = item.skills
    } else {
        return 0
    }

    skills.forEach(skill => {
        total++;
        if (skill.status === StatusEnum.ACQUIRED) {
            completed++;
        } else if (skill.status === StatusEnum.TRAINED) {
            completed += .5
        }
    })

    const percentage = completed / total * 100

    return (Math.round(percentage * 100) / 100).toFixed(0);
}

export default ItemTile;