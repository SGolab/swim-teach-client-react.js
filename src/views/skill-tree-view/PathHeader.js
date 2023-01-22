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
            <div className='path-item-empty' onClick={handleClickEmpty}><span> > </span></div>
            {stage && <PathItem value={stage} setValue={handleClickStage}/>}
            {subject && <PathItem value={subject} setValue={handleClickSubject}/>}
            {skill && <PathItem value={skill}/>}
        </div>
    )
}

export default PathHeader;