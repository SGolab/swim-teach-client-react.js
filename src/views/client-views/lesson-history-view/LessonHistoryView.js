import LessonHistoryTable from "../../shared-components/lesson-history-table/LessonHistoryTable";
import useFetch from "../../../hooks/useFetch";
import styles from './LessonHistoryView.module.css'

function LessonHistoryView() {

    const [lessonHistory] = useFetch(`/lessonHistory`)

    return (
        <div className="view">
            <div className={styles.lessonHistoryTableContainer}>
                {lessonHistory ?
                    (lessonHistory.lessons ? <LessonHistoryTable lessons={lessonHistory.lessons}/> : <h1>JSON MALFORMED</h1>)
                    :
                    <h1>Loading...</h1>
                }
            </div>
        </div>
    )
}

export default LessonHistoryView;