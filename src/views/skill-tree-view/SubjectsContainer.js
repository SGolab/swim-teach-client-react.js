import SubjectTile from "./SubjectTile";

function SubjectsContainer({stage, setSubject}) {
    return (
        <div className='skills-container'>
            {stage.subjects.map(subject => <SubjectTile subject={subject} setSubject={setSubject}/>)}
        </div>
    )
}

export default SubjectsContainer;