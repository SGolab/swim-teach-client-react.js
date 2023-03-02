import styles from "./IndexView.module.css"
import LatestLesson from "./LatestLesson";
import CurrentHomework from "./CurrentHomework";
import LatestSkillMarks from "./LatestSkillMarks";
import useFetch from "../../../hooks/useFetch";
import ProgressBar from "./ProgressBar";
import useIsMobile from "../../../hooks/useIsMobile";
import NavBtnBar from "./NavBtnBar";

function IndexView() {

    const isMobile = useIsMobile()

    const [userData] = useFetch("/userDetails")
    const [homeworkData] = useFetch("/homework")
    const [lessonData] = useFetch("/lessonHistory")
    const [skillsData] = useFetch("/progressTree")

    return (
        <div className={styles.indexView}>

            {!isMobile &&
                <div className={styles.greeting}>
                    {'Hello again, ' + (userData?.firstName ? userData.firstName : '')}
                </div>
            }

            <ProgressBar skillsData={skillsData}/>

            {isMobile &&
                <NavBtnBar/>
            }

            <div className={styles.contentContainer}>
                <LatestLesson lesson={lessonData?.lessons[0]}/>
                <CurrentHomework homework={homeworkData?.homeworks[0]}/>
                {/*<LatestSkillMarks skillMarks={lessonData?.lessons.flatMap(l => l.skillMarks).slice(0, 5)}/>*/}
            </div>
        </div>
    )
}

export default IndexView;