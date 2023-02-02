import './HomeworkView.css'
import {useEffect, useState} from "react";
import {fetchHomework} from "../../DataFetching";
import HomeworkList from "./HomeworkList";
import HomeworkSkillPreview from "./HomeworkSkillPreview";
import HomeworkSkillList from "./HomeworkSkillList";
import HomeworkDetails from "./HomeworkDetails";

function HomeworkView() {

    const [data, setData] = useState();
    const [homeworkItem, setHomeworkItem] = useState();

    useEffect(() => {
        const dataFetch = async () => {
            const json = await (
                await fetchHomework()
            );

            setData(json)
        }
        dataFetch()
    }, [])

    return (
        <div className='view'>
            <div className='homework-container'>
                {data ? <HomeworkList homeworkList={data?.homeworks} selectedHomeworkItem={homeworkItem} setHomeworkItem={setHomeworkItem}/> : <h1>Loading...</h1>}
                {homeworkItem ? <HomeworkDetails homeworkItem={homeworkItem}/> : <h1 className='select-homework-text'>SELECT HOMEWORK TO SEE PREVIEW</h1>}
            </div>
        </div>
    )
}

export default HomeworkView;