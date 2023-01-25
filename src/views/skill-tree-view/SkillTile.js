import {getLoremIpsum, getImageForStatus} from "../../DataFetching";

function SkillTile({skill, setSkill}) {
    return (
        <div className='skill-tile' onClick={() => setSkill(skill)}>
            <div className='skill-overview'>
                <img src={getImageForStatus(skill.status)}/>
                <span>{skill.title}</span>
            </div>
            <div className='skill-details'>
                <span>{skill.description ? skill.description : getLoremIpsum()}</span>
            </div>
        </div>
    );
}

export default SkillTile;