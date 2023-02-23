import {useEffect, useState} from "react";
import ItemsContainer from "./ItemsContainer";
import './SkillTreeView.css'
import {fetchSkillTree} from "../../../Utils";
import PathHeader from "./PathHeader";
import SkillPresentation from "./SkillPresentation";
import {useParams} from "react-router-dom";
import SkillsContainer from "./SkillsContainer";
import useFetch from "../../../hooks/useFetch";

function SkillTreeView() {

    const [data] = useFetch(`/progressTree`)

    const [stage, setStage] = useState();
    const [subject, setSubject] = useState();
    const [skill, setSkill] = useState();

    const {skillDetailsId} = useParams()

    useEffect(() => {
            if (skillDetailsId && data) {
                function findPathToGivenSkillDetails(json, skillDetailsId) {
                    for (const stage of json.stages) {
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
                findPathToGivenSkillDetails(data, skillDetailsId)
            }
        }, [data, skillDetailsId])

    function renderContent() {

        if (skill) {
            return <SkillPresentation skill={skill}/>
        }

        if (subject) {
            return <SkillsContainer items={subject.skills} setItem={setSkill}/>
        }

        if (stage) {
            return <ItemsContainer items={stage.subjects} setItem={setSubject}/>
        }

        if (data) {
            return <ItemsContainer items={data.stages} setItem={setStage}/>
        } else {
            return <h1>Loading...</h1>
        }
    }

    return (
        <div className="view">
            <div className='content-container'>
                <PathHeader stage={stage} setStage={setStage}
                            subject={subject} setSubject={setSubject}
                            skill={skill} setSkill={setSkill}/>
                {renderContent()}
            </div>
        </div>
    )
}

export default SkillTreeView;