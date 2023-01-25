import {getLoremIpsum} from "../../DataFetching";
import {useEffect, useState} from "react";
import ProgressGraph from "./ProgressGraph";

function StageTile({stage, setStage}) {

    const [progressPercentage, setProgressPercentage] = useState()

    useEffect(() => {
            setProgressPercentage(computeProgressPercentage(stage))
        }, [stage])

    return (
        <div className='skill-tile' onClick={() => setStage(stage)}>
            <div className='skill-overview'>
                <img src='/blocked-icon.png'/>
                <span>{stage.title}</span>
            </div>
            <div className='skill-details'>
                <span>{stage.description ? stage.description : getLoremIpsum()}</span>
            </div>
            <ProgressGraph progressPercentage={progressPercentage}/>
        </div>
    )
}

function computeProgressPercentage(stage) {
    let total = 0;
    let completed = 0;

    stage.subjects.flatMap(subject => subject.skills).forEach(skill => {
        total++;
        if (skill.status === 'COMPLETED') {
            completed++;
        } else if (skill.status === 'TRAINED') {
            completed += .5
        }
    })

    return completed / total * 100;
}

export default StageTile;