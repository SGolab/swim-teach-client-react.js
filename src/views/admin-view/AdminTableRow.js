import {useNavigate} from "react-router-dom";

function AdminTableRow({swimmer}) {

    const navigate = useNavigate()

    function handleSeeLessonHistory() {
        navigate(`swimmers/${swimmer.id}/lessonHistory`)
    }

    function handleSeeSkillTree() {
        navigate(`swimmers/${swimmer.id}/skillTree`)
    }

    function handleCreateLesson() {
        navigate(`swimmers/${swimmer.id}/createLesson`)
    }

    return (
        <div className='admin-table-row'>
            {/*<LessonHistoryTableRowItem text={swimmer.id}/>*/}
            {/*<LessonHistoryTableRowItem text={swimmer.firstName + ' ' + swimmer.lastName}/>*/}
            <div className='admin-table-options-container'>
                <div className={'admin-table-options-item'} onClick={handleSeeLessonHistory}>SEE LESSON HISTORY</div>
                <div className={'admin-table-options-item'} onClick={handleSeeSkillTree}>SEE SKILLS</div>
                <div className={'admin-table-options-item'} onClick={handleCreateLesson}>CREATE LESSON</div>
            </div>
        </div>
    )
}

export default AdminTableRow;