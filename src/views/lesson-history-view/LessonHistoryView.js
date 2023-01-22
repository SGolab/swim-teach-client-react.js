import {useEffect, useState} from "react";
import './LessonHistoryView.css'
import LessonHistoryTable from "./LessonHistoryTable";
import {fetchLessonHistory} from "../../DataFetching";

function LessonHistoryView() {

    const [data, setData] = useState();

    useEffect(() => {
        const dataFetch = async () => {
            const json = await (
                await fetchLessonHistory()
            );

            setData(json)
        }
        dataFetch()
    }, [])

    return (
        <div className="view">
            {data ? <LessonHistoryTable lessons={data?.lessons}/> : <h1>Loading...</h1>}
        </div>
    )
}

export default LessonHistoryView;