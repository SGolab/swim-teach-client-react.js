import './LessonHistoryView.css'
import LessonHistoryTable from "./LessonHistoryTable";
import useFetch from "../../useFetch";

function LessonHistoryView() {

    const [data] = useFetch(`/lessonHistory`)

    return (
        <div className="view">
            <div className={'lesson-history-table-container'}>
                {data ? <LessonHistoryTable lessons={data?.lessons}/> : <h1>Loading...</h1>}
            </div>
        </div>
    )
}

export default LessonHistoryView;