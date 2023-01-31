import LessonHistoryTableRowItem from "./LessonHistoryTableRowItem";
import SkillMarkList from "./SkillMarkList";

function LessonHistoryTableRow({lesson}) {

    return (
        <div className='lesson-history-table-row'>
            <LessonHistoryTableRowItem text={lesson.dateTime}/>
            <LessonHistoryTableRowItem text={lesson.location}/>
            <SkillMarkList skillMarks={lesson.skillMarks}/>
        </div>
    )
}

export default LessonHistoryTableRow;