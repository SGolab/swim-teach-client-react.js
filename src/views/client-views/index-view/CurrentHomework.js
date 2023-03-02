import styles from './CurrentHomework.module.css'
import {useState} from "react";

function CurrentHomework({homework}) {

    let [isOpened, setIsOpened] = useState(false);

    return (
        <div className={styles.contentContainer} onClick={() => setIsOpened(prev => !prev)}>

            <div className={styles.header}>

                <div className={styles.titleContainer}>
                    <img src={'write.png'}/>
                    CURRENT HOMEWORK
                </div>

                <div className={styles.extendArrow}>
                    <img src={'caret-down.png'}/>
                </div>
            </div>

            {isOpened && homework &&
                <div className={styles.skillsContainer}>
                    <div className={styles.skillsText}>SKILLS</div>

                    <div className={styles.skillsContainer}>
                        {homework.skills.map(skill =>
                            <div
                                className={styles.skillItem}>{skill.title}
                            </div>)
                        }
                    </div>


                    {homework.customSkills.length &&
                        <>
                            <div className={styles.skillsText}>CUSTOM SKILLS</div>

                            <div className={styles.customSkillsContainer}>
                                <div className={styles.imgContainer}>
                                    <img src={'/custom.png'}/>
                                </div>

                                {homework.customSkills.map(customSkill => <div
                                    className={styles.skillItem}>{customSkill}</div>)}
                            </div>
                        </>
                    }
                </div>
            }


        </div>
    )
}

export default CurrentHomework;