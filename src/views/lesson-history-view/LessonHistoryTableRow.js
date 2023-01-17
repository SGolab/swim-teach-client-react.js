import LessonHistoryTableRowItem from "./LessonHistoryTableRowItem";

function LessonHistoryTableRow({lesson}) {

    return (
        <div className='lesson-history-table-row'>
            <LessonHistoryTableRowItem text={lesson.dateTime}/>
            <LessonHistoryTableRowItem text={lesson.location}/>
            <LessonHistoryTableRowItem skillMarks={lesson.skillMarks}/>
        </div>
    )
}

export default LessonHistoryTableRow;