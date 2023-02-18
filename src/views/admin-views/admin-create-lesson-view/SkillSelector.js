import styles from "./SkillSelector.module.css"
import {useState} from "react";
import {getColorForStatus, getImageForStatus, getImageForTitle} from "../../../Utils";

const boxShadowInset = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'

function SkillSelector({skillTree, uploadedSkills, uploadSelectedSkills, handleClose}) {

    const [selectedStage, setSelectedStage] = useState()
    const [selectedSubject, setSelectedSubject] = useState()
    const [selectedSkills, setSelectedSkills] = useState([...uploadedSkills])

    const handleSelectStage = function (stage) {
        setSelectedStage(stage)
        setSelectedSubject(null)
    }

    const handleReset = function () {
        setSelectedStage(null)
        setSelectedSubject(null)
        setSelectedSkills([])
    }

    const addSkill = function (skill) {
        if (selectedSkills.includes(skill)) {
            const newArray = [...selectedSkills]

            const index = newArray.indexOf(skill);
            if (index > -1) { // only splice array when item is found
                newArray.splice(index, 1); // 2nd parameter means remove one item only
            }

            setSelectedSkills(newArray)
        } else {
            setSelectedSkills(prev => [...prev, skill])
        }
    }

    return (
        <>
            <div className={styles.skillSelector}>

                <div className={styles.exitBtn} onClick={handleClose}>
                    <img src={'/exit.png'}/>
                </div>

                <div className={styles.itemSelect}>
                    {skillTree.stages?.map(stage =>
                        <div className={styles.item}
                             onClick={() => handleSelectStage(stage)}
                             style={{boxShadow: (stage === selectedStage ? boxShadowInset : '')}}>
                            <img src={getImageForTitle(stage.title)}/>
                        </div>)}
                </div>

                {selectedStage &&
                    <div className={styles.itemSelect}>
                        {selectedStage.subjects?.map(subject =>
                            <div className={styles.item}
                                 onClick={() => setSelectedSubject(subject)}
                                 style={{boxShadow: (subject === selectedSubject ? boxShadowInset : '')}}>
                                <img src={getImageForTitle(subject.title)}/>
                            </div>)}
                    </div>
                }

                {selectedSubject &&
                    <div className={styles.skillSelect}>
                        {selectedSubject.skills?.map(skill =>
                            <div className={styles.skillItem}
                                 style={{boxShadow: (selectedSkills.includes(skill) ? boxShadowInset : '')}}>

                                <span>{skill.title}</span>

                                <div className={styles.imgContainer}
                                     style={{
                                         boxShadow: (skill.status === 'NOT_TRAINED' ? boxShadowInset : ''),
                                         backgroundColor: getColorForStatus('NOT_TRAINED')
                                     }}
                                     onClick={() => addSkill(skill)}
                                >
                                    <img src={getImageForStatus('NOT_TRAINED')} alt={''}/>
                                </div>

                                <div className={styles.imgContainer}
                                     style={{
                                         boxShadow: (skill.status === 'TRAINED' ? boxShadowInset : ''),
                                         backgroundColor: getColorForStatus('TRAINED')
                                     }}
                                     onClick={() => addSkill(skill)}
                                >
                                    <img src={getImageForStatus('TRAINED')} alt={''}/>
                                </div>

                                <div className={styles.imgContainer}
                                     style={{
                                         boxShadow: (skill.status === 'ACQUIRED' ? boxShadowInset : ''),
                                         backgroundColor: getColorForStatus('ACQUIRED')
                                     }}
                                     onClick={() => addSkill(skill)}
                                >
                                    <img src={getImageForStatus('ACQUIRED')} alt={''}/>
                                </div>
                            </div>)}
                    </div>
                }

                {
                    <div className={styles.selectedSkills}>
                        {selectedSkills.map(skill =>
                            <div className={styles.selectedSkillItem}>
                                <div>{skill.title}</div>
                            </div>)
                        }
                    </div>
                }

                <button onClick={handleReset}>RESET</button>
                <button onClick={() => {
                    uploadSelectedSkills(selectedSkills);
                    handleClose()
                }}>
                    CONFIRM
                </button>

            </div>
        </>
    )
}

export default SkillSelector;