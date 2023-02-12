import PathItem from "./PathItem";
import useIsMobile from "../../useIsMobile";
import PathItemStatus from "./PathItemStatus";

function PathHeader({stage, setStage, subject, setSubject, skill, setSkill}) {

    const isMobile = useIsMobile();

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
        <>
            <div className='path-header'>
                <div className='path-item empty' onClick={handleClickEmpty}><span> > </span></div>
                {stage && <PathItem value={stage} setValue={handleClickStage} isGrayedOut={!subject} isCropped={subject}/>}
                {subject && <PathItem value={subject} setValue={handleClickSubject} isGrayedOut={!skill} isCropped={skill}/>}
                {!isMobile && skill && <PathItem value={skill} isGrayedOut={true} isCropped={true}/>}
                {skill?.status && <PathItemStatus status={skill.status}/>}
            </div>

        </>

    )
}

export default PathHeader;