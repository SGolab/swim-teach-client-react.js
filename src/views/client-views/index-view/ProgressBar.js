import styles from "./IndexView.module.css";

function ProgressBar({skillsData}) {
    return (
        <div className={styles.progressBarContainer}>
            {skillsData?.stages.map(stage =>
                <div className={styles.progressBarSection}
                     style={{
                         width: `${computeProgressPercentage(stage) / skillsData.stages.length}%`,
                         backgroundColor: getColor(computeProgressPercentage(stage) / 100)
                     }}>
                </div>)}
        </div>
    )

}

export default ProgressBar;

const computeProgressPercentage = function (stage) {
    let total = 0;
    let completed = 0;

    const skills = stage.subjects.flatMap(subject => subject.skills)

    skills.forEach(skill => {
        total++;
        if (skill.status === 'ACQUIRED') {
            completed++;
        } else if (skill.status === 'TRAINED') {
            completed += .5
        }
    })

    const percentage = completed / total * 100

    return (Math.round(percentage * 100) / 100).toFixed(0);
}

function getColor(value) {
    //value from 0 to 1
    var hue = ((value) * 120).toString(10);
    return ["hsl(", hue, ",70%,50%)"].join("");
}