import {useEffect, useState} from "react";
import StagesContainer from "./StagesContainer";
import './SkillTreeView.css'
import {fetchSkillTree} from "../../DataFetching";
import SubjectsContainer from "./SubjectsContainer";
import PathHeader from "./PathHeader";
import SkillsContainer from "./SkillsContainer";

function SkillTreeView() {

    const [data, setData] = useState();
    const [stage, setStage] = useState();
    const [subject, setSubject] = useState();
    const [skill, setSkill] = useState();

    useEffect(() => {
        const dataFetch = async () => {
            const json = await (
                await fetchSkillTree()
            );

            setData(json)
        }
        dataFetch()
    }, [])

    function renderContent() {

        if (subject) {
            return <SkillsContainer subject={subject} setSkill={setSkill}/>
        }

        if (stage) {
            return <SubjectsContainer stage={stage} setSubject={setSubject}/>
        }

        if (data) {
            return <StagesContainer stages={data.stages} setStage={setStage}/>
        } else {
            return <h1>Loading...</h1>
        }
    }

    return (
        <div className="view">
            <div className='content-container'>
                <PathHeader stage={stage} setStage={setStage} subject={subject} setSubject={setSubject} skill={skill} setSkill={setSkill}/>
                {renderContent()}
            </div>
        </div>
    )
}

export default SkillTreeView;