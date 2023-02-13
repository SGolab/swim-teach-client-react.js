import styles from './AdminIndexView.module.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function SwimmerList({swimmers}) {

    return (
        <div className={styles.swimmerList}>
            <div className={styles.swimmersText}>SWIMMERS</div>
            {swimmers.map(swimmer => <SwimmerListRow swimmer={swimmer}/>)}
        </div>
    )
}

function SwimmerListRow({swimmer}) {

    const [isOpened, setIsOpened] = useState(false);

    const navigate = useNavigate()

    const switchIsOpened = function () {
        setIsOpened(prev => !prev)
    }

    const createLessonClicked = function (e) {
        e.stopPropagation()
        navigate(`swimmers/${swimmer.id}/createLesson`)
    }

    const skillsClicked = function (e) {
        e.stopPropagation()
        navigate(`swimmers/${swimmer.id}/skillTree`)
    }

    return (
        <div className={styles.swimmerListRow} onClick={switchIsOpened}>
            <div className={styles.swimmerListRowItem}>{swimmer.firstName + ' ' + swimmer.lastName}</div>

            <img className={styles.extendArrow}
                 src={'/caret-down.png'}
                 style={{transform: (isOpened ? 'rotate(180deg' : '')}}/>

            {isOpened &&
                <div className={styles.swimmerListRowDropdown}>
                    <div className={styles.optionsText}>OPTIONS</div>
                    <div className={styles.optionsList}>
                        <div className={styles.optionBtn} onClick={createLessonClicked}>CREATE LESSON</div>
                        <div className={styles.optionBtn} onClick={skillsClicked}>SKILLS</div>
                    </div>
                </div>
            }
        </div>
    )
}

export default SwimmerList;