import {getImageForStatus, getImageForTitle, getLoremIpsum} from "../../Utils";
import {useEffect, useState} from "react";
import ProgressGraph from "./ProgressGraph";

function ItemTile({item, setItem}) {

    const [progressPercentage, setProgressPercentage] = useState()

    useEffect(() => {
        setProgressPercentage(computeProgressPercentage(item))
    }, [item])

    return (
        <div className='item-tile' onClick={() => setItem(item)}>
            <div className='skill-overview'>
                <img src={item.status ? getImageForStatus(item.status) : getImageForTitle(item.title)}/>
                <span>{item.title}</span>
            </div>
            {item.description && <div className='skill-details'><span>{item.description}</span></div>}
            {(item.subjects || item.skills) && <ProgressGraph progressPercentage={progressPercentage}/>}
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
        if (skill.status === 'ACQUIRED') {
            completed++;
        } else if (skill.status === 'TRAINED') {
            completed += .5
        }
    })

    const percentage = completed / total * 100

    return (Math.round(percentage * 100) / 100).toFixed(0);
}

export default ItemTile;