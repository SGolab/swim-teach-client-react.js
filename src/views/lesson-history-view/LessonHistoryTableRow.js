import LessonHistoryTableRowItem from "./LessonHistoryTableRowItem";
import {useState} from "react";
import SkillMarkList from "./SkillMarkList";

function LessonHistoryTableRow({lesson}) {

    const [isOpened, setIsOpened] = useState(false)

    const handleClick = () => {
        setIsOpened((prevState) => !prevState)
    }

    return (
        <div className='lesson-history-table-row' onClick={handleClick}>
            <LessonHistoryTableRowItem text={lesson.dateTime}/>
            <LessonHistoryTableRowItem text={lesson.location}/>

            {isOpened ? <SkillMarkList skillMarks={lesson.skillMarks}/> :
                <LessonHistoryTableRowItem skillMarks={lesson.skillMarks}/>
            }
        </div>
    )
}

export default LessonHistoryTableRow;