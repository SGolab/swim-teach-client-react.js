import LessonHistoryTableRow from "./LessonHistoryTableRow";
import LessonHistoryTableHeader from "./LessonHistoryTableHeader";

function LessonHistoryTable({lessons}) {

    return (
        <div className="lesson-history-table">
            <LessonHistoryTableHeader/>
            {lessons.map(lesson => {
                return <LessonHistoryTableRow lesson={lesson}/>
            })}
        </div>
    )

}

export default LessonHistoryTable;