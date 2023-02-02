import './HomeworkView.css'
import {useEffect, useState} from "react";
import {fetchHomework} from "../../DataFetching";
import HomeworkList from "./HomeworkList";
import HomeworkSkillPreview from "./HomeworkSkillPreview";
import HomeworkSkillList from "./HomeworkSkillList";

function HomeworkView() {

    const [data, setData] = useState();
    const [homeworkItem, setHomeworkItem] = useState();
    const [skillSelected, setSkillSelected] = useState();

    const handleSelectHomeworkItem = function(homeworkItem) {
        setSkillSelected(null)
        setHomeworkItem(homeworkItem)
    }

    useEffect(() => {
        const dataFetch = async () => {
            const json = await (
                await fetchHomework()
            );

            setData(json)
        }
        dataFetch()
    }, [])

    useEffect(() => {
        if (data && data.homeworks.length > 0) {
            setHomeworkItem(data.homeworks[0])
        }
    }, [data])

    return (
        <div className='view'>
            <div className='homework-container'>
                {data ? <HomeworkList homeworkList={data?.homeworks} selectedHomeworkItem={homeworkItem} setHomeworkItem={handleSelectHomeworkItem}/> :
                    <h1>Loading...</h1>}
                <div className='homework-details'>
                {homeworkItem && <HomeworkSkillList homeworkItem={homeworkItem} skillSelected={skillSelected} setSkillSelected={setSkillSelected}/>}
                {skillSelected ? <HomeworkSkillPreview skill={skillSelected}/> : <h1 style={{display:'flex', justifyContent:'center', alignItems: 'center', color: 'gray'}}>SELECT SKILL TO SEE PREVIEW</h1>}
                </div>
            </div>
        </div>
    )
}

export default HomeworkView;