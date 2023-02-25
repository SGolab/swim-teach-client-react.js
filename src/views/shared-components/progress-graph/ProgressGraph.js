import styles from './ProgressGraph.module.css'

function ProgressGraph({progressPercentage}) {
    return (
        <div className={styles.progressGraph}>

            <div className={styles.shapeContainer}>
                <div className={styles.progressRing}
                     style={{background: `conic-gradient(${getColor(progressPercentage / 100)} ${progressPercentage}%, transparent 0%)`}}>
                </div>
            </div>

            <div className={styles.shapeContainer}>
                <div className={styles.progressRingInnerCircle}></div>
            </div>

            <div className={styles.shapeContainer}>
                <span>{progressPercentage}%</span>
            </div>

        </div>
    )
}

function getColor(value) {
    //value from 0 to 1
    var hue = ((value) * 120).toString(10);
    return ["hsl(", hue, ",70%,50%)"].join("");
}

export default ProgressGraph;