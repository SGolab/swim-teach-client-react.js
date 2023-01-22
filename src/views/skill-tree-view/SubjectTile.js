function SubjectTile({subject, setSubject}) {

    return (
        <div className='subject-tile' onClick={() => setSubject(subject)}>
            <h1>{subject.title}</h1>
        </div>
    )
}

export default SubjectTile;