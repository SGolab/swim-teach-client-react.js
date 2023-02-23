import {useParams} from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import LessonHistoryTable from "../../client-views/lesson-history-view/LessonHistoryTable";

function AdminLessonHistoryView() {

    const {swimmerId} = useParams();

    const [lessonHistory] = useFetch(`/swimmers/${swimmerId}/lessonHistory`)

    return (
        <div className={'view'}>
            {lessonHistory ? <LessonHistoryTable lessons={lessonHistory.lessons}/> : <h1>Loading...</h1>}
        </div>
    )
}

export default AdminLessonHistoryView;