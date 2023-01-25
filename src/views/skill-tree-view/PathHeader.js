import PathItem from "./PathItem";

function PathHeader({stage, setStage, subject, setSubject, skill, setSkill}) {

    function handleClickEmpty() {
        setStage(undefined)
        setSubject(undefined)
        setSkill(undefined)
    }

    function handleClickStage() {
        setSubject(undefined)
        setSkill(undefined)
    }

    function handleClickSubject() {
        setSkill(undefined)
    }

    return (
        <div className='path-header'>
            <div className='path-item empty' onClick={handleClickEmpty}><span> > </span></div>
            {stage && <PathItem value={stage} setValue={handleClickStage} isGrayedOut={!subject}/>}
            {subject && <PathItem value={subject} setValue={handleClickSubject} isGrayedOut={!skill}/>}
            {skill && <PathItem value={skill} isGrayedOut={true}/>}
        </div>
    )
}

export default PathHeader;