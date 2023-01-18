import SkillMarkContainer from "./SkillMarkContainer";

function SkillMarkList({skillMarks}) {
    return (
        <div className='skillmark-list'>
            {skillMarks.map(sm => <SkillMarkContainer skillMark={sm}/>)}
        </div>
    );
}

export default SkillMarkList;