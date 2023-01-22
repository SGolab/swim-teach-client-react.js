import SkillTile from "./SkillTile";

function SkillsContainer({subject, setSkill}) {
    return (
        <div className='skills-container'>
            {subject.skills.map(skill => <SkillTile skill={skill} setSkill={setSkill}/>)}
        </div>
    );
}

export default SkillsContainer;