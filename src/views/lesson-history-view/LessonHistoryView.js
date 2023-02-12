import LessonHistoryTable from "./LessonHistoryTable";
import useFetch from "../../useFetch";
import styles from './LessonHistoryView.module.css'

function LessonHistoryView() {

    const [data] = useFetch(`/lessonHistory`)

    return (
        <div className="view">
            <div className={styles.lessonHistoryTableContainer}>
                <div className={styles.lessonHistoryTableTitle}>
                    LESSONS
                </div>
                {data ?
                    (data.lessons ? <LessonHistoryTable lessons={data.lessons}/> : <h1>JSON MALFORMED</h1>)
                    :
                    <h1>Loading...</h1>
                }
            </div>
        </div>
    )
}

export default LessonHistoryView;