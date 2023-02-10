import {useNavigate} from "react-router-dom";
import styles from './IndexView.module.css'

function NavBtnBar() {

    const navigate = useNavigate()

    return (
    <div className={styles.navBtnBar}>
        <div className={styles.navBtn} onClick={() => navigate('/skillTree')}>SKILLS</div>
        <div className={styles.navBtn} onClick={() => navigate('/lessons')}>LESSONS</div>
        <div className={styles.navBtn} onClick={() => navigate('/homework')}>HOMEWORK</div>
    </div>
    )
}

export default NavBtnBar;