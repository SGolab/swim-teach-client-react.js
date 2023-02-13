import {getImageForStatus, getImageForTitle, getLoremIpsum} from "../../../Utils";
import {useEffect, useState} from "react";
import ProgressGraph from "./ProgressGraph";

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
        <div className='item-tile' onClick={() => setItem(item)}>
            <div className={'item-overview'}>
                <img src={item.status ? getImageForStatus(item.status) : getImageForTitle(item.title)}/>
                <span>{item.title}</span>
                {item.description && !isInfo &&
                    <div className={'info-button'} onClick={handleClickInfoBtn}>
                        <img src={'/info.png'}/>
                    </div>}
            </div>

            {(item.subjects || item.skills) &&
                <ProgressGraph progressPercentage={progressPercentage}/>
            }

            {isInfo &&
                <div className={'info-modal'}>
                    <div className={'info-modal-text'}>
                        {item.description && item.description}
                    </div>

                    <div className={'exit-btn'} onClick={handleClickInfoBtn}>
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