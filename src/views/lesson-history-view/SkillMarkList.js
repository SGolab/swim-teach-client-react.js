import SkillMarkItem from "./SkillMarkItem";

function SkillMarkList({skillMarks}) {
    return (
        <div className='skillmark-list'>
            {skillMarks.map(sm => <SkillMarkItem skillMark={sm}/>)}
        </div>
    );
}

export default SkillMarkList;