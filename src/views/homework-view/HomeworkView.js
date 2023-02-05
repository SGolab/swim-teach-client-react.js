import './HomeworkView.css'
import {useState} from "react";
import HomeworkList from "./HomeworkList";
import HomeworkDetails from "./HomeworkDetails";
import useFetch from "../../useFetch";

function HomeworkView() {

    const [data] = useFetch(`/homework`)
    const [homeworkItem, setHomeworkItem] = useState();

    return (
        <div className='view'>
            <div className='homework-container'>
                {data ? <HomeworkList homeworkList={data.homeworks} selectedHomeworkItem={homeworkItem} setHomeworkItem={setHomeworkItem}/> : <h1>Loading...</h1>}
                {homeworkItem ? <HomeworkDetails homeworkItem={homeworkItem}/> : <h1 className='select-homework-text'>SELECT HOMEWORK TO SEE PREVIEW</h1>}
            </div>
        </div>
    )
}

export default HomeworkView;