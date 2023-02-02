import HomeworkSkillList from "./HomeworkSkillList";
import HomeworkSkillPreview from "./HomeworkSkillPreview";
import {useEffect, useState} from "react";

function HomeworkDetails({homeworkItem}) {

    const [skillSelected, setSkillSelected] = useState();

    useEffect(() => {
        setSkillSelected(null)
    }, [homeworkItem])

    return (
        <div className='homework-details'>
            <HomeworkSkillList homeworkItem={homeworkItem} skillSelected={skillSelected}
                               setSkillSelected={setSkillSelected}/>

            {skillSelected ? <HomeworkSkillPreview skill={skillSelected}/> :
                <h1 className='select-skill-text'>SELECT SKILL TO SEE PREVIEW</h1>}
        </div>
    )
}

export default HomeworkDetails;