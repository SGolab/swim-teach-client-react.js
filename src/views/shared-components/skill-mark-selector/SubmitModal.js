import styles from "./SubmitModal.module.css";
import SkillMarkList from "../skill-mark-list/SkillMarkList";

function SubmitModal({swimmerName, date, time, location, skillMarks, handleSubmit, handleClose}) {

    return (
        <div className={styles.submitModal}>

            <div className={styles.exitBtn} onClick={handleClose}>
                <img src={'/exit.png'}/>
            </div>

            <div className={styles.contentContainer}>

                <div>{swimmerName}</div>

                <div className={styles.date}>{date.toLocaleDateString('pl', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                })}</div>

                <div className={styles.time}>{time.toLocaleString("pl", {
                    hour: '2-digit',
                    hour12: false,
                    minute: '2-digit'
                })}</div>

                <div>{location}</div>

                <div className={styles.skillMarkListContainer}>
                    <SkillMarkList skillMarks={skillMarks}/>
                </div>

                <div className={styles.btnContainer}>
                    <button onClick={handleClose}>CANCEL</button>
                    <button onClick={handleSubmit}>CONFIRM</button>
                </div>
            </div>
        </div>
    )
}

export default SubmitModal;