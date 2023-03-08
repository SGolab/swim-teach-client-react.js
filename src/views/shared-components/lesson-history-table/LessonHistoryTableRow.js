import SkillList from "../skill-list/SkillList";
import {useState} from "react";
import {getWeekday} from "../../../Utils";
import {useNavigate} from "react-router-dom";
import useIsMobile from "../../../hooks/useIsMobile";
import SkillPreview from "../skill-list/SkillPreview";
import styles from './LessonHistoryTable.module.css'

function LessonHistoryTableRow({lesson, isFirst}) {

    const navigate = useNavigate();
    const isMobile = useIsMobile();

    const [selectedSkill, setSelectedSkill] = useState()

    const [isOpened, setIsOpened] = useState(false)

    const handleClickRow = function () {
        setSelectedSkill(null)
        setIsOpened(prev => !prev)
    }

    return (
        <div className={styles.lessonHistoryTableRow} onClick={handleClickRow}>

            <div className={styles.dateTimeInfo} style={{fontWeight: (isFirst ? 'bold' : '')}}>
                <div>{getWeekday(lesson.date) + ' ' + lesson.date}</div>
                <div>{lesson.time}</div>
            </div>

            <div>
                {lesson.location}
            </div>

            {lesson.homeworkId &&
                <div className={styles.homeworkInfo} onClick={() => navigate(`/homework/${lesson.homeworkId}`)}>
                    <img src={'/write.png'}/>
                    {!isMobile && <span>Homework</span>}
                </div>
            }

            <div className={styles.extendArrow} style={{transform: (isOpened ? 'rotate(180deg)' : '')}}>
                <img src={'/caret-down.png'}/>
            </div>

            {isOpened &&
                <div className={styles.lessonRowDropdown}>
                    <div className={styles.skillsAcquiredText}>ACQUIRED SKILLS</div>

                    <SkillList skills={lesson.skillMarks} setSelectedSkill={setSelectedSkill}/>
                    {selectedSkill && <SkillPreview skill={selectedSkill}/>}
                </div>
            }

        </div>
    )
}

export default LessonHistoryTableRow;