import {useEffect, useState} from "react";
import SkillPresentation from "../skill-presentation/SkillPresentation";
import SkillsContainer from "./SkillsContainer";
import ItemsContainer from "./ItemsContainer";
import PathHeader from "./PathHeader";

import styles from './SkillTreePresentation.module.css'

function SkillTreePresentation({stages, skillDetailsId}) {

    const [stage, setStage] = useState();
    const [subject, setSubject] = useState();
    const [skill, setSkill] = useState();

    useEffect(() => {
        if (skillDetailsId) {
            function findPathToGivenSkillDetails(stages, skillDetailsId) {
                for (const stage of stages) {
                    for (const subject of stage.subjects) {
                        for (const skill of subject.skills) {
                            if (skill.detailsId == skillDetailsId) {
                                setStage(stage)
                                setSubject(subject)
                                setSkill(skill)
                                return;
                            }
                        }
                    }
                }
            }

            findPathToGivenSkillDetails(stages, skillDetailsId)
        }
    }, [stages])

    function renderContent() {
        if (skill) {
            return (
                <div className={styles.skillPresentationContainer}>
                    <SkillPresentation skill={skill}/>
                </div>
            )
        }

        if (subject) {
            return <SkillsContainer items={subject.skills} setItem={setSkill}/>
        }

        if (stage) {
            return <ItemsContainer items={stage.subjects} setItem={setSubject}/>
        }

        return <ItemsContainer items={stages} setItem={setStage}/>
    }

    return (
        <div className={styles.skillTreePresentation}>
            <PathHeader stage={stage} setStage={setStage}
                        subject={subject} setSubject={setSubject}
                        skill={skill} setSkill={setSkill}/>
            {renderContent()}
        </div>
    )
}

export default SkillTreePresentation