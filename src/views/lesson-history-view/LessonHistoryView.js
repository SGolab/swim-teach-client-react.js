import './LessonHistoryView.css'
import LessonHistoryTable from "./LessonHistoryTable";
import useFetch from "../../useFetch";

function LessonHistoryView() {

    const [data] = useFetch(`/lessonHistory`)

    return (
        <div className="view">
            {data ? <LessonHistoryTable lessons={data?.lessons}/> : <h1>Loading...</h1>}
        </div>
    )
}

export default LessonHistoryView;