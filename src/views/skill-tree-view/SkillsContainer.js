import {getColorForStatus, getImageForStatus} from "../../Utils";

function SkillsContainer({items, setItem}) {
    return (
        <div className='skills-container'>
            {items.map(skill => <SkillTile skill={skill} setSkill={setItem}/>)}
        </div>
    )
}

function SkillTile({skill, setSkill}) {

    const handleClick = function() {
        if (skill.status !== 'NOT_TRAINED') {
            setSkill(skill)
        }
    }

    return (
        <div className='skill-tile' onClick={handleClick}>
            {(skill.status === 'NOT_TRAINED') ? <img src={getImageForStatus(skill.status)}/>
                :
                <>
                    <div className='status-label' style={{backgroundColor: getColorForStatus(skill.status)}}>
                        <img src={skill.status ? getImageForStatus(skill.status) : '/logo192.png'}/>
                    </div>
                    <span>{skill.title}</span>
                </>
            }
        </div>
    )
}

export default SkillsContainer;