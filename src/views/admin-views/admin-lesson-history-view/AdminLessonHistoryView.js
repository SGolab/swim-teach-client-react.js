import {useParams} from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import LessonHistoryTable from "../../shared-components/lesson-history-table/LessonHistoryTable";
import styles from "./AdminLessonHistoryView.module.css"

function AdminLessonHistoryView() {

    const {swimmerId} = useParams();

    const [lessonHistory] = useFetch(`/swimmers/${swimmerId}/lessonHistory`)

    return (
        <div className={'view'}>
            <div className={styles.lessonHistoryTableContainer}>
            {lessonHistory ?
                <LessonHistoryTable swimmerName={lessonHistory.swimmerName} lessons={lessonHistory.lessons}/>
                :
                <h1>Loading...</h1>}
            </div>
        </div>
    )
}

export default AdminLessonHistoryView;