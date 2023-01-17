import LessonHistoryTableHeaderItem from "./LessonHistoryTableHeaderItem";

function LessonHistoryTableHeader() {

    return (
    <div className={'lesson-history-table-header'}>
        <LessonHistoryTableHeaderItem text='DATE'/>
        <LessonHistoryTableHeaderItem text='LOCATION'/>
        <LessonHistoryTableHeaderItem text='SKILLMARKS'/>
    </div>
    )
}

export default LessonHistoryTableHeader