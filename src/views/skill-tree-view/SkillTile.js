function SkillTile({skill, setSkill}) {
    return (
        <div className='skill-tile' onClick={() => setSkill(skill)}>
            <h1>{skill.title}</h1>
        </div>
    );
}

export default SkillTile;