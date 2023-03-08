import styles from "./SkillMarkSelector.module.css"
import {useState} from "react";
import {getColorForStatus, getImageForStatus, getImageForTitle, StatusEnum} from "../../../Utils";
import SkillMarkList from "../skill-mark-list/SkillMarkList";

const boxShadowInset = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'

function SkillMarkSelector({skillTree, uploadedSkillMarks, uploadSkillMarks, handleClose}) {

    const [selectedStage, setSelectedStage] = useState(skillTree.stages[0])
    const [selectedSubject, setSelectedSubject] = useState()
    const [skillMarks, setSkillMarks] = useState([...uploadedSkillMarks])

    const handleSelectStage = function (stage) {
        setSelectedStage(stage)
        setSelectedSubject(null)
    }

    const handleReset = function () {
        setSelectedSubject(null)
        setSkillMarks([])
    }

    const addSkillMark = function (skill, status) {

        const foundSkillMark = skillMarks.find(sm => sm.detailsId === skill.detailsId)

        if (foundSkillMark) {

            if (foundSkillMark.status === status) { //remove skillMark
                removeSkillMark(foundSkillMark)
            } else { //change status of skillMark
                foundSkillMark.status = status;
                setSkillMarks(prev => [...prev]) //force rerender
            }

        } else {

            const sm = {
                detailsId: skill.detailsId,
                title: skill.title,
                status: status,
                prevStatus: skill.status
            }

            setSkillMarks(prev => [...prev, sm])
        }
    }

    const removeSkillMark = function (skillMark) {

        const newArray = [...skillMarks]

        const index = newArray.indexOf(skillMark);
        if (index > -1) { // only splice array when item is found
            newArray.splice(index, 1); // 2nd parameter means remove one item only
        }

        setSkillMarks(newArray)
    }

    return (
        <>
            <div className={styles.skillMarkSelector}>

                <div className={styles.exitBtn} onClick={handleClose}>
                    <img src={'/exit.png'}/>
                </div>

                <div className={styles.itemSelect}>
                    {skillTree.stages?.map(stage =>
                        <div className={styles.item}
                             onClick={() => handleSelectStage(stage)}
                             style={{boxShadow: (stage === selectedStage ? boxShadowInset : '')}}>
                            <img src={getImageForTitle(stage.title)} alt={''}/>
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

                <div className={styles.skillSelect}>
                    {!selectedSubject && <div className={styles.noSubjectSelectedText}>NO SUBJECT SELECTED</div>}
                    {selectedSubject &&
                        selectedSubject.skills?.map(skill =>
                            <div className={styles.skillItem}>

                                <span>{skill.title}</span>

                                {Object.keys(StatusEnum).map(status => {
                                    return (
                                        <div className={styles.imgContainer}
                                             style={{
                                                 boxShadow: (skill.status === status ? boxShadowInset : ''),
                                                 outline: (skillMarks.find(sm => sm.detailsId === skill.detailsId)?.status === status && 'solid black 2px'),
                                                 backgroundColor: getColorForStatus(status)
                                             }}
                                             onClick={() => {
                                                 addSkillMark(skill, status)
                                             }}
                                        >
                                            <img src={getImageForStatus(status)} alt={''}/>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                </div>

                <div className={styles.skillMarksContainer}>
                    {skillMarks.length === 0 && <div className={styles.noSkillMarksText}>NO SKILL MARKS</div>}
                    <SkillMarkList skillMarks={skillMarks} handleRemoveSkillMark={removeSkillMark}/>
                </div>

                <div className={styles.btnContainer}>
                    <button onClick={handleReset}>
                        <img src={'/reset.png'}/>
                    </button>

                    <div className={styles.selectedText}>{'SELECTED: ' + skillMarks.length}</div>

                    <button onClick={() => {
                        uploadSkillMarks(skillMarks);
                        handleClose()
                    }}>
                        <img src={'/upload.png'}/>
                    </button>
                </div>

            </div>
        </>
    )
}

export default SkillMarkSelector;