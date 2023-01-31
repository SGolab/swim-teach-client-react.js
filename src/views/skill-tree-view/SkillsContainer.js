import {getColorForStatus, getImageForStatus} from "../../DataFetching";

function SkillsContainer({items, setItem}) {
    return (
        <div className='skills-container'>
            {items.map(skill => <SkillTile skill={skill} setSkill={setItem}/>)}
        </div>
    )
}

function SkillTile({skill, setSkill}) {
    return (
        <div className='skill-tile' onClick={() => setSkill(skill)}>
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